import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Illustration, { IllustrationTypes } from "../components/Illustration";
import Paragraph, { ParagraphColor, ParagraphMargin } from "../components/Paragraph";
import Form from "../components/Form";

export default function Pledge() {
  return (
    <Section colorName={SectionColor.DARK}>
      <Illustration illustrationName={IllustrationTypes.SUCCESS} />
      <Title colorName={TitleColor.ON_DARK}>Promote neurodiversity in your organization</Title>
      <Paragraph colorName={ParagraphColor.ON_DARK} marginName={ParagraphMargin.ON_BOTTOM}>Managing the challenges presented by a world designed for neurotypical people requires constantly developing creative solutions.</Paragraph>
      <Paragraph colorName={ParagraphColor.ON_DARK} marginName={ParagraphMargin.ON_BOTTOM}>Unique ways of thinking and working are a huge benefit to your organization. Recognize the potential of neurodiverse employees and allow them space to excel in your organization.</Paragraph>
      <Form />
    </Section>
  );
}
