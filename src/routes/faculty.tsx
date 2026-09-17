import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";

import {
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";
import { img } from "@/data/images";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Mudarse | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "The teaching staff of Jamia Tul Madina Khanqah Sharif, Bahawalpur — Mudarse of Dars-e-Nizami and contemporary subjects.",
      },
      { property: "og:title", content: "Faculty & Mudarse" },
      {
        property: "og:description",
        content:
          "Teachers of Dars-e-Nizami, Qur'an, Hadith and contemporary subjects at the Jamia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faculty,
});

const teachers = [
  {
    designation: "Nazim-e-Ala / Principal",
    name: "Allama Zulfaqar Madani",
    src: img.principal,
  },
  {
    designation: "Best Teacher Award 2024",
    name: "Mudarris of the Jamia",
    src: img.bestTeacher,
  },
];

function Faculty() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Faculty & Mudarse"
        subtitle="The Jamia's teachers guide students in Dars-e-Nizami, Qur'an, Hadith and contemporary subjects."
      />

      <Section>
        <Reveal className="grid gap-6 rounded-md border border-gold/40 bg-gold-soft p-6 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <img
            src={img.bestTeacher}
            alt="Teacher who received the Best Teacher Award 2024"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
          <div>
            <Award className="h-7 w-7 text-gold-foreground" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-primary">
              Best Teacher Award 2024
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              One of the Jamia's Mudarse received the Best Teacher Award in 2024, recognised by the
              Kanzul Madaris Board for teaching quality and character.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Teaching Staff" title="Our Mudarse" />
        </Reveal>
        <Reveal delay={80} className="mt-10 overflow-hidden rounded-md border border-border">
          <img
            src={img.teachersGroup}
            alt="Mudarse of Jamia Tul Madina Khanqah Sharif at the campus entrance"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {teachers.map((teacher, index) => (
            <Reveal
              key={teacher.name}
              delay={index * 90}
              className="rounded-md border border-border bg-card p-5"
            >
              <img
                src={teacher.src}
                alt={teacher.name}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-md object-cover object-top"
              />
              <h3 className="mt-4 font-display text-lg font-semibold">{teacher.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{teacher.designation}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Remaining teacher names and photographs will be added as the Jamia provides them.
        </p>
      </Section>
    </>
  );
}
