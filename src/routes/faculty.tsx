import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";

import {
  ImagePlaceholder,
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";

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
        content: "Teachers of Dars-e-Nizami, Qur'an, Hadith and contemporary subjects at the Jamia.",
      },
    ],
  }),
  component: Faculty;
});

const teachers = [
  { designation: "Nazim-e-Ala / Principal", name: "Allama Zulfaqar Madani", placeholder: "Principal - Allama Zulfaqar Madani" },
  { designation: "Naib Nazim / Vice Principal", name: "Allama Zubair Madani", placeholder: "Vice Principal - Allama Zubair Madani" },
  { designation: "Mudarris — Dars-e-Nizami", name: "Name to be added", placeholder: "Teacher Photo 1" },
  { designation: "Mudarris — Qur'an & Tajweed", name: "Name to be added", placeholder: "Teacher Photo 2" },
  { designation: "Mudarris — Hadith & Fiqh", name: "Name to be added", placeholder: "Teacher Photo 3" },
  { designation: "Teacher — Contemporary Subjects", name: "Name to be added", placeholder: "Teacher Photo 4" },
];

function Faculty() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Faculty & Mudarse"
        subtitle="The Jamia's teachers guide students in Dars-e-Nizami, Qur'an, Hadith and contemporary subjects. Student photographs are not published; teacher photographs will be added here."
      />

      <Section>
        <Reveal className="rounded-md border border-gold/40 bg-gold-soft p-6 sm:p-8">
          <Award className="h-7 w-7 text-gold-foreground" aria-hidden="true" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-primary">
            Best Teacher Award 2024
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            One of the Jamia's teachers received the Best Teacher Award in 2024. The teacher's name and
            award photograph will be published here once provided.
          </p>
        </Reveal>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Teaching Staff" title="Our Mudarse" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <Reveal
              key={teacher.placeholder}
              delay={index * 70}
              className="rounded-md border border-border bg-card p-5"
            >
              <ImagePlaceholder label={teacher.placeholder} aspect="aspect-[4/3]" />
              <h3 className="mt-4 font-display text-lg font-semibold">{teacher.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{teacher.designation}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Remaining teacher names and designations will be added as the Jamia provides them.
        </p>
      </Section>
    </>
  );
}
