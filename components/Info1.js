import IllustrationIdeaSVG from "svg/illustration-idea-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info1.module.scss";

export default function Info1() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationIdeaSVG} />
      <Paragraph className={styles.paragraph}>Neurodiversity is the diversity of human brains and minds– the infinite variation in neurocognitive functioning within our species.</Paragraph>
      <Paragraph className={styles.paragraph}>Forms of neurodiversity include dyslexia, ADHD, and Autism spectrum disorder, among others.</Paragraph>
    </Section>
  );
}
