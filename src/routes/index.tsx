import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  Facebook,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import campusLife from "@/assets/campus-life.jpg";
import classroomStudy from "@/assets/classroom-study.jpg";
import facultyTeaching from "@/assets/faculty-teaching.jpg";
import campusAsset from "@/assets/campus.jpg.asset.json";
import logoAsset from "@/assets/jamia-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jamia Khanqah Sharif | Dawat-e-Islami" },
      {
        name: "description",
        content:
          "Discover Jamia Khanqah Sharif, dedicated to Islamic learning, character, academic excellence, and service under Dawat-e-Islami.",
      },
      { property: "og:title", content: "Jamia Khanqah Sharif | Dawat-e-Islami" },
      {
        property: "og:description",
        content:
          "A place of knowledge, character, and purpose—nurturing students through Islamic and contemporary education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"],
  ["About Jamia", "about"],
  ["Mudarse", "faculty"],
  ["Board Positions", "achievements"],
  ["Gallery", "gallery"],
  ["Contact Us", "contact"],
] as const;

const achievements = [
  { icon: Award, value: "Top 3", label: "Board positions", note: "Sample placement" },
  { icon: GraduationCap, value: "98%", label: "Exam success", note: "Sample figure" },
  { icon: Star, value: "12+", label: "Merit awards", note: "Sample figure" },
] as const;

