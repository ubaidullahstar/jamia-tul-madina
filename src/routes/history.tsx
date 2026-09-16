import { createFileRoute } from "@tanstack/react-router";

import {
  ImagePlaceholder,
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";
import { jamia } from "@/data/site";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "The history of Jamia Tul Madina Khanqah Sharif, Bahawalpur — founded in 2010 under the Dawat-e-Islami Education Department.",
      },
      { property: "og:title", content: "History of Jamia Tul Madina Khanqah Sharif" },
      {
        property: "og:description",
        content: "Founded in 2010 under Dawat-e-Islami, growing into a full Deeni and Asri institute.",
      },
    ],
  }),
  component: History,
});

const milestones = [
  {
    year: "2010",
    title: "Foundation of the Jamia",
    detail:
      "Jamia Tul Madina Khanqah Sharif was established under the Dawat-e-Islami Education Department on K.L.P Road, Khanqah Sharif, Bahawalpur.",
  },
  {
    year: "Dars-e-Nizami",
    title: "Islamic sciences curriculum",
    detail:
      "The eight-year Dars-e-Nizami programme was established as the core of the Jamia's teaching, affiliated with Kanz-ul-Madaris.",
  },
  {
    year: "Asri Taleem",
    title: "Contemporary education added",
    detail:
      "Matric and F.A studies were introduced alongside the Deeni curriculum so students could progress in both fields.",
  },
  {
    year: "Today",
    title: "200 students and residential facilities",
    detail:
      "The Jamia now serves 200 students, including 120 residential students, with free education, meals, medical care and laundry.",
  },
];

function History() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Our History"
        subtitle={`Founded in ${jamia.founded} under ${jamia.parent}, the Jamia has grown steadily in students, facilities and academic scope.`}
      />

      <Section>
        <Reveal>
          <SectionHeading align="left" eyebrow="Growth" title="How the Jamia developed" />
        </Reveal>
        <div className="mt-10 grid gap-4">
          {milestones.map((milestone, index) => (
            <Reveal
              key={milestone.title}
              delay={index * 90}
              className="grid gap-3 rounded-md border border-border bg-card p-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                {milestone.year}
              </p>
              <div className="min-w-0 border-l-0 sm:border-l sm:border-border sm:pl-6">
                <h3 className="font-display text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{milestone.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Archive"
            title="Old historical photos"
            copy="These slots are reserved for the Jamia's older photographs from its early years."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((number) => (
            <Reveal key={number} delay={number * 90}>
              <ImagePlaceholder label={`Old Historical Photo ${number}`} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
