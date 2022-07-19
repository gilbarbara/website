import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { PageProps } from 'types';

import GlobalStyles from '../components/GlobalStyles';
import { AppProvider } from '../modules/context';
import { theme } from '../modules/theme';

function Dev({ Component, pageProps }: AppProps): JSX.Element {
  const pageDescription =
    'A software engineer with over 30 years of experience and a solid background in web development, microservices, and APIs.';
  const pageTitle = 'Gil Barbara';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content="https://gilbarbara.dev/" property="og:url" />
        <meta content="https://files.gilbarbara.dev/media/share-image-v1.png" property="og:image" />
        <meta content="website" property="og:type" />
        <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/icons/favicon.ico" rel="icon" />
        <meta
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider initialState={pageProps as PageProps}>
          <Component />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default Dev;
