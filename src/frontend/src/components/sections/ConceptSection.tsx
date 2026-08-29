import {
  ArrowRight,
  FileText,
  FileType2,
  MessageSquareText,
  Presentation,
  Sparkles,
  Video,
} from "lucide-react";

import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const OUTPUT_FORMATS = [
  {
    icon: FileType2,
    label: "Blog Post",
    detail: "SEO-ready article",
  },
  {
    icon: Presentation,
    label: "Slide Deck",
    detail: "12 polished slides",
  },
  {
    icon: MessageSquareText,
    label: "Social Thread",
    detail: "Platform-native copy",
  },
  {
    icon: Video,
    label: "Video Script",
    detail: "Shot-by-shot outline",
  },
];

function ProcessNode({
  step,
  title,
  description,
  icon: Icon,
  active = false,
}: {
  step: string;
  title: string;
  description: string;
  icon: typeof FileText;
  active?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div
        className={cn(
          "relative flex size-16 items-center justify-center rounded-2xl border transition-smooth",
          active
            ? "border-primary/60 bg-primary/10 shadow-[0_0_24px_2px_#00e5ff59]"
            : "border-border bg-card shadow-subtle",
        )}
      >
        <Icon
          className={cn(
            "size-7",
            active ? "text-primary" : "text-muted-foreground",
          )}
        />
        {active && (
          <span
            aria-hidden="true"
            className="absolute -inset-1 -z-10 animate-pulse-glow rounded-2xl bg-primary/20 blur-md"
          />
        )}
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
        {step}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default function ConceptSection() {
  return (
    <Section
      id="concept"
      eyebrow="The Concept"
      description="Signal reads your raw content once, lets GenAI understand its structure and intent, then reshapes it into the exact formats your audience needs — without redoing the work."
      className="relative overflow-hidden bg-glow-cyan"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          One input. <span className="text-gradient-cyan">Every format.</span>
        </h2>
      </div>

      {/* Process map */}
      <div className="relative mx-auto max-w-5xl">
        {/* Connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block"
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          <ProcessNode
            step="01 · Input"
            title="Raw Content"
            description="A single source of truth — a document, recording, or brief."
            icon={FileText}
          />
          <ProcessNode
            step="02 · Process"
            title="GenAI Processing"
            description="Structure, tone, and intent are extracted and understood."
            icon={Sparkles}
            active
          />
          <ProcessNode
            step="03 · Output"
            title="Formats"
            description="Polished assets generated for every channel at once."
            icon={ArrowRight}
          />
        </div>
      </div>

      {/* Sample transformation */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)]">
          {/* Input card */}
          <div
            data-ocid="concept.input_card"
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-subtle transition-smooth hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <FileText className="size-6" />
              </div>
              <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Input
              </span>
            </div>
            <div className="mt-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Product Launch Brief
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                20-page PDF · 4,800 words
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="inline-block size-1.5 rounded-full bg-primary" />
                PDF · DOCX · TXT
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex items-center justify-center lg:flex-col">
            <div className="flex size-11 items-center justify-center rounded-full border border-primary/50 bg-primary/10 shadow-[0_0_18px_2px_#00e5ff4d]">
              <Sparkles className="size-5 text-primary" />
            </div>
            <div
              aria-hidden="true"
              className="mx-3 h-px w-10 bg-primary/40 lg:mx-0 lg:my-3 lg:h-10 lg:w-px"
            />
          </div>

          {/* Output formats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {OUTPUT_FORMATS.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                data-ocid={`concept.output.${label.toLowerCase().replace(/\s+/g, "_")}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-subtle transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-secondary text-primary transition-smooth group-hover:bg-primary/10">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {label}
                  </h4>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export { ConceptSection };
