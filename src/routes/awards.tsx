import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Honours | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Awards and honours of Jamia Tul Madina Khanqah Sharif — national level positions, certificates of merit and the Best Teacher Award 2024.",
      },
      { property: "og:title", content: "Awards & Honours" },
      {
        property: "og:description",
        content: "National position holders, certificates of merit and teaching awards at the Jamia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Awards,
});

const awards = [
  {
    title: "Position across Pakistan — Al-Shahadat-ul-Aalamia 2019",
    detail:
      "Muhammad Afeef bin Malik Pervaiz Iqbal (Roll No. 421773) secured 1056 marks and 3rd position across Pakistan in the annual examinations of Tanzeem-ul-Madaris Pakistan (Registered).",
    src: img.awardBanner2019,
    alt: "Banner announcing the Jamia student's position across Pakistan in 2019",
  },
  {
    title: "Certificate of Merit — Government of the Punjab",
    detail:
      "Muhammad Muzammil Nawaz was honoured with a Certificate of Merit at a Government of the Punjab ceremony for his Matric 2024 board position.",
    src: img.positionHolder,
    alt: "Student receiving a Government of the Punjab certificate of merit",
  },
  {
    title: "Best Teacher Award 2024",
    detail:
      "A Mudarris of the Jamia received the Best Teacher Award in 2024 for teaching quality and character.",
    src: img.bestTeacher,
    alt: "Best Teacher Award 2024 recipient",
  },
  {
    title: "National recognition on media",
    detail:
      "The Jamia's honours have also been covered on national television, reflecting the recognition of its students and teachers.",
    src: img.awardNews,
    alt: "News coverage of an award presentation",
  },
];

function Awards() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Awards & Honours"
        subtitle="Recognitions received by the students and teachers of Jamia Tul Madina Khanqah Sharif."
      />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Honours of the Jamia" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <Reveal
              key={award.title}
              delay={index * 90}
              className="overflow-hidden rounded-md border border-border bg-card"
            >
              <img
                src={award.src}
                alt={award.alt}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold">{award.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{award.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
