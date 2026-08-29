import { Layout } from "@/components/Layout";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OutputFormatsSection } from "@/components/sections/OutputFormatsSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ConceptSection />
      <PipelineSection />
      <OutputFormatsSection />
      <SkillsSection />
    </Layout>
  );
}
