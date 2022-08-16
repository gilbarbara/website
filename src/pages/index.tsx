import React from 'react';
import { GetServerSidePropsContext } from 'next/types';

import App from '~/App';

export default function Page(): JSX.Element {
  return <App />;
}

Page.getInitialProps = async ({ req }: GetServerSidePropsContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  const isMobile = userAgent?.match(
    /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i,
  );

  return {
    isMobile: !!isMobile,
  };
};
