import React from "react";
import styled from "styled-components";

import { useTransitionLink } from "@hooks/hooks";
import { mobileQuery, tabletQuery } from "@styles/mediaQueries";

type NavigationProps = {
  toggleMenuFn: (isOpen: boolean) => void;
  route: string;
};

type LinkItemProps = {
  children: React.ReactNode;
  href: string;
  color: "white" | "tan";
  toggleMenuFn: (isOpen: boolean) => void;
  currentRoute: string;
};

function LinkItem({
  children,
  href,
  color,
  toggleMenuFn,
  currentRoute,
}: LinkItemProps): JSX.Element {
  const pageTransition = useTransitionLink(href, color);

  const clickFn = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === currentRoute) {
      return;
    }
    toggleMenuFn(true);
    pageTransition();
  };

  return (
    <ItemContainer>
      <Anchor
        href={href}
        onClick={(e) => clickFn(e, href)}
        className={currentRoute === href && "active"}
        tabIndex={currentRoute === href ? -1 : 0}
      >
        {children}
      </Anchor>
      <TextStroke aria-hidden="true">{children}</TextStroke>
      {currentRoute === href && <TanUnderline role="presentation" />}
    </ItemContainer>
  );
}

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ toggleMenuFn, route }, ref) => {
    return (
      <Nav ref={ref}>
        <ListContainer>
          <LinkItem
            href="/about"
            color="white"
            toggleMenuFn={toggleMenuFn}
            currentRoute={route}
          >
            About
          </LinkItem>
          <LinkItem
            href="/work"
            color="white"
            toggleMenuFn={toggleMenuFn}
            currentRoute={route}
          >
            Work
          </LinkItem>
          <LinkItem
            href="/"
            color="tan"
            toggleMenuFn={toggleMenuFn}
            currentRoute={route}
          >
            Contact
          </LinkItem>
        </ListContainer>
        <BottomBorder role="presentation" />
      </Nav>
    );
  }
);

export default Navigation;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;

  @media ${mobileQuery} {
    background: var(--white);
    height: 100%;
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 70px 0 0;

  @media ${mobileQuery} {
    padding: 0;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const ItemContainer = styled.li`
  text-transform: lowercase;
  font-family: var(--header-font);
  font-weight: 800;
  font-size: 2.25rem;
  margin-right: 40px;
  position: relative;
  opacity: 0;

  @media ${mobileQuery} {
    margin: 0 0 12px;
    font-size: 5rem;
  }
`;

const Anchor = styled.a`
  color: var(--blue);
  text-decoration: none;
  transition: 0.15s opacity ease-out;

  &:hover,
  &.active {
    opacity: 0;

    & + span {
      opacity: 1;
    }
  }

  &.active {
    cursor: default;
  }
`;

const TextStroke = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px var(--blue);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: 0.2s opacity;

  @media ${tabletQuery} {
    width: 100%;
    text-align: center;
  }
`;

const BottomBorder = styled.div`
  width: 100%;
  height: 1px;
  background: var(--blue);
  display: block;
  position: absolute;
  bottom: 0;
`;

const TanUnderline = styled.div`
  height: 12px;
  background: var(--tan);
  width: 80%;
  position: absolute;
  right: 0;
  bottom: -6px;
  z-index: -1;

  @media ${mobileQuery} {
    bottom: 5px;
  }
`;
