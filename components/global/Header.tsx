import { useEffect, useRef } from "react";
import styled from "styled-components";

import { openNavigation, closeNavigation } from "@animations/menu";
import Hamburger from "@components/global/Hamburger";
import Navigation from "@components/global/Navigation";
import { mobileQuery } from "@styles/mediaQueries";

export default function Header() {
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (isOpen: boolean) => {
    if (isOpen) {
      closeNavigation(navRef.current);
    } else {
      openNavigation(navRef.current);
    }
  };

  return (
    <Container>
      <Name className="sr-only">Joe Cooper</Name>
      <Hamburger toggleMenuFn={toggleMenu} />
      <Navigation ref={navRef} />
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
`;

const Name = styled.h1`
  color: var(--blue);
`;
