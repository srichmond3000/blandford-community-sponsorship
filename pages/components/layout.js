import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, title = 'Default title' }) {
  return (
    <>
      <Head></Head>
      <header>
        <Header></Header>
      </header>
      {children}
      <Footer></Footer>
    </>
  );
}
