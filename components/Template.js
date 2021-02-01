import Head from "next/head";
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
        <a><img src="/logo-long.svg" /></a>
        <a><img src="/social-instagram.svg" /></a>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <small className={styles.small}>© 2021 Divernologue LLC</small>
        <img src="/logo-small.svg" />
      </footer>
    </div>
  )
}
