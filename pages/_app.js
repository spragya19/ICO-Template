/* eslint-disable @next/next/no-css-tags */
import Header from '../src/Components/Header'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  </Head>
  <Header />  <Component {...pageProps} />

  </>
}

export default MyApp
