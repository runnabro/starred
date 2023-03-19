import localFont from '@next/font/local';

import '../styles/globals.scss';

const Garamond = localFont({
  src: [{
    path: '../fonts/Garamond.woff2',
    style: 'normal',
    weight: '400',
  },
  {
    path: '../fonts/Garamond-Bold.woff2',
    style: 'normal',
    weight: '700',
  }],
  variable: '--garamond',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
      {`
        :root {
          --garamond: ${Garamond.style.fontFamily}, MS Serif, New York, serif;
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  );
};
