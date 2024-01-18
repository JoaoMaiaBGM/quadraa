import Head from "next/head";

import { Header } from "components/Header";
import { ContactInformation } from "components/ContactInformation";
import { Faq } from "components/Faq";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Quadra A</title>
        <meta name="description" content="A contact page for Quadra A app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicons/android-chrome-192x192.ico" />
      </Head>
      <Header size="large" dark="active" />
      <main className="main">
        <ContactInformation />
        <Faq />
      </main>
    </>
  );
}
