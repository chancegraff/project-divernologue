import IllustrationMessagesSVG from "svg/illustration-messages.svg";
import Section from "./groups/Section";
import Title from "./texts/Title";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationMessagesSVG} />
      <Title className={styles.title}>Promoting neurodiversity in the workplace</Title>
      <Paragraph className={styles.paragraph}>Divernologue raises awareness and support of neurodiverse people in organizations to transform how we cooperate.</Paragraph>
    </Section>
  );
}
