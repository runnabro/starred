import './../../css/index.scss'
import Head from 'next/head';
import Layout from '../../components/layout.js'

export default function CodeSnippets() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Hey, tell me about MuleQuest.</title>
      </Head>
      <main class="grid-block col main">
        <article class="article article-mulequest">
          <section class="grid-block col section padding-bottom-none hero hero-mulequest">
            <a class="back-arrow" href="/">
              @@include('images/back-arrow.svg')
            </a>
            <div class="text-container">
              <h1 class="h1">MuleQuest</h1>
              <p class="p">We built a game to introduce users to MuleSoft’s latest product.</p>
            </div>
            <figure class="figure figure-xl img-wrapper img-mulequest-hero">
              <video class="video" src="/images/mulequest/mulequest-mov.mp4" autoplay loop muted playsinline height="424" width="840"></video>
            </figure>
          </section>
          <section class="grid-block col section text-container padding-bottom-none padding-top-none">
            <p class="p">A small team of engineers and designers teamed up to build MuleQuest in a 48-hour hackathon project. MuleQuest takes users through 3 obstacles that users need to solve by using Flow Designer to transform data.</p>
            <figure class="grid-block col align-center figure">
              <img class="img img-wrapper no-shadow" src="/images/mulequest.gif" height="343" width="450" />
              <figcaption class="figcaption">Sprites for the pixelized version of “Max the Mule”.</figcaption>
            </figure>
          </section>
          <section class="grid-block col section">
            <figure class="grid-block align-center justify-center figure-mulequest-ui">
              <img class="img no-shadow" src="/images/mulequest/setup.png" height="232" width="300" />
              <img class="img no-shadow" src="/images/mulequest/instructions.png" height="258" width="300" />
              <img class="img no-shadow" src="/images/mulequest/hi-score.png" height="194" width="300" />
            </figure>
            <figcaption class="figcaption">Setup, instructions, and high score.</figcaption>
          </section>
          <section class="grid-block col section text-container padding-top-none">
            <figure class="grid-block col align-center figure">
              <img class="img img-wrapper no-shadow" src="/images/mulequest/max-pride.png" height="166" width="300" />
              <img class="img img-wrapper no-shadow" src="/images/mulequest/max-shirt.jpg" height="166" width="400" />
              <figcaption class="figcaption"><strong>Bonus:</strong> Max afro shirts and Max pride stickers.</figcaption>
            </figure>
          </section>
          <section class="grid-block col section padding-top-none">
            <p class="text-container p">
              We ended up taking MuleQuest to MuleSoft’s annual conference at <a href="https://connect.mulesoft.com/" target="_blank" class="link"><span class="span">CONNECT 2018</span></a> where we ran a training workshop with it.
            </p>
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
