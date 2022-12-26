import BackLink from '../../components/BackLink.js'
import HomeLink from '../../components/HomeLink.js'
import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default function CodeSnippets() {
  return (
    <Layout>
      <Head>
        <title>Hey, tell me about CodeSnippets.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-codesnippets">
          <section className="grid-block col section padding-bottom-none hero hero-codesnippets">
            <BackLink />
            <div className="text-container">
              <h1 className="h1">Code<wbr />Snippets</h1>
              <p className="p">Environments to run and share your code with. Designed with Sass, Backbone.js, & Handlebars.</p>
            </div>
            <figure className="figure figure-xl img-wrapper img-codesnippets-hero">
              <video
                autoPlay
                className="video"
                height="483"
                loop
                muted
                playsInline
                src="/images/codesnippets/new-code-hero.mp4"
                width="800"
              />
            </figure>
          </section>
          <section className="grid-block col section text-container padding-bottom-none padding-top-none">
            <p className="p">When I joined the team, we were already building a platform for developers to run their code.</p>
            <h2 className="h2">A New Homepage</h2>
            <p className="p">Our homepage was focused on showing users what type of code they could run. After we built up regular returning user base, we wanted to incentivize users to continue to create new content. We wanted to build the smoothest path to creating content and showcase that content right on the homepage.</p>
            <figure className="grid-block col align-center figure figure-oldsnippets">
              <img className="img img-wrapper" src="/images/codesnippets/old-home.png" height="403" width="450" />
              <figcaption className="figcaption">Our homepage when starting the project.</figcaption>
            </figure>
          </section>
          <section className="grid-block section section-callout section-hero">
            <div className="text-container">
              <h2 className="h2">Creating Content</h2>
              <p className="p">Rhe only path to creating a code example was with the “Create” button in the header. And users would see what languages were supported after starting the create flow.</p>
              <p className="p">We put the languages we supported in the hero. Users could tap on the one they were interested in and start writing code right away.</p>
            </div>
            <img className="img no-shadow" src="/images/codesnippets/new-hero.png" height="444" width="550" />
          </section>
          <section className="grid-block col section padding-bottom-none">
            <div className="text-container">
              <h2 className="h2">Keeping Users Engaged</h2>
              <p className="p">Code examples were not easy to find. We wanted code creators to have their content recognized, and our consumers to feel the code they were looking at was always revolving.</p>
              <p className="p">We built a feed on the homepage to showcase new code and designed pages that were automatically generated for user selected tags.</p>
            </div>
            <figure className="grid-block col shrink figure figure-xl figure-nodejs">
              <div className="img-wrapper img-nodejs">
                <img className="img" src="/images/codesnippets/tag-page.png" height="484" width="760" />
              </div>
            </figure>
          </section>
          <section className="grid-block section padding-bottom-none section-callout section-profiles">
            <div className="text-container">
              <h2 className="h2">Creator Recognition</h2>
              <div className="grid-block align-center">
                <img className="img no-shadow img-profile-widget" src="/images/codesnippets/profile-small.png" height="70" width="200" />
              </div>
              <p className="p">To further encourage content creators, we added user profiles to give them visibility throughout CodeSnippets. Users were able to use their profile to track their current code snippets and drafts of their code before publishing.</p>
            </div>
            <div className="img-profile">
              <img className="img no-shadow" src="/images/codesnippets/profile-big.png" height="467" width="300" />
            </div>
          </section>
          <section className="grid-block section section-callout section-runoptions">
            <img className="img no-shadow img-runoptions" src="/images/codesnippets/runoptions.gif" height="307" width="300" />
            <div className="text-container">
              <h2 className="h2">Build & Runtime</h2>
              <p className="p">One of the unique features of CodeSnippets is that users have access to their environment through a web terminal. Later, we gave users more control of their environments by exposing the configuration of their environments.</p>
            </div>
          </section>
          <section className="grid-block col section section-mobile">
            <div className="text-container">
              <h2 className="h2">Mobile Refactoring</h2>
              <p className="p">When we started, CodeSnippets was not a responsive webapp even though user base was at ~30% mobile users (it’s even higher today). While working on the product, I gradually rewrote our front-end to be more semantic, accessible, and responsive.</p>
            </div>
            <figure className="grid-block figure figure-xl figure-mobile">
              <img className="img no-shadow" src="/images/codesnippets/mobile/screenie-1.png" height="529" width="253" />
              <img className="img no-shadow" src="/images/codesnippets/mobile/screenie-2.png" height="529" width="253" />
              <img className="img no-shadow" src="/images/codesnippets/mobile/screenie-3.png" height="529" width="253" />
            </figure>
          </section>
          <section className="grid-block col section padding-top-none">
            <p className="text-container p">
              Thanks for reading. Runnable has since been acquired. We’ve open sourced <a className="link" href="//github.com/codenow/runnable-web"><span className="span">our code</span></a> and CodeSnippets has been shutdown. 🙁
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
