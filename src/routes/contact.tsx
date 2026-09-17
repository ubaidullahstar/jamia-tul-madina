import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHeader, Reveal, Section, SectionHeading, useReveal } from "@/components/site/primitives";
import { img } from "@/data/images";
import { jamia } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Jamia Tul Madina Khanqah Sharif" },
      {
        name: "description",
        content:
          "Contact Jamia Tul Madina Khanqah Sharif, K.L.P Road, Bahawalpur — phone 03066862692, WhatsApp and email.",
      },
      { property: "og:title", content: "Contact Jamia Tul Madina Khanqah Sharif" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email and address of the Jamia in Khanqah Sharif, Bahawalpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();

  const contacts = [
    { icon: MapPin, label: "Address", value: jamia.address, href: undefined },
    { icon: Phone, label: "Phone", value: jamia.phone, href: `tel:${jamia.phone}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: jamia.whatsapp,
      href: `https://wa.me/92${jamia.whatsapp.replace(/^0/, "")}`,
    },
    { icon: Mail, label: "Email", value: jamia.email, href: `mailto:${jamia.email}` },
    { icon: Facebook, label: "Facebook", value: "Jamia tul Madina Khanqah Sharif", href: jamia.facebook },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="For admissions, donations or any query, the Jamia administration can be reached directly."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionHeading align="left" eyebrow="Get in touch" title="Contact details" />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {contacts.map(({ icon: Icon, label, value, href }, index) => (
                <Reveal
                  key={label}
                  delay={index * 70}
                  className="flex gap-4 rounded-md border border-border bg-card p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-emerald-soft text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-words text-sm font-semibold text-primary hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-sm font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120} className="overflow-hidden rounded-md border border-border">
            <img
              src={img.campusFront}
              alt="Jamia Tul Madina Khanqah Sharif campus"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