const faculty = [
  {
    role: "Head Mudarris",
    focus: "Islamic Studies & Spiritual Guidance",
    description: "Leading with scholarship, compassion, and a deep commitment to every student’s character.",
  },
  {
    role: "Senior Mudarris",
    focus: "Qur’an & Hadith Studies",
    description: "Helping students develop sound understanding through attentive teaching and daily practice.",
  },
  {
    role: "Academic Mentor",
    focus: "Contemporary Education",
    description: "Supporting strong academic habits, confidence, and readiness for board examinations.",
  },
] as const;

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h2>
      {copy ? <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
          <a href="#home" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label="Jamia Khanqah Sharif home">
            <img src={logoAsset.url} alt="Jamia-tul-Madina logo" className="h-12 w-12 shrink-0 rounded-full object-cover" />
            <div className="min-w-0">
              <div className="truncate font-display text-xl font-bold leading-none text-primary">Jamia Khanqah Sharif</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Dawat-e-Islami</div>
            </div>
          </a>

          <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link text-sm font-semibold text-foreground/75">
                {label}
              </a>
            ))}
            <a href="#contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-brand transition hover:-translate-y-0.5 hover:bg-primary-strong">
              Admissions Open <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen ? (
          <nav id="mobile-menu" className="animate-menu border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className="border-b border-border py-3.5 text-sm font-bold text-foreground">
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 font-bold text-primary-foreground">
                Admissions Open <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden bg-hero pt-28">
          <div className="pattern-grid absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
            <div className="animate-rise">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="h-4 w-4 text-gold" /> Knowledge • Character • Purpose
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                Welcome to <span className="text-primary">Jamia Khanqah Sharif</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                Nurturing hearts and minds through excellent Islamic and contemporary education—where students grow in knowledge, adab, and achievement.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#about" className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-primary px-7 font-bold text-primary-foreground shadow-brand transition hover:-translate-y-1 hover:bg-primary-strong">
                  Discover Our Jamia <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#achievements" className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-primary/20 bg-background px-7 font-bold text-primary transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  View Achievements
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-primary/10 pt-6">
                <div className="flex -space-x-2">
                  {[BookOpen, GraduationCap, HeartHandshake].map((Icon, index) => (
                    <span key={index} className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-emerald-soft text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-muted-foreground">A focused centre of learning under Dawat-e-Islami</p>
              </div>
            </div>

            <div className="relative min-h-[470px] animate-rise-delay sm:min-h-[560px]">
              <div className="absolute left-0 top-0 h-[72%] w-[78%] overflow-hidden rounded-[2rem_0.5rem_2rem_0.5rem] shadow-2xl">
                <img src={campusAsset.url} alt="Green courtyard of Jamia Khanqah Sharif" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 h-[50%] w-[58%] overflow-hidden rounded-[0.5rem_2rem_0.5rem_2rem] border-[6px] border-background shadow-2xl">
                <img src={classroomStudy} alt="Students studying with a teacher in a traditional classroom" className="h-full w-full object-cover" width={1280} height={960} />
              </div>
              <div className="absolute right-2 top-4 grid h-24 w-24 place-items-center rounded-full border-4 border-background bg-logo shadow-xl sm:h-32 sm:w-32">
                <img src={logoAsset.url} alt="" className="h-[88%] w-[88%] rounded-full object-cover" />
              </div>
              <div className="absolute bottom-[12%] left-3 rounded-md border border-gold/30 bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:left-8">
                <p className="font-display text-xl font-bold text-primary">Ilm with Adab</p>
                <p className="text-xs font-semibold text-muted-foreground">Learning that shapes character</p>
              </div>
            </div>
          </div>
          <a href="#about" aria-label="Scroll to about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-primary/60 md:block">
            <ChevronDown className="h-7 w-7 animate-bounce" />
          </a>
        </section>

        <section id="about" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-md">
                <img src={facultyTeaching} alt="Teacher guiding students in Islamic studies" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]" loading="lazy" width={960} height={1200} />
              </div>
              <div className="absolute -bottom-7 -right-1 w-[80%] rounded-md bg-primary p-6 text-primary-foreground shadow-2xl sm:-right-7 sm:w-72">
                <Quote className="mb-3 h-7 w-7 text-gold-light" />
                <p className="font-display text-xl font-semibold leading-snug">Education is most powerful when knowledge refines the heart.</p>
              </div>
            </Reveal>
            <Reveal className="lg:pl-8">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-gold" /> About our Jamia
              </div>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">A place where knowledge becomes character</h2>
              <p className="mt-6 leading-7 text-muted-foreground">
                Jamia Khanqah Sharif is dedicated to developing students who carry sound Islamic understanding, excellent manners, and confidence in contemporary studies. Its peaceful spiritual environment encourages sincerity, discipline, and service.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                This website is devoted exclusively to the life, learning, faculty, and achievements of this Jamia under Dawat-e-Islami.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: BookOpen, label: "Sound Learning" },
                  { icon: HeartHandshake, label: "Good Character" },
                  { icon: Users, label: "Close Guidance" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="border-l-2 border-gold bg-emerald-soft p-4">
                    <Icon className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm font-bold text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-20 bg-primary py-24 text-primary-foreground sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">Board Positions & Achievements</p>
                  <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Hard work that reaches beyond the classroom</h2>
                </div>
                <p className="leading-7 text-primary-foreground/75">Our students are encouraged to pursue excellence with humility, discipline, and gratitude in every examination.</p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-primary-foreground/15 md:grid-cols-3">
              {achievements.map(({ icon: Icon, value, label, note }, index) => (
                <Reveal key={label} className="bg-primary-soft p-8 sm:p-10" >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-7 w-7 text-gold-light" />
                    <span className="rounded-full border border-gold-light/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-light">{note}</span>
                  </div>
                  <div className="mt-8 font-display text-6xl font-semibold text-primary-foreground">{value}</div>
                  <p className="mt-2 font-semibold text-primary-foreground/75">{label}</p>
                  <div className="mt-8 h-1 w-full overflow-hidden bg-primary-foreground/10">
                    <div className="achievement-bar h-full bg-gold-light" style={{ animationDelay: `${index * 180}ms` }} />
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-primary-foreground/60">Sample figures shown for layout preview. Verified results will replace these before publication.</p>
          </div>
        </section>

        <section id="faculty" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Our Mudarse" title="Guidance rooted in care" copy="Dedicated teachers help students build knowledge, discipline, and confidence through personal attention and sincere mentorship." />
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {faculty.map((teacher, index) => (
                <Reveal key={teacher.role} className="group rounded-md border border-border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary/35 hover:shadow-xl">
                  <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-sm bg-emerald-soft">
                    <img src={index === 1 ? classroomStudy : facultyTeaching} alt="Placeholder faculty portrait" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={index === 1 ? 1280 : 960} height={index === 1 ? 960 : 1200} />
                    <span className="absolute bottom-3 left-3 rounded-sm bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">Sample profile</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{teacher.role}</h3>
                  <p className="mt-1 text-sm font-bold text-primary">{teacher.focus}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{teacher.description}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">Generic roles and representative imagery are shown until official faculty details are provided.</p>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-20 bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Campus Life" title="Learning, worship, and brotherhood" copy="A glimpse into the spaces and moments that shape daily life at Jamia Khanqah Sharif." />
            </Reveal>
            <div className="mt-14 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [campusAsset.url, "The green courtyard at Jamia Khanqah Sharif", "Our Campus", "sm:col-span-2 lg:col-span-2"],
                [campusLife, "Students studying together in a peaceful courtyard", "Study Circle", "lg:row-span-2"],
                [classroomStudy, "Students learning in a classroom", "In the Classroom", ""],
                [facultyTeaching, "Teacher sharing a lesson with students", "Guided Learning", ""],
              ].map(([src, alt, label, span]) => (
                <Reveal key={label} className={`group relative overflow-hidden rounded-md ${span}`}>
                  <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-image-overlay opacity-70 transition group-hover:opacity-85" />
                  <p className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-overlay-foreground">{label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="overflow-hidden rounded-md bg-primary text-primary-foreground shadow-2xl">
              <div className="grid lg:grid-cols-[1fr_0.72fr]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">Admissions & Enquiries</p>
                  <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Begin a journey of knowledge and character</h2>
                  <p className="mt-6 max-w-xl leading-7 text-primary-foreground/75">For admissions, visits, and general enquiries, connect with the Jamia administration through the official details when available.</p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a href="#contact-details" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-bold text-gold-foreground transition hover:-translate-y-1 hover:bg-gold-light">
                      Contact Details <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div id="contact-details" className="grid content-center gap-5 border-t border-primary-foreground/15 bg-primary-soft p-8 sm:p-12 lg:border-l lg:border-t-0">
                  {[
                    { icon: Phone, label: "Phone", value: "Details coming soon" },
                    { icon: Mail, label: "Email", value: "Details coming soon" },
                    { icon: MapPin, label: "Campus address", value: "Details coming soon" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-foreground/10 text-gold-light"><Icon className="h-5 w-5" /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/55">{label}</p>
                        <p className="mt-1 font-semibold text-primary-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-footer text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Jamia-tul-Madina logo" className="h-14 w-14 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-display text-2xl font-bold">Jamia Khanqah Sharif</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/55">Dawat-e-Islami</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/65">Serving the mission of knowledge, character, and spiritual growth through Islamic and contemporary education.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">Quick links</p>
            <div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">
              {navItems.slice(1, 5).map(([label, id]) => <a key={id} href={`#${id}`} className="transition hover:text-gold-light">{label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">Connect</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/70" title="Official Facebook link coming soon"><Facebook className="h-4 w-4" /></span>
              <span className="text-sm text-primary-foreground/60">Official social links coming soon</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 Jamia Khanqah Sharif. All rights reserved.</p>
            <p>Under the guidance of Dawat-e-Islami</p>
          </div>
        </div>
      </footer>
    </div>
  );
}