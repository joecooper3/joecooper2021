import styled from "styled-components";

import Hamburger from "@components/global/Hamburger";
import Navigation from "@components/global/Navigation";
import { mobileQuery } from "@styles/mediaQueries";

export default function Header() {
  return (
    <Container>
      <Name className="sr-only">Joe Cooper</Name>
      <Hamburger />
      <Navigation />
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-end;
  z-index: 5;
  padding-right: 15px;

  @media ${mobileQuery} {
    padding-right: 2px;
  }
`;

const Name = styled.h1`
  color: var(--blue);
`;
