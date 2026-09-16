import { useEffect, useRef, useState, type ReactNode } from "react";
import { Image as ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "cream" | "green";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-5 py-16 sm:py-20",
        tone === "cream" && "bg-cream",
        tone === "green" && "bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div
          className={cn(
            "mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]",
            invert ? "text-gold-light" : "text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-7 bg-gold" />
          {eyebrow}
          <span className="h-px w-7 bg-gold" />
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight sm:text-4xl",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-7",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  urdu,
}: {
  title: string;
  subtitle?: string;
  urdu?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-cream px-5 pb-12 pt-28 sm:pb-16 sm:pt-32">
      <div className="pattern-islamic absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1100px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Jamia Tul Madina Khanqah Sharif
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {urdu ? <p className="font-urdu mt-4 text-xl leading-[2.4] text-primary">{urdu}</p> : null}
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}

/** Clearly labelled grey placeholder box for photos the client will supply. */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={cn(
        "grid place-items-center rounded-md border border-dashed border-primary/25 bg-muted p-4 text-center",
        aspect,
        className,
      )}
    >
      <div>
        <ImageIcon className="mx-auto h-7 w-7 text-primary/45" aria-hidden="true" />
        <p className="mt-2 text-xs font-semibold leading-5 text-muted-foreground">[Image: {label}]</p>
      </div>
    </div>
  );
}

export function Counter({
  value,
  suffix = "",
  label,
  placeholder = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  placeholder?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, placeholder]);

  return (
    <div ref={ref} className="rounded-md border border-border bg-card p-5 text-center">
      <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">
        {placeholder ? "—" : `${display}${suffix}`}
      </div>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      {placeholder ? <p className="mt-1 text-[10px] text-muted-foreground">To be confirmed</p> : null}
    </div>
  );
}

export function ScriptureBox({
  arabic,
  translation,
  reference,
  kind,
  invert = false,
}: {
  arabic: string;
  translation: string;
  reference: string;
  kind: string;
  invert?: boolean;
}) {
  return (
    <figure
      className={cn(
        "rounded-md border p-6 sm:p-8",
        invert
          ? "border-gold/35 bg-primary-soft text-primary-foreground"
          : "border-gold/40 bg-gold-soft text-foreground",
      )}
    >
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.2em]",
          invert ? "text-gold-light" : "text-primary",
        )}
      >
        {kind}
      </p>
      <p
        dir="rtl"
        lang="ar"
        className={cn(
          "mt-4 font-display text-2xl leading-[2] sm:text-3xl",
          invert ? "text-primary-foreground" : "text-primary",
        )}
      >
        {arabic}
      </p>
      <blockquote
        className={cn(
          "mt-4 text-[15px] leading-7",
          invert ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        “{translation}”
      </blockquote>
      <figcaption
        className={cn(
          "mt-3 text-xs font-semibold",
          invert ? "text-gold-light" : "text-primary",
        )}
      >
        {reference}
      </figcaption>
    </figure>
  );
}
