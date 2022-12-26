import Head from 'next/head'
import Image from 'next/image'
import localFont from '@next/font/local'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>🖖 Hi.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={garamond.variable}>
        <main className={styles.main}>
          <h1 className={styles.h1}>
            I’m Tony. I do work on the <span className={styles['web']}>web</span> & this is what I’ve done.
          </h1>
        </main>
      </body>
    </>
  )
}
