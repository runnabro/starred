import BackLink from '../../components/BackLink.js'
import HomeLink from '../../components/HomeLink.js'
import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default function MuleQuest() {
  return (
    <Layout>
      <Head>
        <title>Hey, tell me about MuleQuest.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-mulequest">
          <section className="grid-block col section padding-bottom-none hero hero-mulequest">
            <BackLink />
            <div className="text-container">
              <h1 className="h1">MuleQuest</h1>
              <p className="p">We built a game to introduce users to MuleSoft’s latest product.</p>
            </div>
            <figure className="figure figure-xl img-wrapper img-mulequest-hero">
              <video
                autoPlay
                className="video"
                height="424"
                loop
                muted
                playsInline
                src="/images/mulequest/mulequest-mov.mp4"
                width="840"
              />
            </figure>
          </section>
          <section className="grid-block col section text-container padding-bottom-none padding-top-none">
            <p className="p">A small team of engineers and designers teamed up to build MuleQuest in a 48-hour hackathon project. MuleQuest takes users through 3 obstacles that users need to solve by using Flow Designer to transform data.</p>
            <figure className="grid-block col align-center figure">
              <img className="img img-wrapper no-shadow" src="/images/mulequest.gif" height="343" width="450" />
              <figcaption className="figcaption">Sprites for the pixelized version of “Max the Mule”.</figcaption>
            </figure>
          </section>
          <section className="grid-block col section">
            <figure className="grid-block align-center justify-center figure-mulequest-ui">
              <img className="img no-shadow" src="/images/mulequest/setup.png" height="232" width="300" />
              <img className="img no-shadow" src="/images/mulequest/instructions.png" height="258" width="300" />
              <img className="img no-shadow" src="/images/mulequest/hi-score.png" height="194" width="300" />
            </figure>
            <figcaption className="figcaption">Setup, instructions, and high score.</figcaption>
          </section>
          <section className="grid-block col section text-container padding-top-none">
            <figure className="grid-block col align-center figure">
              <img className="img img-wrapper no-shadow" src="/images/mulequest/max-pride.png" height="166" width="300" />
              <img className="img img-wrapper no-shadow" src="/images/mulequest/max-shirt.jpg" height="166" width="400" />
              <figcaption className="figcaption"><strong>Bonus:</strong> Max afro shirts and Max pride stickers.</figcaption>
            </figure>
          </section>
          <section className="grid-block col section padding-top-none">
            <p className="text-container p">
              We ended up taking MuleQuest to MuleSoft’s annual conference at <a href="https://connect.mulesoft.com/" target="_blank" className="link"><span className="span">CONNECT 2018</span></a> where we ran a training workshop with it.
            </p>
            <div className="margin-top-md text-container">
              <HomeLink />
            </div>
          </section>
        </article>
      </main>
    </Layout>
  )
}
