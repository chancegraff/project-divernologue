import Head from "next/head";
import LogoLongSVG from "svg/logo-long.svg";
import LogoSmallSVG from "svg/logo-small.svg";
import SocialInstagramSVG from "svg/social-instagram.svg";
import styles from "./Template.module.scss";

export default function Template({
  children,
}) {
  return (
    <div>
      <Head>
        <title>Divernologue</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className={styles.header}>
        <a><LogoLongSVG /></a>
        <a><SocialInstagramSVG /></a>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <small className={styles.small}>© 2021 Divernologue LLC</small>
        <LogoSmallSVG />
      </footer>
    </div>
  )
}
