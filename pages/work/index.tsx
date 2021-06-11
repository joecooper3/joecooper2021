import styled from "styled-components";
import { Tween } from "react-gsap";
import Link from "next/link";

import SpinningSquare from "@components/work/SpinningSquare";
import WorkList from "@components/work/WorkList";

export default function Work() {
  return (
    <Main>
      <Container>
        <WorkList />
        <SpinningSquare />
      </Container>
    </Main>
  );
}

const Main = styled.main`
  background: var(--white);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  width: 100%;
  margin: 0 90px 0 var(--desktop-side-mg);
  max-width: var(--container-max-width);
  align-items: center;
`;
