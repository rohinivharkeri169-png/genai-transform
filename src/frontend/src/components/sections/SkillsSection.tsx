import {
  Braces,
  Database,
  GitBranch,
  Layers,
  MessageSquareText,
  Network,
  Rocket,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Section } from "@/components/Section";

interface Skill {
  name: string;
  description: string;
  icon: typeof Braces;
}

interface SkillGroup {
  label: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Core Languages",
    skills: [
      {
        name: "Python",
        icon: Braces,
        description:
          "The backbone of the pipeline — scripting, data handling, and glue code that moves content from source to output.",
      },
    ],
  },
  {
    label: "GenAI & NLP",
    skills: [
      {
        name: "NLP Basics",
        icon: MessageSquareText,
        description:
          "Tokenization, parsing, and language structure that let the system understand and reshape raw text.",
      },
      {
        name: "LLMs & Generative AI",
        icon: Sparkles,
        description:
          "The generative core that rewrites, expands, and reimagines source content into fresh formats.",
      },
      {
        name: "Prompt Engineering",
        icon: Workflow,
        description:
          "Crafting precise instructions that steer models toward consistent, on-brand transformations.",
      },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      {
        name: "LLM APIs",
        icon: Server,
        description:
          "Reliable integration with model endpoints to run transformations at scale and on demand.",
      },
      {
        name: "FastAPI",
        icon: Layers,
        description:
          "The service layer that exposes the transformation engine as fast, clean, production-ready endpoints.",
      },
    ],
  },
  {
    label: "Data & Retrieval",
    skills: [
      {
        name: "Embeddings & RAG",
        icon: Network,
        description:
          "Grounding generated output in source knowledge so every format stays accurate and on-topic.",
      },
      {
        name: "Vector Databases",
        icon: Database,
        description:
          "Storing and searching semantic meaning to retrieve the right context for each transformation.",
      },
      {
        name: "SQL / Database Basics",
        icon: Database,
        description:
          "Managing source records, metadata, and output history with reliable, queryable storage.",
      },
    ],
  },
  {
    label: "Deployment",
    skills: [
      {
        name: "Git + Deployment",
        icon: GitBranch,
        description:
          "Versioning the pipeline and shipping updates safely so the transformation service stays live and repeatable.",
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Tech Stack"
      description="A focused AI-engineering toolkit that powers the content pipeline — from parsing source material to shipping polished, multi-format output."
    >
      <h2 className="mx-auto mb-14 max-w-2xl text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        The engineering behind{" "}
        <span className="text-gradient-cyan">every transformation</span>
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} data-ocid={`skills.group.${group.label}`}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {group.label}
              </h3>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <article
                  key={skill.name}
                  data-ocid={`skills.card.${skill.name}`}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-subtle transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-glow-cyan opacity-0 transition-smooth group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <skill.icon className="size-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {skill.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center gap-3">
        <Rocket className="size-4 text-primary" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          One toolkit · every format
        </p>
      </div>
    </Section>
  );
}

export default SkillsSection;
