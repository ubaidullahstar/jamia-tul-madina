import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";
import { jamia } from "@/data/site";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Admissions at Jamia Tul Madina Khanqah Sharif — open for one month after Ramadan, 8th pass and age 12+, no fees of any kind.",
      },
      { property: "og:title", content: "Admissions at the Jamia" },
      {
        property: "og:description",
        content: "Free admission, no monthly fee and no hostel fee. Open for one month after Ramadan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admissions,
});

const eligibility = [
  "8th class passed",
  "Age 12 years and above",
  "Willingness to follow the Jamia's Islamic environment and discipline",
];

const fees = [
  "No admission fee",
  "No monthly fee",
  "No hostel fee",
  "Meals, medical care and laundry provided free",
];

function Admissions() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Admissions open for one month after Ramadan each year. Education, hostel and meals are completely free."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-md border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Eligibility</h2>
            <ul className="mt-4 grid gap-3">
              {eligibility.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-md border border-gold/40 bg-gold-soft p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Fees</h2>
            <ul className="mt-4 grid gap-3">
              {fees.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="green">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              How to apply
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-primary-foreground/75">
              Visit the Jamia at {jamia.address}, or contact the administration by phone or WhatsApp
              during the admission period.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${jamia.phone}`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-bold text-gold-foreground transition hover:bg-gold-light"
            >
              Call {jamia.phone}
            </a>
            <a
              href={`https://wa.me/92${jamia.whatsapp.replace(/^0/, "")}`}
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-6 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </Section>

      <Section tone="cream">
        <Reveal className="overflow-hidden rounded-md border border-border">
          <img
            src={img.campusFront}
            alt="The Jamia campus where admissions take place"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
      </Section>
    </>
  );
}
