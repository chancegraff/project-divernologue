import { INFO_1_PARAGRAPH_1, INFO_1_PARAGRAPH_2 } from "utils/constants";
import IllustrationIdeaSVG from "svg/illustration-idea-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info1.module.scss";

export default function Info1() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationIdeaSVG} />
      <Paragraph className={styles.paragraph}>{INFO_1_PARAGRAPH_1}</Paragraph>
      <Paragraph className={styles.paragraph}>{INFO_1_PARAGRAPH_2}</Paragraph>
    </Section>
  );
}
