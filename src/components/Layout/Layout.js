import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Script from "next/script";
import CookieConsent from "react-cookie-consent";
import StickyHeader from "../StickyHeader/StickyHeader";
import Footer from "../Footer/Footer";

export default function Layout({ children, theme='light' }) {
  return (
    <div className="layout">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
      </Head>

      <Script src="/js/analytics/scripts.js" />

      <StickyHeader
        backgroundColor={theme === "dark" ? "#052C39" : "#FDFBF4"}
        theme={theme}
      />
      <div>{children}</div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Je comprends"
        style={{ background: "#2B373B", zIndex: "1000001" }}
        buttonStyle={{
          background: "#2a9d8f",
          color: "#FFF",
          fontSize: "14px",
          borderRadius: "5px",
        }}
      >
        <div className="text-center" style={{ fontSize: "14px" }}>
          Casapulse utilise des cookies pour personnaliser le contenu de la
          plateforme, et analyser le trafic.
        </div>
      </CookieConsent>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string,
};
