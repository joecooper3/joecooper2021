import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { workListEnter } from "@animations/work";
import { useTransitionLink } from "@hooks/hooks";
import { useStore } from "@store/store";
import { mobileQuery, tabletQuery } from "@styles/mediaQueries";

type LinkItemProps = {
  previewId: string;
  children: React.ReactNode;
  href: string;
};

const LinkItem = ({
  previewId,
  children,
  href,
}: LinkItemProps): JSX.Element => {
  const changePreviewImage = useStore((state) => state.changePreviewImage);
  const pageTransition = useTransitionLink(href, "tan");

  const clickFn = (e: React.MouseEvent) => {
    e.preventDefault();
    pageTransition();
  };

  return (
    <ItemContainer>
      <Anchor
        href={href}
        onClick={(e) => clickFn(e)}
        onMouseEnter={() => changePreviewImage(previewId)}
        onMouseLeave={() => changePreviewImage(null)}
      >
        {children}
      </Anchor>
      <TextStroke aria-hidden="true">{children}</TextStroke>
    </ItemContainer>
  );
};

export default function WorkList() {
  const container = useRef<HTMLUListElement>(null);
  const isDesktop = useStore((state) => state.isDesktop);
  const changeWorkList = useStore((state) => state.changeWorkList);

  useEffect(() => {
    if (isDesktop !== null) {
      workListEnter(container.current, isDesktop);
    }
  }, [container.current, isDesktop]);

  useEffect(() => {
    changeWorkList(container.current);
  }, [container.current]);

  return (
    <Nav aria-label="Work Navigation">
      <Container ref={container}>
        <LinkItem href="/work/snapchat" previewId="snapchat">
          Snapchat Agency (Ad)venture
        </LinkItem>
        <LinkItem href="/work/what-is-missing" previewId="wim">
          What Is Missing?
        </LinkItem>
        <LinkItem href="/work/ueb" previewId="ueb">
          Unlimited Eyebrowsing
        </LinkItem>
        <LinkItem href="/work/cheercards" previewId="cheercards">
          Cheer Cards
        </LinkItem>
        <LinkItem href="/work/starfish" previewId="starfish">
          Starfish
        </LinkItem>
        <LinkItem href="/work/tap-out" previewId="tap-out">
          Tap Out
        </LinkItem>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  @media ${tabletQuery} {
    grid-column: 1;
    grid-row: 1;
    z-index: 2;
  }
`;

const Container = styled.ul`
  list-style: none;
  padding-left: 0;
  opacity: 1;
`;

const ItemContainer = styled.li`
  font-family: var(--header-font);
  margin-bottom: clamp(3.6rem, 4.9vh, 5.4rem);
  font-size: clamp(3.2rem, 5.2vh, 7.1rem);
  line-height: 0.9;
  font-weight: 600;
  position: relative;
  max-width: 20ch;
  line-height: 1;
  opacity: 0;

  @media ${tabletQuery} {
    text-align: center;
  }

  @media ${mobileQuery} {
    font-size: var(--lg-font-size-mobile);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Anchor = styled.a`
  color: var(--blue);
  text-decoration: none;
  z-index: 2;
  transition: 0.15s opacity ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0;
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

  @media ${tabletQuery} {
    width: 100%;
    text-align: center;
  }
`;
