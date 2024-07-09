import Layout from "../comps/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  {
    /* The Footer and the header has been wrapped around this conponent from the Layout.js file. this enables the it to be rendered on all pages. */
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
