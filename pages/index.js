import localFont from '@next/font/local'
import Tippy from '@tippyjs/react';

import Head from 'next/head'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react';

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
    href: '//readme.com',
    label: 'ReadMe',
    src: '/readme.png',
  },
  {
    alt: 'MuleSoft’s Muley',
    href: '//mulesoft.com',
    label: 'MuleSoft',
    src: '/mulesoft.png',
  },
  {
    alt: 'Runnable’s bear',
    href: '//runnable.com/landing',
    label: 'Runnable',
    src: '/runnable.png',
  },
]

const HomeWork = () => {
  return (
    <ol className={styles['HomeWork']}>
      {work.map(({ alt, href, label, src }) => (
        <li key={src}>
          <Tippy
            arrow={false}
            content={
              <>
                {label}
                <ArrowUpRight className="tippy-link" size={14} />
              </>
            }
            placement="bottom"
          >
            <a className={styles['HomeWork-link']} href={href} rel="noopener" target="_blank">
              <Image
                alt={alt}
                height={50}
                priority
                src={src}
                width={50}
              />
            </a>
          </Tippy>
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
