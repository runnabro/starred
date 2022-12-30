import localFont from '@next/font/local'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'

const garamond = localFont({
  src: [{
    path: '../fonts/Garamond.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    path: '../fonts/Garamond-Bold.ttf',
    style: 'normal',
    weight: '700',
  }],
  variable: '--garamond',
});

const work = [
  {
    alt: 'ReadMe’s Owlbert',
    background: '#018ef5',
    href: '//readme.com',
    label: 'ReadMe',
    src: '/readme.png',
    srcBadge: '/readme-badge.svg',
  },
  {
    alt: 'MuleSoft’s Muley',
    background: '#479fda',
    href: '//mulesoft.com',
    label: 'MuleSoft',
    src: '/mulesoft.png',
    srcBadge: '/mulesoft-badge.svg',
  },
  {
    alt: 'Runnable’s bear',
    background: '#c7aecf',
    href: '//runnable.com/landing',
    label: 'Runnable',
    src: '/runnable.png',
    srcBadge: '/runnable-badge.svg',
  },
]

const HomeWork = () => {
  return (
    <ol className={styles['HomeWork']}>
      {work.map(({ alt, background, href, label, src, srcBadge }) => (
        <li key={src}>
          <a className={styles['HomeWork-link']} href={href} rel="noopener" target="_blank">
            <Image
              alt={alt}
              height={50}
              priority
              src={src}
              width={50}
            />
            <Image
              alt={`${label} logo`}
              className={styles['HomeWork-badge']}
              height={20}
              priority
              src={srcBadge}
              style={{ background }}
              width={20}
            />
          </a>
        </li>
      ))}
    </ol>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.Home} ${garamond.variable}`}>
        <h1 className={styles['Home-heading']}>
          I’m Tony. I build for the <span className={styles['Home-heading-web']}>web</span> & this my work, so far.
        </h1>
        <HomeWork />
      </main>
    </>
  )
}
