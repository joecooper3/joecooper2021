import Link from "next/link";
import styled from "styled-components";

export default function About() {
  return (
      <Main>
        <h2>About Page</h2>
        <Link href="/">Back home</Link>
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