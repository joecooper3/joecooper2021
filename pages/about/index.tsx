import Link from "next/link";
import styled from "styled-components";

import { mobileQuery } from "@styles/mediaQueries";

export default function About() {
  return (
    <Main>
      <Container>
        <h2>About Joe Cooper</h2>
        <p>
          I’m a web developer/creative technologist and designer living
          on Long Island.
        </p>{" "}
        <p>
          I’ve been dabbling in web design since I was 11, during the halcyon
          days of{" "}
          <a href="https://en.wikipedia.org/wiki/AOLpress" target="_blank">
            AOLPress
          </a>
          . I began offering web design and development services professionally
          to clients in 2014 and broadened my horizons to include visual design
          of all kinds. I’m passionate about social justice and spent my early
          career working at CASES, where I became the Associate Director of
          Communications & Design. Since then, I've worked at Madwell, a
          Brooklyn-based creative agency where I'm a Senior Developer.
        </p>
        <p>
          In addition to anything web tech, I also enjoy record collecting,
          emulating old Nintendo games, grilling burgers, and rooting for the
          (now weirdly good?) Buffalo Bills.
        </p>
        <Link href="/work">See my work</Link>
      </Container>
    </Main>
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

  h2 {
    font-size: 5.5rem;
    font-family: var(--header-font);
    color: var(--blue);
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 0 18px;
  }

  a {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

const Container = styled.article`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  background: var(--white);
  h2 {
    font-size: 5.5rem;
    font-family: var(--header-font);
    color: var(--blue);
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 0 0 18px;
  }

  a {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;
