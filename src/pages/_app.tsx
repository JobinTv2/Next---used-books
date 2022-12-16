import React from 'react';
import { AppProps } from 'next/app';
import { AppValueProvider } from '../context/appContext';
import { BooksValueProvider } from '../context/bookContext';
import { Header } from '../components/3-organisms/Header';
import { Footer } from '../components/3-organisms/Footer';

import '../App.css';
import 'antd/dist/antd.min.css';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Component {...pageProps}>
      <AppValueProvider>
        <BooksValueProvider>
          <Header />
          <Footer />
        </BooksValueProvider>
      </AppValueProvider>
    </Component>
  );
}

export default MyApp;
