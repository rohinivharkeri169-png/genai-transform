import {
  ArrowRight,
  Braces,
  FileInput,
  FileOutput,
  Sparkles,
} from "lucide-react";

import { Section } from "@/components/Section";

interface Stage {
  step: string;
  title: string;
  description: string;
  icon: typeof FileInput;
}

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Content Ingestion",
    description:
      "Feed in raw material from any source — documents, transcripts, notes, or web content — and bring it into a single, unified workspace.",
    icon: FileInput,
  },
  {
    step: "02",
    title: "Intelligent Parsing",
    description:
      "The system breaks your source apart into structured, machine-readable segments, preserving meaning, hierarchy, and context.",
    icon: Braces,
  },
  {
    step: "03",
    title: "GenAI Processing",
    description:
      "A generative model reworks the parsed structure — rewriting, restructuring, and enriching it into a coherent new form.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Output Generation",
    description:
      "The transformed result is rendered into polished, ready-to-ship formats across every channel your audience lives on.",
    icon: FileOutput,
  },
];

export function PipelineSection() {
  return (
    <Section
      id="pipeline"
      className="relative overflow-hidden bg-glow-cyan"
      eyebrow="Transformation Pipeline"
      description="A transparent, step-by-step pipeline that turns your source content into a refined, multi-format result — no black box, no guesswork."
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From raw input to{" "}
          <span className="text-gradient-cyan">polished output</span>
        </h2>
      </div>

      <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Connecting flow line (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block"
        />

        {STAGES.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === STAGES.length - 1;
          return (
            <li key={stage.step} className="relative">
              <div
                data-ocid={`pipeline.card.${index + 1}`}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
              >
                {/* Glowing node on the flow line */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_3px_#00e5ff8c] lg:block"
                />

                <div className="mb-5 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                    {stage.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>

                {!isLast && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary lg:block"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <p
        data-ocid="pipeline.flow_label"
        className="mt-10 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        Input <span className="text-primary">→</span> Process{" "}
        <span className="text-primary">→</span> Output
      </p>
    </Section>
  );
}

export default PipelineSection;
