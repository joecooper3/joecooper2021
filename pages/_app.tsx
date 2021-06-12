import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

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

function MyApp({ Component, pageProps }) {
  const changeDeviceSize = useStore((state) => state.changeDeviceSize);
  const deviceSize = useStore((state) => state.deviceSize);

  const handleWindowSizeChange = () => {
    if (window.innerWidth > smDesktopBreakpoint && deviceSize !== "lgDesktop") {
      changeDeviceSize("lgDesktop");
    } else if (window.innerWidth > tabletBreakpoint && deviceSize !== "smDesktop") {
      changeDeviceSize("smDesktop")
    } else if (window.innerWidth > mobileBreakpoint && deviceSize !== "tablet") {
      changeDeviceSize("tablet")
    } else if (window.innerWidth <= mobileBreakpoint && deviceSize !== "mobile"){
      changeDeviceSize("mobile")
    }
    
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Cursor /> */}
    </>
  );
}

export default MyApp;
