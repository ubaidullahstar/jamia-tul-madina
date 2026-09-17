import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";
import { courses } from "@/data/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Dars-e-Nizami, Matric & F.A | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Programmes at Jamia Tul Madina Khanqah Sharif: eight-year Dars-e-Nizami, Matric and F.A, all free of cost.",
      },
      { property: "og:title", content: "Courses at Jamia Tul Madina Khanqah Sharif" },
      {
        property: "og:description",
        content: "Dars-e-Nizami, Matric and F.A — Deeni and Asri education free of charge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Courses,
});

function Courses() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Courses Offered"
        subtitle="Islamic sciences and contemporary studies taught together, affiliated with the Kanz-ul-Madaris board."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal
              key={course.title}
              delay={index * 90}
              className="rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-semibold">{course.title}</h2>
              <p className="font-urdu text-base text-primary">{course.urdu}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-foreground">
                {course.duration}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Learning Environment" title="Study at the Jamia" />
        </Reveal>
        <Reveal delay={90} className="mt-10 overflow-hidden rounded-md border border-border">
          <img
            src={img.campusFront}
            alt="Classrooms around the Jamia courtyard"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          Classes are held daily in the Jamia's classrooms, with Deeni subjects taught by qualified
          Mudarse and contemporary subjects prepared for the local board examinations. Education,
          hostel and meals are provided free of cost.
        </p>
      </Section>
    </>
  );
}
