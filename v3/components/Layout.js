import Head from 'next/head'
import Icons from './Icons.js'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      {props.children}
      <SpeedInsights/>
      <Icons />
    </>
  )
}
