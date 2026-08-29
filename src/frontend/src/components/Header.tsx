import { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#concept", label: "Concept" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#output-formats", label: "Output Formats" },
  { href: "#skills", label: "Skills" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="header"
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-smooth",
        scrolled
          ? "border-border/70 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          data-ocid="header.logo"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden="true"
            className="inline-block size-2.5 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(0,229,255,0.7)]"
          />
          Signal
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`header.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          data-ocid="header.cta"
          className="hidden sm:inline-flex"
        >
          <a href="#output-formats">
            Get Started
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
