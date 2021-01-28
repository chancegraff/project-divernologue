import Head from "next/head";
import Section, { SectionColor } from "../components/Section";
import Title, { TitleColor } from "../components/Title";
import Image, { ImageSource } from "../components/Image";
import Paragraph, { ParagraphColor } from "../components/Paragraph";

export default function Splash() {
  return (
    <div>
      <Head>
        <title>Divernologue</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <div>
          <img src="/logo-long.svg" />
          <img src="/social-instagram.svg" />
        </div>
      </header>
      <main>
        <Section colorName={SectionColor.LIGHT_BLUE}>
          <Image sourceName={ImageSource.ILLUSTRATIONS.MESSAGES} />
          <Title colorName={TitleColor.ON_LIGHT}>Promoting neurodiversity in the workplace</Title>
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>Divernologue raises awareness and support of neurodiverse people in organizations to transform how we cooperate.</Paragraph>
        </Section>
        <Section colorName={SectionColor.LIGHT}>
          <Image sourceName={ImageSource.ILLUSTRATIONS.GROUPS.IDEA} />
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiversity is the diversity of human brains and minds– the infinite variation in neurocognitive functioning within our species.</Paragraph>
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>Forms of neurodiversity include dyslexia, ADHD, and Autism spectrum disorder, among others.</Paragraph>
        </Section>
        <Section colorName={SectionColor.LIGHT_CAMEL}>
          <Image sourceName={ImageSource.ILLUSTRATIONS.GROUPS.RECRUITMENT} />
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>An estimated 1 in 8 adults in the United States are neurodiverse. Fewer than half of them are aware of it due to missed and inaccurate diagnosis.</Paragraph>
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiversity affects all of us indiscriminately, if not directly then through our friends and family.</Paragraph>
        </Section>
        <Section colorName={SectionColor.LIGHT}>
          <Image sourceName={ImageSource.ILLUSTRATIONS.GROUPS.FALLING} />
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>Neurodiverse people experience significantly higher rates of unemployment compared to their peers, up to 80% for some groups.</Paragraph>
          <Paragraph colorName={ParagraphColor.ON_LIGHT}>They’re 18 times more likely to be disciplined at work, ultimately making them 60% more likely to lose their job. These individuals risk becoming trapped in a vicious cycle of entry level positions.</Paragraph>
        </Section>
        <Section colorName={SectionColor.DARK}>
          <Image sourceName={ImageSource.ILLUSTRATIONS.SUCCESS} />
          <Title colorName={TitleColor.ON_DARK}>Promote neurodiversity in your organization</Title>
          <Paragraph colorName={ParagraphColor.ON_DARK}>Managing the challenges presented by a world designed for neurotypical people requires constantly developing creative solutions.</Paragraph>
          <Paragraph colorName={ParagraphColor.ON_DARK}>Unique ways of thinking and working are a huge benefit to your organization. Recognize the potential of neurodiverse employees and allow them space to excel in your organization.</Paragraph>
        </Section>
      </main>
      <footer>
        <small className="small-on-dark">© 2021 Divernologue LLC</small>
        <img src="/logo-small.svg" />
      </footer>
    </div>
  )
}
