import IllustrationFallingSVG from "svg/illustration-falling-group.svg";
import Section from "./groups/Section";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Info3.module.scss";

export default function Info3() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationFallingSVG} />
      <Paragraph className={styles.paragraph}>Neurodiverse people experience significantly higher rates of unemployment compared to their peers, up to 80% for some groups.</Paragraph>
      <Paragraph className={styles.paragraph}>They’re 18 times more likely to be disciplined at work, ultimately making them 60% more likely to lose their job. These individuals risk becoming trapped in a vicious cycle of entry level positions.</Paragraph>
    </Section>
  );
}
