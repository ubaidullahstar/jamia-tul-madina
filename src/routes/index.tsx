import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

import campusLife from "@/assets/campus-life.jpg";
import classroomStudy from "@/assets/classroom-study.jpg";
import facultyTeaching from "@/assets/faculty-teaching.jpg";
import campusAsset from "@/assets/campus.jpg.asset.json";
import logoAsset from "@/assets/jamia-logo.png.asset.json";
import {
  Counter,
  ImagePlaceholder,
  Reveal,
  ScriptureBox,
  Section,
  SectionHeading,
  useReveal,
} from "@/components/site/primitives";
import { ayah, courses, featuredPosition, hadith, jamia, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jamia Tul Madina Khanqah Sharif, Bahawalpur | Dawat-e-Islami" },
      {
        name: "description",
        content:
          "Official website of Jamia Tul Madina Khanqah Sharif, K.L.P Road, Bahawalpur — free Deeni and Asri education under Dawat-e-Islami since 2010.",
      },
      { property: "og:title", content: "Jamia Tul Madina Khanqah Sharif, Bahawalpur" },
      {
        property: "og:description",
        content:
          "Dars-e-Nizami, Matric and F.A with free education, hostel and facilities — under Dawat-e-Islami Education Department.",
      },
    ],
  }),
  component: Home,
});

const slides = [
  { src: campusAsset.url, alt: "Jamia campus courtyard" },
  { src: classroomStudy, alt: "Students studying in a classroom" },
  { src: facultyTeaching, alt: "A teacher guiding students" },
  { src: campusLife, alt: "Students in the campus grounds" },
];

function Home() {
  useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((index) => (index + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-24 sm:pt-28">
        <div className="pattern-islamic absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1100px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <p dir="rtl" lang="ar" className="font-display text-2xl text-gold sm:text-3xl">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Jamia Tul Madina <span className="text-primary">Khanqah Sharif</span>
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              {jamia.fullName} — an Islamic educational institute under {jamia.parent}, serving
              students since {jamia.founded}.
            </p>
            <p className="font-urdu mt-6 text-lg text-primary sm:text-xl">{jamia.mottoUrdu}</p>
            <p className="mt-2 text-sm italic leading-6 text-muted-foreground">
              “{jamia.mottoEnglish}”
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-brand"
              >
                Admissions Information <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/board-positions"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary/25 bg-background px-6 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                Board Positions
              </Link>
            </div>
          </div>

          <div className="animate-rise-delay">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border-[6px] border-background shadow-2xl">
              {slides.map((slide, index) => (
                <img
                  key={slide.alt}
                  src={slide.src}
                  alt={slide.alt}
                  data-active={active === index}
                  className="slide-fade absolute inset-0 h-full w-full object-cover"
                />
              ))}
              <img
                src={logoAsset.url}
                alt="Jamia Tul Madina logo"
                className="absolute bottom-3 right-3 h-16 w-16 rounded-full border-2 border-background object-cover sm:h-20 sm:w-20"
              />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${active === index ? "bg-primary" : "bg-primary/25"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid w-full max-w-[1100px] grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              placeholder={"placeholder" in stat ? stat.placeholder : false}
            />
          ))}
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[1100px]">
          <ScriptureBox {...ayah} kind="Quranic Ayah" />
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About the Jamia"
              title="Deeni and Asri education, free of cost"
              copy="Jamia Tul Madina Khanqah Sharif provides traditional Islamic sciences together with contemporary schooling in a calm, disciplined environment. Education, hostel and meals are provided free of charge."
            />
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ScriptureBox {...hadith} kind="Hadith Shareef" />
          </Reveal>
        </div>
      </Section>

      <Section tone="green">
        <Reveal>
          <SectionHeading
            invert
            eyebrow="Featured Achievement"
            title="2nd Position — Matric 2024, B.I.S.E Bahawalpur"
          />
        </Reveal>
        <Reveal className="mt-8 grid gap-6 rounded-md bg-primary-soft p-6 sm:p-8 lg:grid-cols-[0.55fr_1fr]">
          <ImagePlaceholder
            label={`${featuredPosition.student} - Position Holder`}
            className="border-primary-foreground/25 bg-primary-foreground/10"
          />
          <div>
            <Trophy className="h-8 w-8 text-gold-light" aria-hidden="true" />
            <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
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
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-light">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-primary-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/board-positions"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-gold px-5 text-sm font-bold text-gold-foreground transition hover:bg-gold-light"
            >
              All results <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Courses"
            title="Programmes offered"
            copy="Affiliated with Kanz-ul-Madaris, with contemporary classes examined by the local board."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal
              key={course.title}
              delay={index * 100}
              className="rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">{course.title}</h3>
              <p className="font-urdu text-base text-primary">{course.urdu}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-foreground">
                {course.duration}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.detail}</p>
            </Reveal>
          ))}
        </div>
        <Link
          to="/courses"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          Course details <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Administration" title="Leadership of the Jamia" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            {
              name: "Allama Zulfaqar Madani",
              role: "Nazim-e-Ala / Principal",
              detail: "M.A Arabic • Serving since 2010",
            },
            {
              name: "Allama Zubair Madani",
              role: "Naib Nazim / Vice Principal",
              detail: "B.A Arabic • Managing the Jamia's system",
            },
          ].map((person, index) => (
            <Reveal
              key={person.name}
              delay={index * 100}
              className="rounded-md border border-border bg-card p-6"
            >
              <ImagePlaceholder label={`${person.role.split(" / ")[1]} - ${person.name}`} />
              <h3 className="mt-5 font-display text-xl font-semibold">{person.name}</h3>
              <p className="mt-1 text-sm font-bold text-primary">{person.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{person.detail}</p>
            </Reveal>
          ))}
        </div>
        <Link
          to="/faculty"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          Meet the faculty <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="Glimpses of the Jamia" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[campusAsset.url, classroomStudy, facultyTeaching, campusLife].map((src, index) => (
            <Reveal key={index} delay={index * 80} className="overflow-hidden rounded-md">
              <img
                src={src}
                alt="Jamia campus and classes"
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
          {[
            "Building Front View",
            "Library",
            "Event - Milad-un-Nabi Jaloos",
            "Best Teacher Award 2024",
          ].map((label, index) => (
            <Reveal key={label} delay={index * 80}>
              <ImagePlaceholder label={label} aspect="aspect-square" />
            </Reveal>
          ))}
        </div>
        <Link
          to="/gallery"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          View gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section tone="green">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Award className="h-7 w-7 text-gold-light" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Admissions open after Ramadan
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-primary-foreground/75">
              Open for one month. Eligibility: 8th pass, age 12 years and above. No admission fee, no
              monthly fee, no hostel fee.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${jamia.phone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-bold text-gold-foreground transition hover:bg-gold-light"
            >
              Call {jamia.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              <GraduationCap className="h-4 w-4" /> Contact us
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
