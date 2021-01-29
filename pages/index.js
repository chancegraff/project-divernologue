import Head from "next/head";
import Hero from "../sections/Hero";
import Info1 from "../sections/Info1";
import Info2 from "../sections/Info2";
import Info3 from "../sections/Info3";
import Form from "../sections/Form";

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
        <Hero />
        <Info1 />
        <Info2 />
        <Info3 />
        <Form />
      </main>
      <footer>
        <small className="small-on-dark">© 2021 Divernologue LLC</small>
        <img src="/logo-small.svg" />
      </footer>
    </div>
  )
}
