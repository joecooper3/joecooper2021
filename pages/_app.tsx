import dynamic from "next/dynamic";
import "../styles/globals.css";

const Cursor = dynamic(() => import("../components/global/Cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
