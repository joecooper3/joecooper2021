import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import gsap from "gsap";

import { exitAnimArgs, exitAnimation } from "@animations/homepage";
import Button from "@components/global/Button";
import ChainShapes from "@components/home/ChainShapes";
import Logo from "@components/home/Logo";
import { useStore } from "@store/store";
import { smDesktopQuery, mobileQuery, tabletQuery } from "@styles/mediaQueries";

export default function Home() {
  const [exitAnimArgs, setExitAnimArgs] = useState<exitAnimArgs | null>(null);

  const router = useRouter();
  const deviceSize = useStore((state) => state.deviceSize);
  const isDesktop = useStore((state) => state.isDesktop);
  const engine = useStore((state) => state.matterEngine);
  const ropeArr = useStore((state) => state.ropes);
  const wall = useStore((state) => state.wall);
  const changeHomeLogo = useStore((state) => state.changeHomeLogo);
  const changeHomeSubCopy = useStore((state) => state.changeHomeSubCopy);
  const changeHomeButtonContainer = useStore(
    (state) => state.changeHomeButtonContainer
  );
  const changeHomeMobileWall = useStore((state) => state.changeHomeMobileWall);

  const logo = useRef<HTMLHeadingElement>(null);
  const subCopy = useRef<HTMLParagraphElement>(null);
  const buttonContainer = useRef<HTMLDivElement>(null);
  const mobileWall = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeHomeLogo(logo.current);
  }, [logo.current]);
  useEffect(() => {
    changeHomeSubCopy(subCopy.current);
  }, [subCopy.current]);
  useEffect(() => {
    changeHomeButtonContainer(buttonContainer.current);
  }, [buttonContainer.current]);
  useEffect(() => {
    changeHomeMobileWall(mobileWall.current);
  }, [mobileWall.current]);

  useEffect(() => {
    setExitAnimArgs({
      router: router,
      ropeArr: ropeArr,
      wall: wall,
      engine: engine,
      logo: logo.current,
      subCopy: subCopy.current,
      buttonContainer: buttonContainer.current,
      mobileWall: mobileWall.current,
    });
  }, [
    deviceSize,
    router,
    ropeArr,
    wall,
    engine,
    logo,
    subCopy,
    buttonContainer,
    mobileWall,
  ]);

  useLayoutEffect(() => {
    const q = gsap.utils.selector(subCopy.current);
    console.log('q(".copy-line"):', q(".copy-line"));
    gsap.to(q(".copy-line"), {
      opacity: 1,
      y: 0,
      stagger: 0.45,
      duration: 0.8,
      delay: isDesktop ? 2.5 : 1.75,
    });
  }, [deviceSize]);

  useLayoutEffect(() => {
    // const q = gsap.utils.selector(buttonContainer.current);
    gsap.to(buttonContainer.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: isDesktop ? 4.1 : 3.3,
    });
  }, [deviceSize]);

  return (
    <>
      <Head>
        <title>Joe Cooper • Web Developer & Creative Technologist</title>
        <meta
          name="description"
          content="Joe Cooper is a New York-based web developer and creative
          technologist."
        />
      </Head>

      <HomeMain>
        {isDesktop && <ChainShapes isSmDesktop={deviceSize === "smDesktop"} />}
        <CopyContainer>
          {deviceSize !== null && (
            <Logo ref={logo} animDelay={isDesktop ? 1 : 0.25} />
          )}
          <SubCopy ref={subCopy}>
            {deviceSize !== null && (
              <>
                <CopyLine className="copy-line">
                  <span className="sr-only">Joe Cooper </span>is a New
                  York-based
                </CopyLine>
                <CopyLine className="copy-line">web developer and</CopyLine>
                <CopyLine className="copy-line">
                  creative technologist.
                </CopyLine>
                <noscript>
                  Joe Cooper is a New York-based web developer and creative
                  technologist.
                </noscript>
              </>
            )}
          </SubCopy>
          {deviceSize !== null && (
              <ButtonContainer ref={buttonContainer}>
                <Button
                  onClick={async () => exitAnimation("/about", exitAnimArgs)}
                  arrow
                  responsiveHeight
                >
                  About
                </Button>
                <Button
                  onClick={async () => exitAnimation("/work", exitAnimArgs)}
                  arrow
                  responsiveHeight
                >
                  Work
                </Button>
              </ButtonContainer>
          )}
        </CopyContainer>
        <MobileWall ref={mobileWall} />
      </HomeMain>
    </>
  );
}

const HomeMain = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 86.8vw;
  margin: 0 auto;
  overflow: hidden;
  @media ${tabletQuery} {
    position: relative;
    max-height: -webkit-fill-available;
    overflow: hidden;
    min-height: -webkit-fill-available;
    max-width: 100%;
    padding: 0 45px;
    box-sizing: border-box;
  }
  @media ${mobileQuery} {
    grid-template-columns: 1fr;
    padding: 0 22px;
  }
`;

const CopyContainer = styled.div`
  grid-column: 2;
  justify-self: end;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: 84vh;
  text-align: right;
  margin-right: 60px;
  z-index: 2;
  pointer-events: none;

  @media ${smDesktopQuery} {
    margin-right: 0;
  }

  @media ${mobileQuery} {
    margin-right: 0;
    overflow: auto;
  }
`;

const SubCopy = styled.p`
  font-family: var(--header-font);
  color: var(--blue);
  font-size: 4.26vh;
  margin: 3.9vh 0 6.8vh;
  z-index: 2;

  @media ${mobileQuery} {
    font-size: 25px;
  }
`;

const CopyLine = styled.span`
  display: block;
  opacity: 0;
  transform: translateY(30px);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  pointer-events: auto;
  opacity: 0;
  transform: translateY(30px);

  a:first-child,
  button:first-child {
    margin-right: 2.73vh;
  }
`;

const MobileWall = styled.div`
  display: none;
  @media ${tabletQuery} {
    display: block;
    background: var(--white);
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 100vh;
  }
`;
