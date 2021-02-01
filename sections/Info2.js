import Section, { SectionColor } from "../components/Section";
import Illustration, { IllustrationSource } from "../components/Illustration";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Info2() {
  return (
    <Section colorName={SectionColor.LIGHT_CAMEL}>
      <Illustration sourceName={IllustrationSource.RECRUITMENT} />
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>An estimated 1 in 8 adults in the United States are neurodiverse. Fewer than half of them are aware of it due to missed and inaccurate diagnosis.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiversity affects all of us indiscriminately, if not directly then through our friends and family.</Paragraph>
    </Section>
  );
}
