import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Illustration, { IllustrationSource } from "../components/Illustration";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Hero() {
  return (
    <Section colorName={SectionColor.LIGHT_BLUE}>
      <Illustration sourceName={IllustrationSource.MESSAGES} />
      <Title colorName={TitleColor.ON_LIGHT}>Promoting neurodiversity in the workplace</Title>
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Divernologue raises awareness and support of neurodiverse people in organizations to transform how we cooperate.</Paragraph>
    </Section>
  );
}
