import '../styles/globals.css';

import Head from 'next/head';

import Header from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Katyas website</title>
      </Head>

      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
