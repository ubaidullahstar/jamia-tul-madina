import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import {
  ImagePlaceholder,
  PageHeader,
  Reveal,
  ScriptureBox,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";
import { ayah, hadith, jamia } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jamia Tul Madina Khanqah Sharif | Mission & Vision" },
      {
        name: "description",
        content:
          "Mission, vision and key features of Jamia Tul Madina Khanqah Sharif, Bahawalpur — free Deeni and Asri education under Dawat-e-Islami.",
      },
      { property: "og:title", content: "About Jamia Tul Madina Khanqah Sharif" },
      {
        property: "og:description",
        content:
          "Free education, Deeni and Asri taleem, Kanz-ul-Madaris affiliation and a disciplined Islamic environment.",
      },
    ],
  }),
  component: About,
});

const features = [
  { icon: HeartHandshake, label: "Free Education", detail: "No admission fee, monthly fee or hostel fee." },
  { icon: BookOpenCheck, label: "Deeni + Asri Taleem", detail: "Islamic sciences alongside contemporary studies." },
  { icon: ShieldCheck, label: "Kanz-ul-Madaris", detail: "Affiliated with the Kanz-ul-Madaris board." },
  { icon: Sparkles, label: "HEC Recognized", detail: "Dars-e-Nizami equivalent to M.A Arabic on completion." },
];

function About() {
  useReveal();

  return (
    <>
      <PageHeader
        title="About the Jamia"
        urdu={jamia.mottoUrdu}
        subtitle={`${jamia.fullName}. Established in ${jamia.founded} under ${jamia.parent}.`}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Introduction" title="A centre of Islamic learning in Khanqah Sharif" />
            <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
              Jamia Tul Madina Khanqah Sharif is an Islamic educational institute operating under the
              Dawat-e-Islami Education Department. Students study the traditional Islamic sciences of
              Dars-e-Nizami while also completing contemporary Matric and F.A studies, all provided
              free of cost along with hostel accommodation and meals.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              The Jamia's environment is calm and disciplined, focused on the Qur'an, Sunnah, good
              character and consistent academic effort.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ImagePlaceholder label="Building Front View" aspect="aspect-[4/3]" />
          </Reveal>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-md border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
              To provide free, high-quality Islamic and contemporary education that develops sound
              knowledge, sincere worship and excellent character in every student.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-md border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Our Vision</h2>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
              To raise scholars and students who serve their community with knowledge, humility and
              dedication, carrying forward the mission of Dawat-e-Islami.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-md border border-gold/40 bg-gold-soft p-6 text-center sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Motto of Dawat-e-Islami
          </p>
          <p className="font-urdu mt-4 text-xl text-primary sm:text-2xl">{jamia.mottoUrdu}</p>
          <p className="mt-3 text-sm italic text-muted-foreground">“{jamia.mottoEnglish}”</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Key Features" title="What the Jamia offers" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, label, detail }, index) => (
            <Reveal
              key={label}
              delay={index * 90}
              className="flex gap-4 rounded-md border border-border bg-card p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-emerald-soft text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-bold text-foreground">{label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <ScriptureBox {...ayah} kind="Quranic Ayah" />
          </Reveal>
          <Reveal delay={100}>
            <ScriptureBox {...hadith} kind="Hadith Shareef" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
