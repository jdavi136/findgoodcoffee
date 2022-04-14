import Head from "next/head";
import Script from "next/script";
import React from "react";

import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Find Good Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="Find Good Cofee" />
        <meta name="description" content="Find local, top-rated coffee shops" />
        <meta name="keywords" content="coffee,search,find,cafe,local" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.findgood.coffee" />
        <meta
          property="og:title"
          content="Find Good Coffee - Find local, top-rated coffee shops"
        />
        <meta
          property="og:description"
          content="Find local, top-rated coffee shops"
        />

        <meta name="theme-color" content="brown" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.findgood.coffee/" />
        <meta
          property="twitter:title"
          content="Find Good Coffee - Find local, top-rated coffee shops"
        />
        <meta
          property="twitter:description"
          content="Find local, top-rated coffee shops"
        />

        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          crossOrigin="anonymous"
        />

        <link
          rel="document"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Header />
      <section id="home" className="flex bg-back">
        <div className="flex relative justify-center w-1/2 text-center text-brown-100 text-8xl mt-8">
          LET US DO THE HARD WORK.
        </div>
        <div className="flex relative justify-center w-1/2 mt-14 mb-28">
          <div className="max-w-4xl m-4 mb-6">
            <h1 className="text-4xl text-center text-brown-100 mb-6">
              <span>SEARCH FOR </span>
              <span className="font-semibold">TOP-RATED, </span>
              <span className="text-brown-600">COFFEE </span>
              <span>SHOPS NEARBY</span>
            </h1>
            <div className="mx-12 mb-4">
              <SearchBox />
            </div>
            <h4 className="text-center text-brown-100">
              WE FILTER OUT LARGE CORPORATIONS AND REVEAL THE BEST LOCAL CAFES
            </h4>
          </div>
        </div>
      </section>
      <section id="about" className="flex bg-back">

      </section>
    </div>
  );
}
