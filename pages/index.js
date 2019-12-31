import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link'
import Project from '../components/Project.js'
import SubProject from '../components/SubProject.js'

export default class extends React.Component {
  renderProjects = () => {
    return (
      <div className="grid-block section-card-wrapper">
        <section className="section-card section-runnable">
          <Project
            description="Automatically launching full-stack environments for every branch."
            detailsHref="/runnable"
            liveHref="//runnable.com/landing"
            imgSrc="/images/runnable/dockerfile.png"
            title="Runnable"
          />
        </section>
        <section className="section-card section-notorious">
          <Project
            description="API response codes and latency represented in visual and audio form."
            detailsHref="/notoriousapi"
            liveHref="//mulesoft-labs.github.io/notoriousapi/"
            imgSrc="/images/runnable/notorious.png"
            title="Notorious A.P.I."
          />
        </section>
        <section className="section-card section-codesnippets">
          <Project
            description="Complete environments to run and share code in the browser."
            detailsHref="/codesnippets"
            imgSrc="/images/codesnippets.svg"
            title="CodeSnippets"
          />
        </section>
        <section className="section-card section-mulequest">
          <Project
            description="Introducing users to a new product with a game."
            detailsHref="/mulequest"
            imgSrc="/images/mulequest.gif"
            title="MuleQuest"
          />
        </section>
      </div>
    )
  };

  renderSubProjects = () => {
    return (
      <section className="section padding-top-none section-more">
        <ol className="grid-block list section-card-wrapper">
          <li className="grid-block col section-card li">
            <SubProject
              description="A resource for developers learning Docker and containerization."
              imgSrc="/images/slash-docker.svg"
              sourceHref="//github.com/runnable/slash-docker"
              liveHref="//runnable.com/docker/"
              title="/docker"
            />
          </li>
          <li className="grid-block col section-card li">
            <SubProject
              description="Documentation for getting start with, and troubleshooting Runnable."
              imgSrc="/images/file-docs.svg"
              sourceHref="//github.com/runnable/docs"
              liveHref="//runnable.com/docs/"
              title="Runnable Docs"
            />
          </li>
          <li className="grid-block col section-card li">
            <SubProject
              description="A simple way to calculate the CO² cost of a flight."
              imgSrc="/images/co2flights.png"
              sourceHref="//github.com/runnabro/offset"
              liveHref="//ohgodhelp.us/"
              title="CO² Flight Calculator"
            />
          </li>
        </ol>
      </section>
    )
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Hi.</title>
        </Head>
        <main className="grid-block col main main-landing">
          <section className="grid-block justify-center section section-intro">
            <div className="text-container">
              <h1 className="h1 weight-bold">Heya, I’m Tony.</h1>
              <h1 className="h1 weight-bold">I work on <strong className="the-web"><span className="span" data-text="the web">the web</span></strong> & here’s some of what I’ve been up to:</h1>
            </div>
          </section>
          {this.renderProjects()}
          {this.renderSubProjects()}
          <footer className="grid-block justify-center footer">
            <a className="link-icon" href="//github.com/runnabro/">
              <svg className="svg">
                <use href="#github" />
              </svg>
            </a>
          </footer>
        </main>
      </Layout>
    )
  }
}