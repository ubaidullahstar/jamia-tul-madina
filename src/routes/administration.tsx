import { createFileRoute } from "@tanstack/react-router";

import {
  ImagePlaceholder,
  PageHeader,
  Reveal,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: "Principal & Administration | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Administration of Jamia Tul Madina Khanqah Sharif — Principal Allama Zulfaqar Madani and Vice Principal Allama Zubair Madani.",
      },
      { property: "og:title", content: "Principal & Administration" },
      {
        property: "og:description",
        content:
          "Meet the Nazim-e-Ala and Naib Nazim leading Jamia Tul Madina Khanqah Sharif, Bahawalpur.",
      },
    ],
  }),
  component: Administration,
});

const leaders = [
  {
    name: "Allama Zulfaqar Madani",
    alternate: "Muhammad Zulfaqar",
    designation: "Nazim-e-Ala / Principal",
    rows: [
      ["Qualification", "M.A Arabic"],
      ["Serving since", "2010"],
    ],
    placeholder: "Principal - Allama Zulfaqar Madani",
  },
  {
    name: "Allama Zubair Madani",
    alternate: "Muhammad Zubair",
    designation: "Naib Nazim / Vice Principal",
    rows: [
      ["Qualification", "B.A Arabic"],
      ["Responsibilities", "Managing the Jamia's system"],
    ],
    placeholder: "Vice Principal - Allama Zubair Madani",
  },
];

function Administration() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Principal & Administration"
        subtitle="The Jamia's academic and administrative affairs are led by its Nazim-e-Ala and Naib Nazim."
      />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Leadership" title="Administration of the Jamia" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <Reveal
              key={leader.name}
              delay={index * 110}
              className="rounded-md border border-border bg-card p-6 transition hover:shadow-lg"
            >
              <ImagePlaceholder label={leader.placeholder} aspect="aspect-[4/3]" />
              <h2 className="mt-5 font-display text-2xl font-semibold">{leader.name}</h2>
              <p className="text-sm text-muted-foreground">({leader.alternate})</p>
              <p className="mt-2 text-sm font-bold text-primary">{leader.designation}</p>
              <dl className="mt-5 grid gap-3 border-t border-border pt-5">
                {leader.rows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
