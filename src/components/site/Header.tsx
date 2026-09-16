import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { jamia, navItems } from "@/data/site";
import logoAsset from "@/assets/jamia-logo.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-[68px] w-full max-w-[1100px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 xl:h-20">
        <Link to="/" onClick={close} className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Jamia Tul Madina logo"
            className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-base font-bold leading-tight text-primary sm:text-lg">
              Jamia Tul Madina
            </p>
            <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Khanqah Sharif • Dawat-e-Islami
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
          {navItems.slice(0, 8).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link text-[13px] font-semibold text-foreground/75"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-[13px] font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-brand"
          >
            Admissions
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="animate-menu max-h-[calc(100vh-68px)] overflow-y-auto border-t border-border bg-background px-5 pb-6 xl:hidden"
        >
          <div className="mx-auto w-full max-w-[1100px]">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className="flex min-h-[48px] items-center border-b border-border text-sm font-semibold text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${jamia.phone}`}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {jamia.phone}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
