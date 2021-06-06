import { forwardRef, MutableRefObject } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";

import { mobileQuery } from "@styles/mediaQueries";

type LogoProps = {
  animDelay: number;
  ref: MutableRefObject<any>;
};

type LetterContainerProps = {
  height: number;
  width: number;
  xOffset: number;
};

const DEV_HEIGHT = 733;

const letterSizeObj = [
  {
    char: "J",
    w: 55,
    h: 120,
    x: 60,
  },
  {
    char: "o",
    w: 62,
    h: 100,
  },
  {
    char: "e",
    w: 55,
    h: 100,
  },
  {
    char: "C",
    w: 79,
    h: 120,
  },
  {
    char: "p",
    w: 63,
    h: 123,
  },
  {
    char: "r",
    w: 46,
    h: 100,
  },
];

const convertToVh = (num: number): number => {
  return (num / DEV_HEIGHT) * 100;
};

const convertToMobilePx = (num: number): number => {
  const MULTIPLIER = 0.64; // just eyeballed this, seems to work
  return num * MULTIPLIER;
};

const stringToSpans = (
  text: string,
  animDelay: number
): React.ReactElement[] => {
  const stringArr = text.split("");
  const spanArr = stringArr.map((letter, i) => {
    const { w, h, x } = letterSizeObj.find((obj) => obj.char === letter);
    const xOffset = x ?? 0;
    return (
      <LetterContainer width={w} height={h} xOffset={xOffset} key={letter + i}>
        <Tween to={{ x: 0, opacity: 1, delay: animDelay }}>
          <Letter>{letter}</Letter>
        </Tween>
      </LetterContainer>
    );
  });
  return spanArr;
};

const Logo = forwardRef<any, LogoProps>((props, ref): JSX.Element => {
  const first = stringToSpans("Joe", props.animDelay);
  const last = stringToSpans("Cooper", props.animDelay);
  return (
    <>
      <Header className="sr-only">Joe Cooper</Header>
      <Header aria-hidden="true" ref={ref}>
        <Row>{first}</Row>
        <Row>{last}</Row>
        <noscript>
          Joe
          <br />
          Cooper
        </noscript>
      </Header>
    </>
  );
});

const Header = styled.h1`
  margin: 0;
  font-size: 16.23vh;
  font-family: "Quarto";
  color: var(--blue);
  line-height: 0.9;
  pointer-events: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  div {
    overflow: hidden;
  }

  @media ${mobileQuery} {
    font-size: 76px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  &:nth-child(2) {
    transform: translateY(-20px);
  }
`;

const LetterContainer = styled.div<LetterContainerProps>`
  position: relative;
  width: ${(props) => convertToVh(props.width)}vh;
  height: ${(props) => convertToVh(props.height)}vh;
  transform: translateX(${(props) => convertToVh(props.xOffset)}px);

  @media ${mobileQuery} {
    width: ${(props) => convertToMobilePx(props.width)}px;
    height: ${(props) => convertToMobilePx(props.height)}px;
  }
`;

const Letter = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateX(100px);
`;

export default Logo;
