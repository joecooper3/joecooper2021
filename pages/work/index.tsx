import styled from "styled-components";

import SpinningSquare from "@components/work/SpinningSquare";
import WorkList from "@components/work/WorkList";
import { smDesktopQuery, tabletQuery } from "@styles/mediaQueries";

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
  gap: 40px;
  width: 100%;
  margin: 0 90px 0 var(--side-padding);
  max-width: clamp(var(--container-max-width), 89vw, 1600px);
  align-items: center;

  @media ${smDesktopQuery} {
    grid-template-columns: 1fr 300px;
  }

  @media ${tabletQuery} {
    grid-template-columns: 1fr;
    margin: 0 var(--side-padding);
  }
`;
