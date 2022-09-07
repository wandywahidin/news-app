import "../styles/globals.css";
import { Provider } from "react-redux";

import { wrapper } from "../features/store";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default wrapper.withRedux(MyApp);
