import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Image, { ImageSource } from "../components/Image";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Form() {
  return (
    <Section colorName={SectionColor.DARK}>
      <Image sourceName={ImageSource.ILLUSTRATIONS.SUCCESS} />
      <Title colorName={TitleColor.ON_DARK}>Promote neurodiversity in your organization</Title>
      <Paragraph colorName={ParagraphColor.ON_DARK}>Managing the challenges presented by a world designed for neurotypical people requires constantly developing creative solutions.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_DARK}>Unique ways of thinking and working are a huge benefit to your organization. Recognize the potential of neurodiverse employees and allow them space to excel in your organization.</Paragraph>
    </Section>
  );
}
