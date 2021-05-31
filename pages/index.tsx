import Head from "next/head";
import styled from "styled-components";
import { Tween } from "react-gsap";

import Button from "@components/global/Button";
import ChainShapes from "@components/home/ChainShapes";
import Logo from "@components/home/Logo"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joe Cooper</title>
        <meta
          name="description"
          content="Joe Cooper is a creative technologist in the New York City area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ChainShapes />
        <CopyContainer>
          <Logo />
          <SubCopy>
            <span className="sr-only">Joe Cooper </span>
            is a New York-based
            <br /> web developer and
            <br />
            creative technologist.
          </SubCopy>
          <ButtonContainer>
            <Button href="/work" arrow>
              Work
            </Button>
            <Button>About</Button>
          </ButtonContainer>
        </CopyContainer>
      </Main>
    </div>
  );
}

const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 86.8vw;
  margin: 0 auto;
  overflow: hidden;
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
`;

const SubCopy = styled.p`
  font-family: var(--header-font);
  color: var(--blue);
  font-size: 4.26vh;
  margin: 3.9vh 0 6.8vh;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row nowrap;
  pointer-events: auto;
`;
