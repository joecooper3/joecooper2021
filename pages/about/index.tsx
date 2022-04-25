import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Button from "@components/global/Button";
import { mobileQuery } from "@styles/mediaQueries";

export default function About() {
  return (
    <>
      <Head>
        <title>About • Joe Cooper</title>
      </Head>
      <Main>
        <Container>
          <h1>About Joe Cooper</h1>
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
            , where I became the Associate Director of Communications & Design.
            Since then, I've worked at{" "}
            <a href="https://www.madwell.com" target="_blank">
              Madwell
            </a>
            , a Brooklyn-based creative agency where I'm a Senior Developer.
          </p>
          <p>
            In addition to anything web tech, I also enjoy record collecting,
            emulating old Nintendo games, grilling burgers, and rooting for the
            (now weirdly good?) Buffalo Bills.
          </p>
          <Button href="/work" arrow>
            my work
          </Button>
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

  h1 {
    font-size: 5.5rem;
    font-family: var(--header-font);
    color: var(--blue);
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 0 24px;
  }
`;

const Container = styled.article`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  background: var(--white);
  padding-bottom: 40px;

  h1 {
    font-size: 4.8rem;
    font-family: var(--header-font);
    color: var(--blue);

    @media ${mobileQuery} {
      font-size: 3.2rem;
    }
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 0 18px;

    &:last-of-type {
      margin-bottom: 4.0rem;
    }

    a {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
`;
