import { INFO_3_PARAGRAPH_1, INFO_3_PARAGRAPH_2 } from "utils/constants";
import IllustrationFallingSVG from "svg/illustration-falling-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info3.module.scss";

export default function Info3() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationFallingSVG} />
      <Paragraph className={styles.paragraph}>{INFO_3_PARAGRAPH_1}</Paragraph>
      <Paragraph className={styles.paragraph}>{INFO_3_PARAGRAPH_2}</Paragraph>
    </Section>
  );
}
