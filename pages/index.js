import localFont from '@next/font/local';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Tippy from '@tippyjs/react';

import styles from '../styles/Home.module.scss';

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
    src: '/readme-owl.png',
    srcBadge: '/readme-badge.svg',
  },
  {
    alt: 'Salesforce’s Saasy',
    background: '#fff',
    border: true,
    href: '//salesforce.com',
    label: 'Salesforce',
    src: '/salesforce.png',
    srcBadge: '/salesforce-badge.svg',
  },
  {
    alt: 'MuleSoft’s Muley',
    background: '#479fda',
    href: '//mulesoft.com',
    label: 'MuleSoft',
    src: '/mulesoft-mule.png',
    srcBadge: '/mulesoft-badge.svg',
  },
  {
    alt: 'Runnable’s bear',
    background: '#c7aecf',
    href: '//runnable.com/landing',
    label: 'Runnable',
    src: '/runnable-bear.png',
    srcBadge: '/runnable-badge.svg',
  },
];

const HomeWork = () => {
  return (
    <ol className={styles['HomeWork']}>
      {work.map(({ alt, background, border, href, label, src, srcBadge }) => (
        <li key={src}>
          <Tippy
            content={
              <>
                {label}
                <ArrowUpRight className={styles['HomeWork-arrow']} size={12} />
              </>
            }
            placement="bottom"
          >
            <a className={styles['HomeWork-link']} href={href} rel="noopener" target="_blank">
              <Image
                alt={alt}
                height={70}
                priority
                src={src}
                width={70}
              />
              <Image
                alt={`${label} logo`}
                className={`${styles['HomeWork-badge']} ${styles['HomeWork-badge_border']}`}
                height={25}
                priority
                src={srcBadge}
                style={{ background }}
                width={25}
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
          I’m Tony. I build for the <span className={styles['Home-heading-web']}>web</span> & this my journey, so far.
        </h1>
        <HomeWork />
      </main>
    </>
  );
};
