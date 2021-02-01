import Section, { SectionColor } from "../components/Section";
import Illustration, { IllustrationSource } from "../components/Illustration";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Info3() {
  return (
    <Section colorName={SectionColor.LIGHT}>
      <Illustration sourceName={IllustrationSource.FALLING} />
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiverse people experience significantly higher rates of unemployment compared to their peers, up to 80% for some groups.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>They’re 18 times more likely to be disciplined at work, ultimately making them 60% more likely to lose their job. These individuals risk becoming trapped in a vicious cycle of entry level positions.</Paragraph>
    </Section>
  );
}
