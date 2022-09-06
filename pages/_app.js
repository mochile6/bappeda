import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import Layout from "../comps/Layout";
import store from "../store";
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
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
