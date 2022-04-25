import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import AnimationsProvider from "@components/animations/AnimationsProvider";
import Header from "@components/global/Header";
import "../styles/globals.css";

import { useStore } from "@store/store";
import {
  smDesktopBreakpoint,
  tabletBreakpoint,
  mobileBreakpoint,
} from "@styles/mediaQueries";

const Cursor = dynamic(() => import("../components/global/Cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const changeDeviceSize = useStore((state) => state.changeDeviceSize);
  const deviceSize = useStore((state) => state.deviceSize);

  const handleWindowSizeChange = () => {
    if (window.innerWidth > smDesktopBreakpoint && deviceSize !== "lgDesktop") {
      changeDeviceSize("lgDesktop");
    } else if (
      window.innerWidth > tabletBreakpoint &&
      deviceSize !== "smDesktop"
    ) {
      changeDeviceSize("smDesktop");
    } else if (
      window.innerWidth > mobileBreakpoint &&
      deviceSize !== "tablet"
    ) {
      changeDeviceSize("tablet");
    } else if (
      window.innerWidth <= mobileBreakpoint &&
      deviceSize !== "mobile"
    ) {
      changeDeviceSize("mobile");
    }
  };

  useEffect(() => {
    // console.log(router);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Joe Cooper • Web Developer & Creative Technologist</title>
        <meta
          name="description"
          content="Joe Cooper is a New York-based web developer and creative
          technologist."
        />
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
      <Header route={router.route} />
      <AnimationsProvider route={router.route}>
        <Component {...pageProps} />
        {/* <Cursor /> */}
      </AnimationsProvider>
    </>
  );
}

export default MyApp;
