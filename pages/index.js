import './../css/index.scss'
import Head from 'next/head';
import Layout from '../components/layout.js'
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Hi.</title>
      </Head>
      <main className="grid-block col main main-landing">
        <section className="grid-block justify-center section section-intro">
          <div className="text-container">
            <h1 className="h1 weight-bold">Heya, I’m Tony.</h1>
            <h1 className="h1 weight-bold">I work on <strong className="the-web"><span className="span" data-text="the web">the web</span></strong> & here’s some of what I’ve been up to:</h1>
          </div>
        </section>
        <div className="grid-block section-card-wrapper">
          <section className="section-card section-runnable">
            <h2 className="h2 weight-bold">Runnable</h2>
            <p className="p">Automatically launching full-stack environments for every branch.</p>
            <div className="grid-block margin-top-md btn-wrapper">
              <Link href="/runnable">
                <a className="btn btn-md btn-white">Read Details</a>
              </Link>
              <a className="btn btn-md btn-white-outline" href="//runnable.com/landing"><span className="span">View It Live</span></a>
            </div>
            <img className="img" src="/images/runnable/dockerfile.png" alt="" />
          </section>
          <section className="section-card section-notorious">
            <h2 className="h2 weight-bold">Notorious A.P.I.</h2>
            <p className="p">API response codes and latency represented in visual and audio form.</p>
            <div className="grid-block margin-top-md btn-wrapper">
              <Link href="/notoriousapi">
                <a className="btn btn-md btn-white">Read Details</a>
              </Link>
              <a className="btn btn-md btn-white-outline" href="//mulesoft-labs.github.io/notoriousapi/"><span className="span">View It Live</span></a>
            </div>
          </section>
          <section className="section-card section-codesnippets">
            <h2 className="h2 weight-bold">CodeSnippets</h2>
            <p className="p">Complete environments to run and share code in the browser.</p>
            <div className="grid-block margin-top-md btn-wrapper">
              <Link href="/codesnippets">
                <a className="btn btn-md btn-white"><span className="span">Read Details</span></a>
              </Link>
            </div>
            <img className="img no-shadow" src="/images/codesnippets.svg" alt="" />
          </section>
          <section className="section-card section-mulequest">
            <h2 className="h2 weight-bold">MuleQuest</h2>
            <p className="p">Introducing users to a new product with a game.</p>
            <div className="grid-block margin-top-md btn-wrapper">
              <Link href="/mulequest">
                <a className="btn btn-md btn-white"><span className="span">Read Details</span></a>
              </Link>
            </div>
            <img className="img no-shadow" src="/images/mulequest.gif" alt="" />
          </section>
        </div>
        <section className="section padding-top-none section-more">
          <ol className="grid-block list section-card-wrapper">
            <li className="grid-block col section-card li">
              <img className="margin-bottom-sm" src="/images/slash-docker.svg" height="56" width="70" alt="" />
              <p className="p weight-bold">/docker</p>
              <p className="p">A resource for developers learning Docker and containerization.</p>
              <div className="grid-block shrink margin-top-sm btn-wrapper">
                <a className="btn btn-sm btn-blue-outline" href="//github.com/runnable/slash-docker">View Source</a>
                <a className="btn btn-sm btn-blue-outline" href="//runnable.com/docker/"><span className="span">View It Live</span></a>
              </div>
            </li>
            <li className="grid-block col section-card li">
              <img className="margin-bottom-sm" src="/images/file-docs.svg" height="56" width="70" alt="" />
              <p className="p weight-bold">Runnable Docs</p>
              <p className="p">Documentation for getting start with, and troubleshooting Runnable.</p>
              <div className="grid-block shrink margin-top-sm btn-wrapper">
                <a className="btn btn-sm btn-blue-outline" href="//github.com/runnable/docs">View Source</a>
                <a className="btn btn-sm btn-blue-outline" href="//runnable.com/docs/"><span className="span">View It Live</span></a>
              </div>
            </li>
            <li className="grid-block col section-card li">
              <img className="margin-bottom-sm" src="/images/co2flights.png" height="56" width="70" alt="" />
              <p className="p weight-bold">CO<sup>2</sup> Flight Calculator</p>
              <p className="p">A simple way to calculate the CO<sup>2</sup> cost of a flight.</p>
              <div className="grid-block shrink margin-top-sm btn-wrapper">
                <a className="btn btn-sm btn-blue-outline" href="//github.com/runnabro/offset">View Source</a>
                <a className="btn btn-sm btn-blue-outline" href="//ohgodhelp.us/"><span className="span">View It Live</span></a>
              </div>
            </li>
          </ol>
        </section>
        <footer className="grid-block justify-center footer">
          <a className="link-icon" href="//github.com/runnabro/">
            @@include('images/github.svg')
          </a>
        </footer>
      </main>
    </Layout>
  )
}