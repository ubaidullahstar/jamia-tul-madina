import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { developer, jamia, navItems } from "@/data/site";
import logoAsset from "@/assets/jamia-logo.png.asset.json";
import { ImagePlaceholder } from "@/components/site/primitives";

export function Footer() {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Jamia Tul Madina logo"
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <ImagePlaceholder
              label="Dawat-e-Islami Logo"
              aspect="h-14 w-14"
              className="shrink-0 border-primary-foreground/25 bg-primary-foreground/10 p-1"
            />
          </div>
          <p className="mt-5 font-display text-xl font-semibold">{jamia.name}</p>
          <p className="font-urdu mt-3 text-sm leading-[2.2] text-primary-foreground/70">
            {jamia.mottoUrdu}
          </p>
          <p className="mt-2 text-sm leading-6 text-primary-foreground/60">{jamia.mottoEnglish}</p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
            Quick links
          </p>
          <div className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
            {navItems.slice(1).map((item) => (
              <Link key={item.to} to={item.to} className="transition hover:text-gold-light">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span>{jamia.address}</span>
            </p>
            <a href={`tel:${jamia.phone}`} className="flex items-center gap-3 hover:text-gold-light">
              <Phone className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" /> {jamia.phone}
            </a>
            <a
              href={`https://wa.me/92${jamia.whatsapp.replace(/^0/, "")}`}
              className="flex items-center gap-3 hover:text-gold-light"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" /> WhatsApp
            </a>
            <a href={`mailto:${jamia.email}`} className="flex items-center gap-3 hover:text-gold-light">
              <Mail className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" /> {jamia.email}
            </a>
            <a
              href={jamia.facebook}
              className="flex items-center gap-3 hover:text-gold-light"
              aria-label="Jamia Facebook page"
            >
              <Facebook className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 px-5 py-5 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {jamia.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Curated &amp; Developed by {developer.name}</span>
            <span className="flex flex-wrap gap-x-3">
              {developer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-offset-4 transition hover:text-gold-light hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
