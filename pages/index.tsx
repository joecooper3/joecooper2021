import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import ChainShapes from "../components/home/ChainShapes";

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
          <Header>
            Joe <br />
            Cooper
          </Header>
          <SubCopy>
            is a creative full-stack developer based in New York.
          </SubCopy>
        </CopyContainer>
      </Main>
    </div>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const CopyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 450px;
`;

const Header = styled.h1`
  font-size: 125px;
  font-family: "Quarto";
  color: var(--blue);
  z-index: 2;
  text-align: right;
  padding-right: 30px;
  line-height: 0.9;
  pointer-events: none;
`;

const SubCopy = styled.p`
  font-family: "Quarto";
  color: var(--blue);
  font-size: 36px;
  z-index: 2;
`;
