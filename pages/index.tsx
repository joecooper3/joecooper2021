import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Tween } from "react-gsap";

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

  return (
    <>
      <Head>
        <title>Joe Cooper</title>
        <meta
          name="description"
          content="Joe Cooper is a creative technologist in the New York City area"
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
              <Tween
                to={{ y: 0, opacity: 1 }}
                stagger={0.45}
                delay={isDesktop ? 2.5 : 1.75}
              >
                <CopyLine>
                  <span className="sr-only">Joe Cooper </span>is a New
                  York-based
                </CopyLine>
                <CopyLine>web developer and</CopyLine>
                <CopyLine>creative technologist.</CopyLine>
                <noscript>
                  Joe Cooper is a New York-based web developer and creative
                  technologist.
                </noscript>
              </Tween>
            )}
          </SubCopy>
          {deviceSize !== null && (
            <Tween to={{ y: 0, opacity: 1 }} delay={isDesktop ? 4.2 : 3.5}>
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
            </Tween>
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
