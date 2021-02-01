import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Illustration, { IllustrationSource } from "../components/Illustration";
import Paragraph, { ParagraphColor } from "../components/Paragraph";
import Input from "../components/Input";

export default function Pledge() {
  return (
    <Section colorName={SectionColor.DARK}>
      <Illustration sourceName={IllustrationSource.SUCCESS} />
      <Title colorName={TitleColor.ON_DARK}>Promote neurodiversity in your organization</Title>
      <Paragraph colorName={ParagraphColor.ON_DARK}>Managing the challenges presented by a world designed for neurotypical people requires constantly developing creative solutions.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_DARK}>Unique ways of thinking and working are a huge benefit to your organization. Recognize the potential of neurodiverse employees and allow them space to excel in your organization.</Paragraph>
      <Input />
    </Section>
  );
}
