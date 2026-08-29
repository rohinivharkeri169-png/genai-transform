import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      data-ocid="section.hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background pt-24"
    >
      {/* Glowing orbital / radial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-glow-cyan"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_24px_6px_#00e5ff99]"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          data-ocid="hero.eyebrow"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary"
        >
          <Sparkles className="size-3.5" aria-hidden="true" />
          GenAI Content Transformation
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Turn any content
          <br />
          into <span className="text-gradient-cyan">every format</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Signal takes a single source — a report, a script, a raw brief — and
          reshapes it into polished articles, posts, and decks. One input, every
          output, ready to publish.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="w-full sm:w-auto"
          >
            <a href="#output-formats">
              See the output formats
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.secondary_button"
            className="w-full sm:w-auto"
          >
            <a href="#concept">How it works</a>
          </Button>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-x-8 -top-6 -bottom-6 -z-10 rounded-[2rem] bg-glow-cyan opacity-60 blur-2xl" />
          <img
            src="/assets/generated/transformation-hero.dim_1200x800.png"
            alt="A single luminous beam of content splitting into multiple glowing output streams"
            loading="lazy"
            className="w-full rounded-2xl border border-primary/20 shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
