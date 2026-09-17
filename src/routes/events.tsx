import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Ijtema | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Religious gatherings, ijtema and annual events held at Jamia Tul Madina Khanqah Sharif, Bahawalpur.",
      },
      { property: "og:title", content: "Events & Ijtema at the Jamia" },
      {
        property: "og:description",
        content: "Annual ijtema, Milad gatherings and Dawat-e-Islami programmes at the Jamia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

const events = [
  {
    title: "Annual Ijtema",
    detail:
      "Thousands of Islamic brothers gather at the Jamia for the annual ijtema, with bayans, naat and collective dua through the night.",
    src: img.ijtema1,
    alt: "Large night ijtema gathering at the Jamia",
  },
  {
    title: "Ijtema Bayan & Stage Programme",
    detail:
      "Scholars of Dawat-e-Islami address the gathering from the main stage during the ijtema programme.",
    src: img.ijtema2,
    alt: "Ijtema stage with scholars addressing the gathering",
  },
  {
    title: "Gathering of Islamic Brothers",
    detail:
      "The Jamia grounds and surrounding area fill with attendees from Khanqah Sharif and nearby towns.",
    src: img.ijtema3,
    alt: "Aerial view of the ijtema gathering",
  },
  {
    title: "Jashn-e-Milad-un-Nabi ﷺ",
    detail:
      "Students and teachers of the Jamia take part in Milad gatherings and processions with flags and decorations.",
    src: img.teachersGroup,
    alt: "Teachers and students with flags at the Jamia",
  },
];

function Events() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Events & Ijtema"
        subtitle="Religious gatherings and programmes held at the Jamia throughout the year."
      />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Programmes" title="Gatherings at the Jamia" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <Reveal
              key={event.title}
              delay={index * 90}
              className="overflow-hidden rounded-md border border-border bg-card"
            >
              <img
                src={event.src}
                alt={event.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{event.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
