import IllustrationRecruitmentSVG from "svg/illustration-recruitment-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info2.module.scss";

export default function Info2() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationRecruitmentSVG} />
      <Paragraph className={styles.paragraph}>An estimated 1 in 8 adults in the United States are neurodiverse. Fewer than half of them are aware of it due to missed and inaccurate diagnosis.</Paragraph>
      <Paragraph className={styles.paragraph}>Neurodiversity affects all of us indiscriminately, if not directly then through our friends and family.</Paragraph>
    </Section>
  );
}
