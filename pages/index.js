import Head from 'next/head';
import LayoutHoc from '../hoc/Layout';
import {HomePage} from '../components';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Dashboard - Crypto Verse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <LayoutHoc>
          <HomePage />
       </LayoutHoc>
    </>
  )
}

