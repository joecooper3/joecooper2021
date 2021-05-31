import styled from "styled-components";
import { Tween } from "react-gsap";

type LetterContainerProps = {
  height: number;
  width: number;
};

const letterSizeObj = [
  {
    char: "J",
    w: 55,
    h: 120,
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
  const DEV_HEIGHT = 733;
  return num / DEV_HEIGHT * 100;
};

const stringToSpans = (text: string): React.ReactElement[] => {
  const stringArr = text.split("");
  const spanArr = stringArr.map((letter) => {
    const { w, h } = letterSizeObj.find((obj) => obj.char === letter);
    const width = convertToVh(w);
    const height = convertToVh(h);
    return (
      <LetterContainer width={width} height={height}>
        <Tween from={{ x: 100, opacity: 0, delay: 1 }}>
          <Letter>{letter}</Letter>
        </Tween>
      </LetterContainer>
    );
  });
  return spanArr;
};

export default function Logo() {
  const first = stringToSpans("Joe");
  const last = stringToSpans("Cooper");
  return (
    <>
      <Header className="sr-only">Joe Cooper</Header>
      <Header aria-hidden="true">
        <Row>{first}</Row>
        <Row>{last}</Row>
      </Header>
    </>
  );
}

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
  width: ${(props) => props.width}vh;
  height: ${(props) => props.height}vh;
`;

const Letter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
