/* eslint-disable no-unused-vars */
import '../styles/globals.scss';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import React from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Fallback } from '@/components/Fallback';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ErrorBoundary fallback={<Fallback />}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
export default wrapper.withRedux(MyApp);
