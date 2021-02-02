import { INFO_2_PARAGRAPH_1, INFO_2_PARAGRAPH_2 } from "utils/constants";
import IllustrationRecruitmentSVG from "svg/illustration-recruitment-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info2.module.scss";

export default function Info2() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationRecruitmentSVG} />
      <Paragraph className={styles.paragraph}>{INFO_2_PARAGRAPH_1}</Paragraph>
      <Paragraph className={styles.paragraph}>{INFO_2_PARAGRAPH_2}</Paragraph>
    </Section>
  );
}
