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
  const pageTransition = useTransitionLink(href);

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

  useEffect(() => {
    if (isDesktop !== null) {
      workListEnter(container.current, isDesktop);
    }
  }, [container.current, isDesktop]);

  return (
    <Nav aria-label="Work Navigation">
      <Container ref={container}>
        <LinkItem href="/" previewId="ueb">
          Unlimited EyeBrowsing
        </LinkItem>
        <LinkItem href="/" previewId="starfish">
          Starfish
        </LinkItem>
        <LinkItem href="/" previewId="ueb">
          Cheer Cards
        </LinkItem>
        <LinkItem href="/" previewId="starfish">
          Tap Out
        </LinkItem>
        <LinkItem href="/" previewId="ueb">
          Knomad
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
  font-size: clamp(var(--lg-font-size), 7.5vh, 8.1rem);
  line-height: 0.9;
  font-weight: 800;
  position: relative;
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
