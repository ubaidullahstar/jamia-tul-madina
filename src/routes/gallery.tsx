import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal, Section, useReveal } from "@/components/site/primitives";
import { galleryImages } from "@/data/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Photographs of Jamia Tul Madina Khanqah Sharif — campus, teachers, ijtema gatherings, results and awards.",
      },
      { property: "og:title", content: "Photo Gallery of the Jamia" },
      {
        property: "og:description",
        content: "Campus views, teachers, ijtema gatherings, board results and award ceremonies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  useReveal();

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Glimpses of the campus, teachers, gatherings and achievements of the Jamia."
      />

      <Section>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 60} className="overflow-hidden rounded-md">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
