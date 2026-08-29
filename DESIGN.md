# Design Brief

## Direction

Signal — dark editorial AI/tech showcase: deep indigo-black charcoal surfaces with a single electric-cyan accent, built around the input → GenAI → output transformation narrative.

## Tone

Bold, editorial, premium-tech — a confident dark interface with generous whitespace, sharp typographic contrast, and restrained cyan highlights that read as "intelligent signal" rather than decoration.

## Differentiation

A monochrome indigo-black canvas where electric cyan appears only as the "signal" of transformation — connecting input, processing, and output like a circuit lighting up.

## Color Palette

| Token      | OKLCH           | Role                                  |
| ---------- | --------------- | ------------------------------------- |
| background | 0.13 0.02 265   | deep indigo-black page canvas         |
| foreground | 0.94 0.02 265   | near-white primary text               |
| card       | 0.165 0.022 265 | elevated surface for cards            |
| primary    | 0.72 0.17 195   | electric-cyan accent / CTA            |
| accent     | 0.72 0.17 195   | cyan signal highlights, active states |
| muted      | 0.2 0.02 265    | subtle section / secondary surfaces   |
| border     | 0.26 0.025 265  | hairline dividers                     |

## Typography

- Display: Space Grotesk — hero, section headings, stat numbers
- Body: DM Sans — paragraphs, UI labels, card copy
- Mono: JetBrains Mono — pipeline stages, code/format labels, eyebrow tags
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Layered surfaces (background → card → muted) with hairline cyan-tinted borders; subtle and elevated shadows for depth, plus soft radial cyan glows behind hero and pipeline sections.

## Structural Zones

| Zone    | Background  | Border          | Notes                                  |
| ------- | ----------- | --------------- | -------------------------------------- |
| Header  | bg-background/80 backdrop-blur | border-b border-border | sticky nav, translucent glass          |
| Content | bg-background | —               | alternate bg-muted/30 every other section |
| Footer  | bg-card      | border-t border-border | summary + nav, cyan signal accents     |

## Spacing & Rhythm

Section gaps `py-24 md:py-32`, container max-w-7xl px-6; cards `gap-6`, internal padding `p-6 md:p-8`; micro-spacing `gap-3` between label, title, body.

## Component Patterns

- Buttons: `rounded-full`, primary = cyan bg with dark text, ghost = bordered; hover lifts with elevated shadow + brightens
- Cards: `rounded-2xl` bg-card border-border shadow-subtle; hover shadow-elevated + border-cyan/40
- Badges: `rounded-full` mono uppercase, muted bg with cyan text for stage labels

## Motion

- Entrance: `fade-up` stagger on scroll into view (0.7s)
- Hover: card lift + border brighten (0.3s transition-smooth)
- Decorative: `float` on hero orb, `pulse-glow` on cyan signal orbs

## Constraints

- Dark mode only; no light theme
- Cyan reserved for signal/highlights — never flood the page
- Use semantic tokens only, no raw color literals
- No interactive transformation demo or live LLM integration (showcase only)

## Signature Detail

The cyan "signal path" — a horizontal connector line with glowing nodes linking input → GenAI → output — makes the transformation concept legible at a glance.
