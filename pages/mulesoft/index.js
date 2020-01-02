import BackLink from '../../components/BackLink.js'
import HomeLink from '../../components/HomeLink.js'
import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default function MuleSoft() {
  return (
    <Layout>
      <Head>
        <title>Hey, tell me about MuleSoft.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-mulesoft">
          <section className="grid-block col section padding-bottom-none hero hero-mulesoft">
            <BackLink />
            <div className="text-container">
              <h1 className="h1">MuleSoft</h1>
              <p className="p">?</p>
            </div>
            <figure className="figure figure-xl img-wrapper img-mulesoft-hero">
              <video
                autoPlay
                className="video"
                height="424"
                loop
                muted
                playsInline
                src=""
                width="840"
              />
            </figure>
          </section>
          <section className="grid-block col section text-container padding-bottom-none padding-top-none">
            <p className="p">When I joined MuleSoft, I had the opportunity to work on its design system. It was loosely organized, and lacked guidance for what it should be. I focused on how a design system could be used to influence MuleSoft’s design sensibilites to the benefit of our users.</p>
            <figure className="grid-block col align-center figure">
              <img className="img img-wrapper no-shadow" src="" height="100" width="100" />
              <figcaption className="figcaption">MuleSoft’s Design System when we started</figcaption>
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
