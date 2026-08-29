import { useState } from "react";

import {
  ArrowUpRight,
  FileText,
  Languages,
  ListChecks,
  MessageSquareText,
  Presentation,
  Share2,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface OutputFormat {
  id: string;
  label: string;
  icon: typeof FileText;
  tagline: string;
  preview: string;
  detail: string[];
}

const formats: OutputFormat[] = [
  {
    id: "summary",
    label: "Short Summary",
    icon: FileText,
    tagline: "Distill a long document into a crisp, scannable overview.",
    preview:
      "The Q3 market report shows revenue up 18% year-over-year, driven by the EMEA expansion and a 22% lift in enterprise renewals. Customer churn fell to a record low of 2.1%.",
    detail: [
      "The Q3 market report shows revenue up 18% year-over-year, driven by the EMEA expansion and a 22% lift in enterprise renewals.",
      "Customer churn fell to a record low of 2.1%, helped by the new onboarding flow and proactive support playbooks.",
      "The company is on track to hit its full-year target, with the strongest pipeline growth in the mid-market segment.",
    ],
  },
  {
    id: "points",
    label: "Important Points",
    icon: ListChecks,
    tagline: "Extract the key takeaways as clean, ordered bullet points.",
    preview:
      "• Revenue grew 18% YoY\n• EMEA drove most of the growth\n• Churn hit a record low of 2.1%\n• Mid-market pipeline is the strongest",
    detail: [
      "Revenue grew 18% year-over-year, with EMEA contributing the largest share of new bookings.",
      "Enterprise renewals improved 22%, supported by the redesigned onboarding experience.",
      "Customer churn fell to a record low of 2.1% — the best quarter on record.",
      "Mid-market pipeline is the strongest it has been all year, setting up a strong Q4.",
    ],
  },
  {
    id: "qa",
    label: "Questions & Answers",
    icon: MessageSquareText,
    tagline: "Turn the material into a natural Q&A for briefings and FAQs.",
    preview:
      "Q: What drove this quarter's growth?\nA: A 22% lift in enterprise renewals and strong EMEA expansion.",
    detail: [
      "Q: What drove this quarter's growth?",
      "A: A 22% lift in enterprise renewals combined with strong EMEA expansion, which together lifted revenue 18% year-over-year.",
      "Q: How is churn trending?",
      "A: Churn fell to a record low of 2.1%, driven by the new onboarding flow and proactive support playbooks.",
      "Q: What should we watch next quarter?",
      "A: The mid-market segment has the strongest pipeline and is the biggest upside opportunity heading into Q4.",
    ],
  },
  {
    id: "social",
    label: "Social Media Post",
    icon: Share2,
    tagline: "Repackage the insight as a punchy, share-ready post.",
    preview:
      "📈 Q3 was our best quarter yet.\n\nRevenue up 18% YoY, churn at an all-time low of 2.1%, and EMEA leading the charge. The playbook is working.",
    detail: [
      "📈 Q3 was our best quarter yet.",
      "",
      "Revenue up 18% year-over-year, churn at an all-time low of 2.1%, and EMEA leading the charge. The playbook is working.",
      "",
      "Biggest upside? The mid-market pipeline heading into Q4. 🚀",
    ],
  },
  {
    id: "presentation",
    label: "Presentation Content",
    icon: Presentation,
    tagline: "Shape the findings into slide-ready talking points.",
    preview:
      "Slide 1 — The headline: revenue up 18%.\nSlide 2 — What drove it: renewals + EMEA.\nSlide 3 — The risk: churn, now at 2.1%.",
    detail: [
      "Slide 1 — The headline: revenue up 18% year-over-year.",
      "Slide 2 — What drove it: a 22% lift in enterprise renewals and EMEA expansion.",
      "Slide 3 — The risk: churn, now at a record low of 2.1%.",
      "Slide 4 — The opportunity: mid-market pipeline is the strongest all year.",
    ],
  },
  {
    id: "translation",
    label: "Translation",
    icon: Languages,
    tagline: "Carry the same message across languages, tone intact.",
    preview:
      "El informe del tercer trimestre muestra un crecimiento de ingresos del 18% interanual, impulsado por la expansión en EMEA.",
    detail: [
      "El informe del tercer trimestre muestra un crecimiento de ingresos del 18% interanual, impulsado por la expansión en EMEA y un aumento del 22% en las renovaciones empresariales.",
      "La rotación de clientes cayó a un mínimo histórico del 2,1%, gracias al nuevo flujo de incorporación y a los manuales de soporte proactivo.",
    ],
  },
];

export function OutputFormatsSection() {
  const [active, setActive] = useState<OutputFormat | null>(null);

  return (
    <section
      id="output-formats"
      data-ocid="section.output_formats"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-glow-cyan opacity-60"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p
            data-ocid="output_formats.eyebrow"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary"
          >
            Output Formats
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            One source, <span className="text-gradient-cyan">every format</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Signal reshapes a single piece of content into the formats your
            audience actually reads. Explore each output below.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <article
                key={format.id}
                data-ocid={`output_formats.card.${index + 1}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-subtle transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {format.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {format.tagline}
                </p>

                <div className="mt-4 flex-1 rounded-lg border border-border/70 bg-background/60 p-4">
                  <p className="whitespace-pre-line font-mono text-[13px] leading-relaxed text-foreground/80">
                    {format.preview}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  data-ocid={`output_formats.open_modal_button.${index + 1}`}
                  onClick={() => setActive(format)}
                  className="mt-5 w-full justify-between text-primary hover:bg-primary/10 hover:text-primary"
                >
                  View full output
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              </article>
            );
          })}
        </div>
      </div>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => !open && setActive(null)}
      >
        <DialogContent className="max-w-2xl border-border bg-card">
          <DialogHeader>
            <div className="mb-1 flex items-center gap-3">
              {active &&
                (() => {
                  const Icon = active.icon;
                  return (
                    <div className="flex size-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  );
                })()}
              <Badge
                variant="secondary"
                className="font-mono text-xs uppercase tracking-wider"
              >
                {active?.label}
              </Badge>
            </div>
            <DialogTitle className="font-display text-2xl text-foreground">
              {active?.label}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Full sample output generated from a single source document.
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[50vh] overflow-y-auto rounded-lg border border-border/70 bg-background/60 p-5">
            {(() => {
              let spacer = 0;
              return active?.detail.map((line) =>
                line === "" ? (
                  <div key={`spacer-${spacer++}`} className="h-3" />
                ) : (
                  <p
                    key={line}
                    className="mb-2 font-mono text-sm leading-relaxed text-foreground/85"
                  >
                    {line}
                  </p>
                ),
              );
            })()}
          </div>

          <Button
            variant="outline"
            data-ocid="output_formats.close_button"
            onClick={() => setActive(null)}
            className="w-full"
          >
            <X className="size-4" aria-hidden="true" />
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default OutputFormatsSection;
