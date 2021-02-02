import { HERO_TITLE, HERO_PARAGRAPH } from "utils/constants";
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
      <Title className={styles.title}>{HERO_TITLE}</Title>
      <Paragraph className={styles.paragraph}>{HERO_PARAGRAPH}</Paragraph>
    </Section>
  );
}
