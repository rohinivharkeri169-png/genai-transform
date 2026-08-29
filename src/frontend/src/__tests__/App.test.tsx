import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "@/App";

describe("GenAI Content Transformation showcase", () => {
  it("renders without a blank screen and shows all key sections", () => {
    render(<App />);

    // Hero
    expect(
      screen.getByRole("heading", { name: /turn any content/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/signal takes a single source/i),
    ).toBeInTheDocument();

    // Concept
    const concept = screen.getByTestId("section.concept");
    expect(
      within(concept).getByRole("heading", {
        name: /one input\. every format/i,
      }),
    ).toBeInTheDocument();
    expect(within(concept).getByText("Raw Content")).toBeInTheDocument();
    expect(within(concept).getByText("GenAI Processing")).toBeInTheDocument();
    expect(within(concept).getByText("Formats")).toBeInTheDocument();

    // Pipeline
    expect(
      screen.getByRole("heading", {
        name: /from raw input to polished output/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Content Ingestion")).toBeInTheDocument();
    expect(screen.getByText("Intelligent Parsing")).toBeInTheDocument();
    expect(screen.getByText("Output Generation")).toBeInTheDocument();

    // Output formats
    expect(
      screen.getByRole("heading", { name: /one source, every format/i }),
    ).toBeInTheDocument();

    // Skills
    expect(
      screen.getByRole("heading", {
        name: /the engineering behind every transformation/i,
      }),
    ).toBeInTheDocument();
  });

  it("displays all six output formats with sample content", () => {
    render(<App />);

    const section = screen.getByTestId("section.output_formats");
    for (const label of [
      "Short Summary",
      "Important Points",
      "Questions & Answers",
      "Social Media Post",
      "Presentation Content",
      "Translation",
    ]) {
      expect(within(section).getByText(label)).toBeInTheDocument();
    }
  });

  it("presents all ten skills grouped into categories", () => {
    render(<App />);

    const section = screen.getByTestId("section.skills");
    for (const skill of [
      "Python",
      "NLP Basics",
      "LLMs & Generative AI",
      "Prompt Engineering",
      "LLM APIs",
      "FastAPI",
      "Embeddings & RAG",
      "Vector Databases",
      "SQL / Database Basics",
      "Git + Deployment",
    ]) {
      expect(within(section).getByText(skill)).toBeInTheDocument();
    }
  });

  it("shows a relevant image in the hero", () => {
    render(<App />);

    const img = screen.getByAltText(
      /a single luminous beam of content splitting/i,
    );
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "/assets/generated/transformation-hero.dim_1200x800.png",
    );
  });

  it("renders header navigation linking to each section", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const [label, href] of [
      ["Concept", "#concept"],
      ["Pipeline", "#pipeline"],
      ["Output Formats", "#output-formats"],
      ["Skills", "#skills"],
    ]) {
      const link = within(nav).getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("opens the output format detail dialog from a card", async () => {
    const user = userEvent.setup();
    render(<App />);

    const section = screen.getByTestId("section.output_formats");
    const summaryCard = within(section)
      .getByText("Short Summary")
      .closest("article");
    expect(summaryCard).not.toBeNull();

    const viewButton = within(summaryCard as HTMLElement).getByRole("button", {
      name: /view full output/i,
    });
    await user.click(viewButton);

    // The dialog shows the full detail content for the summary format.
    const dialog = screen.getByRole("dialog");
    expect(dialog.querySelector("h2")).toHaveTextContent("Short Summary");
    expect(
      within(dialog).getByText(/the q3 market report shows revenue up 18%/i),
    ).toBeInTheDocument();
  });
});
