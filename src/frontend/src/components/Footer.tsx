const FOOTER_LINKS = [
  { href: "#concept", label: "Concept" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#output-formats", label: "Output Formats" },
  { href: "#skills", label: "Skills" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-ocid="footer" className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              data-ocid="footer.logo"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground"
            >
              <span
                aria-hidden="true"
                className="inline-block size-2.5 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(0,229,255,0.7)]"
              />
              Signal
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Signal turns a single piece of raw content into polished,
              multi-format output — powered by GenAI. One input, every format.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Navigate
            </p>
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              data-ocid="footer.attribution"
              className="text-foreground underline-offset-2 transition-smooth hover:underline"
            >
              caffeine.ai
            </a>
            .
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            GenAI Content Transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
