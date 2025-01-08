import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Button from "@components/global/Button";
import { mobileQuery, tabletQuery } from "@styles/mediaQueries";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        autoAlpha: 0,
        scaleY: 1.5,
      },
      {
        autoAlpha: 1,
        scaleY: 1,
        duration: 1.8,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>About • Joe Cooper</title>
      </Head>
      <Main>
        <Container ref={containerRef}>
          <CopyContainer>
            <h1>About</h1>
            <p>
              I'm a web developer slash creative technologist who wants to build
              neat things. I love performant animations, sensible code, page
              transitions, accessible content, and apps with juuuust the right
              amount of zhoosh.
            </p>
            <p>
              I'll try to keep the backstory brief: I’ve been dabbling in web
              design since I was 11, during the halcyon days of{" "}
              <a href="https://en.wikipedia.org/wiki/AOLpress" target="_blank">
                AOLPress
              </a>
              . I began offering web design and development services
              professionally to clients in 2014 and broadened my horizons to
              include visual design of all kinds. I’m passionate about social
              justice and spent my early career working at{" "}
              <a href="https://www.cases.org/" target="_blank">
                CASES
              </a>
              , where I became the Associate Director of Communications &
              Design. After that, I've worked at{" "}
              <a href="https://www.madwell.com" target="_blank">
                Madwell
              </a>
              , a Brooklyn-based creative agency where I worked as a Front End
              Developer before becoming a Senior Developer. After that, I spent
              some time working with the brilliant folks at{" "}
              <a href="https://www.oddcommon.com/" target="_blank">
                OddCommon
              </a>
              as a Senior Developer and a Technical Lead. These days, I'm back
              at Madwell as the Director of Software Engineering.
            </p>
            <p>
              In addition to anything web tech, I also enjoy record and tape
              collecting, emulating old Nintendo games, grilling burgers, and
              rooting for the Buffalo Bills.
            </p>
            <Button href="/work" arrow>
              my work
            </Button>
          </CopyContainer>
          <AwardsContainer>
            <h2>Awards & Recognition</h2>
            <h3>Webby Awards</h3>
            <p>3x Winner</p>
            <ul>
              <li>What Is Missing? - Activism (2023)</li>
              <li>What Is Missing? - Best Navigation/Structure (2023)</li>
              <li>What Is Missing? - Activism (2024)</li>
            </ul>
            <p>3x Nominee</p>
            <ul>
              <li>
                Snapchat Agency (Ad)venture - Game or Application Advertising
                (2024)
              </li>
              <li>Snapchat Agency (Ad)venture - B2B Advertising (2024)</li>
              <li>
                Exo Iris - Best Use of Animation or Motion Graphics Websites and
                Mobile Sites (2024)
              </li>
            </ul>
            <h3>Awwwards</h3>
            <p>2x SOTD</p>
            <ul className="no-mb">
              <li>Snapchat Agency (Ad)venture</li>
              <li>Borderless VR</li>
            </ul>
            <p>2x Developer Award</p>
            <ul>
              <li>Snapchat Agency (Ad)venture</li>
              <li>Borderless VR</li>
            </ul>
            <h3>The FWA</h3>
            <p>3x SOTD</p>
            <ul>
              <li>Snapchat Agency (Ad)venture</li>
              <li>What Is Missing?</li>
              <li>Borderless VR</li>
            </ul>
            <h3>The Shorty Awards</h3>
            <ul className="add-mt">
              <li>
                Match Group x Visible Singles Registry - Winner in Micro-site
                (2023)
              </li>
              <li>
                Visible Unlimited Eyebrowsing - Finalist in Micro-site (2021){" "}
              </li>
            </ul>
          </AwardsContainer>
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  background: var(--white);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px var(--side-padding);
  min-height: 100%;
  box-sizing: border-box;

  @media ${mobileQuery} {
    min-height: unset;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 450px 450px;
  gap: 250px;
  visibility: hidden;

  @media ${tabletQuery} {
    display: flex;
    flex-flow: column nowrap;
    gap: 80px;
  }
`;

const CopyContainer = styled.article`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  background: var(--white);
  padding-bottom: 40px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 3.6rem;
    font-family: var(--header-font);
    color: var(--blue);

    @media ${mobileQuery} {
      font-size: 3.2rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 0 18px;

    &:last-of-type {
      margin-bottom: 4rem;
    }

    a {
      margin-top: 2rem;
    }
  }
`;

const AwardsContainer = styled.div`
  h2 {
    font-size: 2.8rem;
    font-family: var(--header-font);
    color: var(--blue);
    margin-bottom: 3.6rem;

    @media ${mobileQuery} {
      font-size: 3.2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    color: var(--blue);
    margin-bottom: 0;
  }

  p,
  ul {
    font-size: 1.4rem;
  }

  p {
    margin: 1.2rem 0 0;
    font-weight: 600;
    line-height: 1.5;
  }

  ul {
    margin-top: 0;
    padding: 0;
    list-style-type: none;
    margin-bottom: 3.6rem;

    &.add-mt {
      margin-top: 1.2rem;
    }

    &.no-mb {
      margin-bottom: 1.8rem;
    }
  }

  li {
    line-height: 1.6;
  }
`;
