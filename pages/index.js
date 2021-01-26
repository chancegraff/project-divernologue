import Head from "next/head";

// Call an external API endpoint to get posts
// By returning { props: { posts } }, the Blog component
// will receive `posts` as a prop at build time
//
// export async function getStaticProps() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()
//   return {
//     props: {
//       posts,
//     },
//   }
// }

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
        <div className="bg-light-blue">
          <img src="/illustration-messages.svg" />
          <h1 className="header-on-light">Promoting neurodiversity in the workplace</h1>
          <p className="paragraph-on-light">Divernologue raises awareness and support of neurodiverse people in organizations to transform how we cooperate.</p>
        </div>
        <div className="bg-light">
          <img src="/illustration-idea-group.svg" />
          <p className="paragraph-on-light">Neurodiversity is the diversity of human brains and minds– the infinite variation in neurocognitive functioning within our species.</p>
          <p className="paragraph-on-light">Forms of neurodiversity include dyslexia, ADHD, and Autism spectrum disorder, among others.</p>
        </div>
        <div className="bg-light-camel">
          <img src="/illustration-recruitment-group.svg" />
          <p className="paragraph-on-light">An estimated 1 in 8 adults in the United States are neurodiverse. Fewer than half of them are aware of it due to missed and inaccurate diagnosis.</p>
          <p className="paragraph-on-light">Neurodiversity affects all of us indiscriminately, if not directly then through our friends and family.</p>
        </div>
        <div className="bg-light">
          <img src="/illustration-falling-group.svg" />
          <p className="paragraph-on-light">Neurodiverse people experience significantly higher rates of unemployment compared to their peers, up to 80% for some groups.</p>
          <p className="paragraph-on-light">They’re 18 times more likely to be disciplined at work, ultimately making them 60% more likely to lose their job. These individuals risk becoming trapped in a vicious cycle of entry level positions.</p>
        </div>
        <div className="bg-dark">
          <img src="/illustration-success.svg" />
          <h1 className="header-on-dark">Promote neurodiversity in your organization</h1>
          <p className="paragraph-on-dark">Managing the challenges presented by a world designed for neurotypical people requires constantly developing creative solutions.</p>
          <p className="paragraph-on-dark">Unique ways of thinking and working are a huge benefit to your organization. Recognize the potential of neurodiverse employees and allow them space to excel in your organization.</p>
        </div>
      </main>
      <footer>
        <small className="small-on-dark">© 2021 Divernologue LLC</small>
        <img src="/logo-small.svg" />
      </footer>
    </div>
  )
}
