import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Tween } from "react-gsap";

import Button from "@components/global/Button";
import ChainShapes from "@components/home/ChainShapes";
import Logo from "@components/home/Logo";
import { smDesktopQuery, mobileQuery, tabletQuery } from "@styles/mediaQueries";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const [isSmDesktop, setSmDesktop] = useState(false);
  function handleWindowSizeChange() {
    if (window.innerWidth > 1200) {
      setIsMobile(false);
      setSmDesktop(false);
    } else if (window.innerWidth > 768) {
      setIsMobile(false);
      setSmDesktop(true);
    }
    else {
      setIsMobile(true);
      setSmDesktop(false);
    }
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Joe Cooper</title>
        <meta
          name="description"
          content="Joe Cooper is a creative technologist in the New York City area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {!isMobile && <ChainShapes isSmDesktop={isSmDesktop} />}
        <CopyContainer>
          <Logo />
          <SubCopy>
            <Tween to={{ y: 0, opacity: 1 }} stagger={0.45} delay={2.5}>
              <CopyLine>
                <span className="sr-only">Joe Cooper </span>is a New York-based
              </CopyLine>
              <CopyLine>web developer and</CopyLine>
              <CopyLine>creative technologist.</CopyLine>
              <noscript>
                Joe Cooper is a New York-based web developer and creative
                technologist.
              </noscript>
            </Tween>
          </SubCopy>
          <Tween to={{ y: 0, opacity: 1 }} delay={4.2}>
            <ButtonContainer>
              <Button href="/work" arrow responsiveHeight>
                Work
              </Button>
              <Button arrow responsiveHeight>
                About
              </Button>
            </ButtonContainer>
          </Tween>
        </CopyContainer>
      </Main>
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 86.8vw;
  margin: 0 auto;
  overflow: hidden;
  @media ${tabletQuery} {
    height: 100%;
    overflow: auto;
    min-height: -webkit-fill-available;
  }
  @media ${mobileQuery} {
    grid-template-columns: 1fr;
    max-width: calc(100vw - 44px);
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
