import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";
import { featuredPosition } from "@/data/site";

export const Route = createFileRoute("/board-positions")({
  head: () => ({
    meta: [
      { title: "Board Positions & Results | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Board positions of Jamia Tul Madina Khanqah Sharif students, including 2nd Position in Matric 2024, B.I.S.E Bahawalpur.",
      },
      { property: "og:title", content: "Board Positions & Student Results" },
      {
        property: "og:description",
        content: "Matric 2024 2nd Position and 9th class 2023 position holders of the Jamia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoardPositions,
});

const results2023 = [
  { name: "Muzammil Nawaz", marks: "530 / 600", position: "1st" },
  { name: "Muhammad Arslan", marks: "495 / 600", position: "2nd" },
  { name: "Ubaidullah", marks: "469 / 600", position: "3rd" },
  { name: "Muhammad Raza", marks: "443 / 600", position: "4th" },
  { name: "Muhammad Anas", marks: "440 / 600", position: "5th" },
];

function BoardPositions() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Board Positions"
        subtitle="Students of the Jamia have secured positions in board examinations while studying the Deeni curriculum."
      />

      <Section>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Featured Achievement"
            title="2nd Position — Matric 2024, B.I.S.E Bahawalpur"
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal className="overflow-hidden rounded-md border border-border">
            <img
              src={img.positionHolder}
              alt={`${featuredPosition.student} receiving his certificate of merit`}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="rounded-md border border-gold/40 bg-gold-soft p-6 sm:p-8">
            <Trophy className="h-8 w-8 text-gold-foreground" aria-hidden="true" />
            <p className="mt-4 font-display text-2xl font-semibold text-primary sm:text-3xl">
              {featuredPosition.student}
            </p>
            <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {[
                ["Position", featuredPosition.position],
                ["Class", featuredPosition.className],
                ["Marks", featuredPosition.marks],
                ["Percentage", featuredPosition.percentage],
                ["Year", featuredPosition.year],
                ["Board", featuredPosition.board],
                ["Level", featuredPosition.level],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={140} className="mt-6 overflow-hidden rounded-md border border-border">
          <img
            src={img.positionCeremony}
            alt="Award ceremony for the position holder"
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="9th Class Result 2023"
            title="Position holders — Bahawalpur Board"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <Reveal className="overflow-hidden rounded-md border border-border bg-card">
            <img
              src={img.resultPoster2023}
              alt="9th class 2023 position holders of Jamia Tul Madina Khanqah Sharif"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <div className="grid gap-3">
            {results2023.map((student, index) => (
              <Reveal
                key={student.name}
                delay={index * 70}
                className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-5 py-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{student.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {student.position} Position
                  </p>
                </div>
                <p className="font-display text-xl font-semibold text-primary">{student.marks}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
