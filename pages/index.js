import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divernologue</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        Hello main
      </main>

      <footer>
        Hi!
      </footer>
    </div>
  )
}
