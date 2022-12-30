import BackLink from '../../components/BackLink.js'
import HomeLink from '../../components/HomeLink.js'
import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default function Runnable() {
  return (
    <Layout>
      <Head>
        <title>Hey, tell me about Runnable.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-runnable">
          <section className="section padding-bottom-none hero hero-runnable">
            <BackLink />
            <div className="text-container">
              <h1 className="h1">Runnable</h1>
              <p className="p">Environments that fit your developer workflow. Featured on <a className="link" href="//nicelydone.club/products/runnable/"><span className="span">Nicely done</span></a>. Designed with Sass, Angular, and Pug.</p>
              <a className="btn btn-md btn-white" href="//runnable.com/landing"><span className="span">View It Live</span></a>
            </div>
            <figure className="figure figure-xl img-wrapper img-marketing">
              <img className="img" src="/images/runnable/howitworks.png" height="416" width="840" />
            </figure>
          </section>
          <section className="grid-block col section padding-top-none section-marketing">
            <div className="text-container">
              <h2 className="h2">First Impressions</h2>
              <p className="p">Before getting to use the product, everyone starts on the marketing page. It’s one of the best opportunities we have to convince you to give our product a shot. My team pushed me to develop my skills in copywriting, illustration, and Javascript. Our marketing pages were built similarly to our product and we made changes often to reflect the changes to our product.</p>
            </div>
            <figure className="grid-block align-center justify-center figures-marketing">
              <img className="img no-shadow" src="/images/runnable/marketing-icons.png" height="325" width="300" />
              <img className="img no-shadow" src="/images/runnable/marketing-menu.png" height="285" width="300" />
            </figure>
          </section>
          <section className="section section-blog padding-top-none">
            <figure className="grid-block justify-center figure figure-xl figure-blog">
              <img className="img no-shadow" src="/images/runnable/blog-1.png" height="254" width="200" />
              <img className="img no-shadow" src="/images/runnable/blog-email.png" height="522" width="250" />
              <img className="img no-shadow" src="/images/runnable/blog-2.png" height="254" width="200" />
            </figure>
            <div className="text-container">
              <h2 className="h2">The Runnable Blog</h2>
              <p className="p">Building <a className="link" href="//runnable.com/blog"><span className="span">our blog</span></a> was a new challenge for me. Working with our engineers to write posts helped me realize how important writing is in the products we design. When looking at the tone of what we’ve written to users, I’ve learned to ask myself how our users are feeling; “Are you eager to get started now, or are you feeling frustrated?”.</p>
            </div>
          </section>
          <section className="grid-block col section padding-bottom-none">
            <div className="text-container">
              <h2 className="h2">An Easier Way to Containerize Apps</h2>
              <p className="p">We needed users to use Docker, but when we were getting started we found that most everyone was new to writing Dockerfiles. Every application needed a Dockerfile that defined the configuration for their environment. In one of our earliest versions of our set up flow, we exposed the Dockerfile directly to users and provided basic syntax validation.</p>
            </div>
            <figure className="grid-block col shrink figure figure-xl">
              <div className="img-wrapper img-simple-mode">
                <img className="img" src="/images/runnable/simple-configuration-v1.png" width="500" />
              </div>
            </figure>
            <div className="text-container">
              <p className="p">Basic validation was not enough for users to make it to running their projects. We learned that our most successful users were doing well when they had working Dockerfiles that our team was able to build with them.</p>
            </div>
            <figure className="grid-block col shrink figure figure-xl">
              <div className="img-wrapper img-simple-mode">
                <img className="img" src="/images/runnable/simple-configuration-v2.png" width="500" />
              </div>
            </figure>
            <div className="text-container">
              <p className="p">We took the knowledge that our team learned from helping other orgs make Dockerfiles to build a guided flow. Users would be able to describe their application to us, so we could generate a Dockerfile for them.</p>
            </div>
            <figure className="grid-block col shrink figure figure-xl">
              <div className="img-wrapper img-simple-mode">
                <img className="img" src="/images/runnable/simple-configuration.png" height="461" width="800" />
              </div>
            </figure>
          </section>
          <section className="grid-block align-center section section-slash-docker padding-bottom-none padding-top-none">
            <figure className="grid-block shrink col align-center figure img-wrapper">
              <img className="img" src="/images/runnable/slash-docker.png" width="250" />
            </figure>
            <div className="grid-block col text-container">
              <h2 className="h2">/docker</h2>
              <p className="p">We started a <a className="link" href="//runnable.com/docker/"><span className="span">Docker resource</span></a> to help developers new to Docker. I worked with one of our PMs to design and build the site for the articles we were planning. We choose to use Jekyll because we needed an easy way to write and edit articles in Markdown; and it worked out so well, we ended up forking the project for our <a className="link" href="//runnable.com/docs"><span className="span">docs</span></a> and <a className="link" href="//runnable.com/blog"><span className="span">blog</span></a>.</p>
            </div>
          </section>
          <section className="grid-block section section-callout section-dockerfile">
            <div className="text-container">
              <h2 className="h2">The Dockerfile</h2>
              <p className="p">Users could manage their Dockerfile in their repository and we would relaunch environments when they made changes on GitHub.</p>
            </div>
            <div className="img-dockerfile">
              <img className="img" src="/images/runnable/dockerfile.png" height="485" width="880" />
            </div>
          </section>
          <section className="grid-block align-center col section section-branches">
            <div className="grid-block align-center section-callout">
              <div className="grid-block col text-container">
                <h2 className="h2">Workflow Oriented Design</h2>
                <p className="p">Most continuous development tools presented code by build number, but that made it hard to identify what you’re running or testing. We choose to build code by branches, mirroring our user’s existing workflow.</p>
              </div>
              <figure className="grid-block shrink col align-center figure">
                <img className="img img-branches no-shadow" src="/images/runnable/branch-environments.png" height="209" width="300" />
                <figcaption className="figcaption">Onboarding users to branch based environments.</figcaption>
              </figure>
            </div>
            <figure className="grid-block shrink col align-center figure">
              <img className="img no-shadow" src="/images/runnable/onboarding.png" width="330" />
            </figure>
            <div className="text-container">
              <p className="p">We extended our user philosophy to our onboarding strategy by using real GitHub projects to demo the value we add to developers.</p>
            </div>
          </section>
          <section className="grid-block col section padding-bottom-none section-integrations">
            <div className="text-container">
              <h2 className="h2">Deeper Workflow Integration</h2>
              <p className="p">We wanted to bring environments to the tools teams already use. If users choose to manage their Dockerfile in their repo, project collaborators could use Runnable without ever using our app. Those same environments can be exposed to PMs and QA teams in Jira and Slack integrations too.</p>
            </div>
            <div className="grid-block justify-center figures">
              <figure className="grid-block col shrink figure">
                <div className="img-wrapper img-pr">
                  <img className="img" src="/images/runnable/github-integration.png" height="280" width="520" />
                </div>
                <figcaption className="figcaption">“Runnabot” making it easy for developers to access their environments.</figcaption>
              </figure>
              <figure className="grid-block col shrink figure">
                <div className="img-wrapper img-jira">
                  <img className="img" src="/images/runnable/jira-integration.png" height="273" width="300" />
                </div>
                <figcaption className="figcaption">A test of our Jira integration.</figcaption>
              </figure>
            </div>
            <p className="text-container p">If your tests failed or something went wrong you can access logs and options to manage or configure your environments in Runnable.</p>
            <figure className="grid-block col shrink figure figure-xxl figure-app">
              <div className="img-wrapper img-app">
                <img className="img" src="/images/runnable/in-app-view.png" height="512" width="920" />
              </div>
            </figure>
          </section>
          <section className="grid-block col section margin-top-none">
            <p className="text-container p">
              Thanks for reading! Runnable has since <a className="link" href="//runnable.com"><span className="span">been acquired</span></a>, so we were able to make the source for our <a className="link" href="//github.com/codenow/runnable.com"><span className="span">marketing pages</span></a> and <a className="link" href="//github.com/codenow/runnable-angular"><span className="span">product</span></a> public.
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
