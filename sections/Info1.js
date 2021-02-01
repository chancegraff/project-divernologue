import Section, { SectionColor } from "../components/Section";
import Illustration, { IllustrationSource } from "../components/Illustration";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Info1() {
  return (
    <Section colorName={SectionColor.LIGHT}>
      <Illustration sourceName={IllustrationSource.IDEA} />
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiversity is the diversity of human brains and minds– the infinite variation in neurocognitive functioning within our species.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Forms of neurodiversity include dyslexia, ADHD, and Autism spectrum disorder, among others.</Paragraph>
    </Section>
  );
}
