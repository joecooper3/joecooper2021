import dynamic from "next/dynamic";

import Header from "@components/global/Header";
import "../styles/globals.css";

const Cursor = dynamic(() => import("../components/global/Cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Cursor /> */}
    </>
  );
}

export default MyApp;
