import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";
import { facilities } from "@/data/site";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Campus and facilities of Jamia Tul Madina Khanqah Sharif — hostel, library, medical care, R.O water, meals and free laundry.",
      },
      { property: "og:title", content: "Campus & Facilities" },
      {
        property: "og:description",
        content: "Hostel for 120 students, library, medical facility, clean water and daily meals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Campus,
});

function Campus() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Campus & Facilities"
        subtitle="A calm, green campus on K.L.P Road, Khanqah Sharif, with residential facilities for students."
      />

      <Section>
        <Reveal className="overflow-hidden rounded-md border border-border">
          <img
            src={img.campusFront}
            alt="Front view of the Jamia campus with courtyard and lawn"
            className="w-full object-cover"
          />
        </Reveal>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Reveal delay={80} className="overflow-hidden rounded-md border border-border">
            <img
              src={img.teachersGroup}
              alt="Teachers standing at the Jamia entrance"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="overflow-hidden rounded-md border border-border">
            <img
              src={img.ijtema2}
              alt="Gathering held in the Jamia grounds"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Facilities" title="Provided free of cost" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Reveal
              key={facility.label}
              delay={index * 70}
              className="rounded-md border border-border bg-card p-5"
            >
              <h3 className="font-display text-lg font-semibold text-primary">{facility.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{facility.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
