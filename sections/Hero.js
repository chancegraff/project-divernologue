import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Image, { ImageSource } from "../components/Image";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Hero() {
  return (
    <Section colorName={SectionColor.LIGHT_BLUE}>
      <Image sourceName={ImageSource.ILLUSTRATIONS.MESSAGES} />
      <Title colorName={TitleColor.ON_LIGHT}>Promoting neurodiversity in the workplace</Title>
      <Paragraph colorName={ParagraphColor.ON_LIGHT}>Divernologue raises awareness and support of neurodiverse people in organizations to transform how we cooperate.</Paragraph>
    </Section>
  );
}
