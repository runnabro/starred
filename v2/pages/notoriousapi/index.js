import BackLink from '../../components/BackLink.js'
import HomeLink from '../../components/HomeLink.js'
import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default function NotoriousApi() {
  return (
    <Layout>
      <Head>
        <title>Notorious A.P.I.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-notorious">
          <section className="grid-block col section padding-bottom-none hero hero-notoriousapi">
            <BackLink />
            <div className="text-container">
              <h1 className="h1">Notorious A.P.I.</h1>
              <p className="p">Audio and visual feedback when your API blows up like you thought it would.</p>
              <a className="btn btn-md btn-white" href="//mulesoft-labs.github.io/notoriousapi"><span className="span">View It Live</span></a>
            </div>
            <figure className="figure figure-xl img-wrapper img-notoriousapi-hero">
              <img className="img" src="/images/notoriousapi/hero.gif" height="511" width="840" />
            </figure>
          </section>
          <section className="grid-block col section text-container padding-bottom-none padding-top-none">
            <p className="p">Notorious API was built as part of a 24-hour hackathon project. Teaming up with 3 others, we built an audio-based monitoring experience. We wanted to do something different 🌈 and have fun with it!</p>
            <figure className="grid-block col align-center figure">
              <div className="video-wrapper">
                <video
                  className="video"
                  controls
                  playsInline
                  src="/images/notoriousapi/state-normal.mp4"
                />
              </div>
              <figcaption className="figcaption">For 200 responses, latency affects the size of the visual representation.</figcaption>
            </figure>
            <figure className="grid-block col align-center figure">
              <div className="video-wrapper">
                <video
                  className="video"
                  controls
                  playsInline
                  src="/images/notoriousapi/state-threshold.mp4"
                />
              </div>
              <figcaption className="figcaption">We layered a new audio track and visuals once the amount of 400 and 500 status codes exceeded a preset threshold.</figcaption>
            </figure>
          </section>
          <section className="grid-block col section padding-top-none">
            <div className="margin-top-md text-container">
              <HomeLink />
            </div>
          </section>
        </article>
      </main>
    </Layout>
  )
}
