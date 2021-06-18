import React from "react";
import styled from "styled-components";

import { useTransitionLink } from "@hooks/hooks";
import { mobileQuery, tabletQuery } from "@styles/mediaQueries";

type LinkItemProps = {
  children: React.ReactNode;
  href: string;
  color: "white" | "tan"
};

function LinkItem({ children, href, color }: LinkItemProps): JSX.Element {
  const pageTransition = useTransitionLink(href, color);

  const clickFn = (e: React.MouseEvent) => {
    e.preventDefault();
    pageTransition();
  };

  return (
    <ItemContainer>
      <Anchor href={href} onClick={(e) => clickFn(e)}>
        {children}
      </Anchor>
      <TextStroke aria-hidden="true">{children}</TextStroke>
    </ItemContainer>
  );
}

export const Navigation = React.forwardRef<HTMLElement>(({}, ref) => {
  return (
    <Nav ref={ref}>
      <ListContainer>
        <LinkItem href="/about" color="white">About</LinkItem>
        <LinkItem href="/work" color="white">Work</LinkItem>
        <LinkItem href="/" color="tan">Contact</LinkItem>
      </ListContainer>
      <BottomBorder role="presentation" />
    </Nav>
  );
});

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
`;

const ItemContainer = styled.li`
  text-transform: lowercase;
  font-family: var(--header-font);
  font-weight: 800;
  font-size: 2.25rem;
  margin-right: 40px;
  position: relative;
  opacity: 0;
`;

const Anchor = styled.a`
  color: var(--blue);
  text-decoration: none;
  transition: 0.15s opacity ease-out;

  &:hover {
    opacity: 0;

    & + span {
      opacity: 1;
    }
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
