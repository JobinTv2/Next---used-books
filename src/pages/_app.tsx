import React from 'react';
import { AppProps } from 'next/app';
import { AppValueProvider } from '../context/appContext';
import { BooksValueProvider } from '../context/bookContext';
import { Header } from '../components/3-organisms/Header';
import { Footer } from '../components/3-organisms/Footer';
import { GlobalStyles } from 'twin.macro';
import '../App.css';
import 'antd/dist/antd.min.css';
import '../styles/global.css';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppValueProvider>
      <GlobalStyles />
      <BooksValueProvider>
        <Header />
        <Component {...pageProps}></Component>
        <Footer />
      </BooksValueProvider>
    </AppValueProvider>
  );
}

export default MyApp;
