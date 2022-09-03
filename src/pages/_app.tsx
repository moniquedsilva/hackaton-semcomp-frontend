import { GlobalStyles } from '@styles/defaultStyles/globalStyles';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Boilerplate VOID</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Boilerplate VOID" />
        <meta
          name="description"
          content="Um boilerplate criado com nextjs, typescript, stitches, pwa e muito mais"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
