import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import { spinningSquareEnter } from "@animations/work";
import PreviewImage from "@components/work/PreviewImage";
import { smDesktopQuery, mobileQuery, tabletQuery } from "@styles/mediaQueries";

export default function SpnningSquare() {
  const container = useRef<HTMLDivElement>(null);
  const square = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    spinningSquareEnter(container.current, square.current, text.current);
  }, [container.current, square.current, text.current]);

  return (
    <Container ref={container} role="presentation">
      <Square ref={square} role="presentation" />
      <Heading ref={text}>Work</Heading>
      <PreviewImage />
    </Container>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: none;
  grid-column: 2;
  height: 400px;

  @media ${tabletQuery} {
    grid-column: 1;
    grid-row: 1;
    z-index: 1;
  }
`;

const Square = styled.div`
  background: var(--tan);
  border: 1px solid var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  animation: ${rotate} 25s linear infinite;

  @media ${smDesktopQuery} {
    height: 300px;
    width: 300px;
  }
`;

const Heading = styled.h2`
  text-transform: lowercase;
  color: var(--white);
  font-family: var(--header-font);
  font-size: 85px;
  position: absolute;
  margin: 0;
  top: 150px;
  -webkit-text-stroke: 1px var(--blue);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media ${smDesktopQuery} {
    font-size: 64px;
    top: 162px;
  }
`;