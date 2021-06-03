import Hamburger from "@components/global/Hamburger";
import { mobileQuery } from "@styles/mediaQueries";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Name className="sr-only">Joe Cooper</Name>
      <Hamburger />
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
