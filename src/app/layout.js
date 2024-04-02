import "./globals.css";
import localFont from "next/font/local";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Head from "next/head";
import { Metadata } from "next";

const myFont = localFont({ src: "./files/Insanibu.ttf" });

export async function generateMetadata({ params }) {
  return {
    title: "Bird Dog",
    description: "Community builders of Bird Dog",
    icons: {
      icon: "/public/favicon.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
      </Head>
      <body className={myFont.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
