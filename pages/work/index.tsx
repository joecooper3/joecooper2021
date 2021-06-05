import styled from "styled-components";
import { Tween } from "react-gsap";
import Link from "next/link";

export default function Work() {
  return (
    <Main>
      <Tween to={{ opacity: 1 }}>
        <div>
          <h2>Work Page</h2>
          <Link href="/">Back home</Link>
        </div>
      </Tween>
    </Main>
  );
}

const Main = styled.main`
  background: var(--white);
  min-height: 100vh;
  width: 100%;

  div {
    opacity: 0;
  }
`;
