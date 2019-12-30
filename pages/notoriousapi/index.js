import './../../css/index.scss'
import Head from 'next/head';
import Layout from '../../components/layout.js'

export default function NotoriousApi() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Notorious A.P.I.</title>
      </Head>
      <main class="grid-block col main">
        <article class="article article-notorious">
          <section class="grid-block col section padding-bottom-none hero hero-notoriousapi">
            <a class="back-arrow" href="/">
              @@include('images/back-arrow.svg')
            </a>
            <div class="text-container">
              <h1 class="h1">Notorious A.P.I.</h1>
              <p class="p">Audio and visual feedback when your API blows up like you thought it would.</p>
              <a class="btn btn-md btn-white" href="//mulesoft-labs.github.io/notoriousapi"><span class="span">View It Live</span></a>
            </div>
            <figure class="figure figure-xl img-wrapper img-notoriousapi-hero">
              <img class="img" src="/images/notoriousapi/hero.gif" height="511" width="840" />
            </figure>
          </section>
          <section class="grid-block col section text-container padding-bottom-none padding-top-none">
            <p class="p">Notorious API was built as part of a 24-hour hackathon project. Teaming up with 3 others, we built an audio-based monitoring experience. We wanted to do something different 🌈 and have fun with it!</p>
            <figure class="grid-block col align-center figure">
              <video class="video" src="/images/notoriousapi/state-normal.mp4" controls playsinline></video>
              <figcaption class="figcaption">For 200 responses, latency affects the size of the visual representation.</figcaption>
            </figure>
            <figure class="grid-block col align-center figure">
              <video class="video" src="/images/notoriousapi/state-threshold.mp4" controls playsinline></video>
              <figcaption class="figcaption">We layered a new audio track and visuals once the amount of 400 and 500 status codes exceeded a preset threshold.</figcaption>
            </figure>
          </section>
          <section class="grid-block col section padding-top-none">
            <div class="margin-top-md text-container">
              <a class="btn btn-md btn-blue-outline" href="/">
                @@include('images/back-arrow.svg')
                Go Home
              </a>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  )
}
