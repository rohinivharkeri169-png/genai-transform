import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
}: SectionProps) {
  return (
    <section
      id={id}
      data-ocid={`section.${id}`}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className={cn("container", containerClassName)}>
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
