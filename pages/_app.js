import Layout from "../comps/Layout";
import React, { useEffect } from 'react';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
