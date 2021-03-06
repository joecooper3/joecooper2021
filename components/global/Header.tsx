import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { openNavigation, closeNavigation } from "@animations/menu";
import Hamburger from "@components/global/Hamburger";
import HeaderLogo from "@components/global/HeaderLogo";
import Navigation from "@components/global/Navigation";
import { mobileQuery } from "@styles/mediaQueries";

type HeaderProps = {
  route: string;
};

export default function Header({ route }: HeaderProps): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (isOpen: boolean) => {
    if (isOpen) {
      closeNavigation(navRef.current);
      setNavOpen(false);
    } else {
      openNavigation(navRef.current);
      setNavOpen(true);
    }
  };

  return (
    <Container>
      {route !== "/" ? <HeaderLogo /> : <Placeholder role="presentation" aria-hidden />}
      <Hamburger toggleMenuFn={toggleMenu} navOpen={navOpen} />
      <Navigation toggleMenuFn={toggleMenu} ref={navRef} route={route}/>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 5;

  @media ${mobileQuery} {
    height: 100%;
    pointer-events: none;
  }
`;

const Placeholder = styled.div``;
