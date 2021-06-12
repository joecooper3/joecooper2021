import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

import { workListEnter } from "@animations/work";
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

  return (
    <ItemContainer>
      <Link href={href}>
        <Anchor
          href={href}
          onMouseEnter={() => changePreviewImage(previewId)}
          onMouseLeave={() => changePreviewImage(null)}
        >
          {children}
        </Anchor>
      </Link>
      <TextStroke aria-hidden="true">{children}</TextStroke>
    </ItemContainer>
  );
};

export default function WorkList() {
  const container = useRef<HTMLUListElement>(null);

  useEffect(() => {
    workListEnter(container.current);
  }, [container.current]);

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
  margin-bottom: clamp(36px, 4.9vh, 54px);
  font-size: clamp(var(--lg-font-size), 7.5vh, 81px);
  line-height: 0.9;
  font-weight: 800;
  position: relative;
  line-height: 1;
  opacity: 0;

  @media ${tabletQuery} {
    text-align: center;
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