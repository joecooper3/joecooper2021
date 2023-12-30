import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

import { animateOutLogo } from "@animations/menu";
import { useTransitionLink } from "@hooks/hooks";
import { mobileQuery } from "@styles/mediaQueries";

type HeaderProps = {
  inMotion: boolean;
};

type LetterContainerProps = {
  height: number;
  width: number;
  xOffset: number;
};

const letterSizeObj = [
  {
    char: "J",
    w: 14,
    h: 37,
    x: 2,
  },
  {
    char: "o",
    w: 19,
    h: 31,
  },
  {
    char: "e",
    w: 17,
    h: 31,
  },
  {
    char: "C",
    w: 25,
    h: 30,
  },
  {
    char: "p",
    w: 19,
    h: 37,
  },
  {
    char: "r",
    w: 14,
    h: 30,
  },
  {
    char: " ",
    w: 5,
    h: 30,
  },
];

const HeaderLogo = (): JSX.Element => {
  const [inMotion, setInMotion] = useState(true);
  const container = useRef(null);

  const pageTransition = useTransitionLink("/", "tan");

  useLayoutEffect(() => {
    const q = gsap.utils.selector(container.current);
    gsap.to(q(".letter-container"), {
      duration: 2,
      // stagger: 0.1,
      x: 0,
      opacity: 1,
      delay: 0.5,
      ease: "power4.inOut",
      onComplete: () => motionDone(),
    });
  }, []);

  const clickFn = (e: React.MouseEvent) => {
    e.preventDefault();
    setInMotion(true);
    animateOutLogo(container.current);
    pageTransition();
  };

  const motionDone = () => {
    if (inMotion) {
      setInMotion(false);
    }
  };

  const stringToSpans = (text: string): React.ReactElement[] => {
    const stringArr = text.split("");
    const spanArr = stringArr.map((letter, i) => {
      const { w, h, x } = letterSizeObj.find((obj) => obj.char === letter);
      const xOffset = x ?? 0;
      return (
        <LetterContainer
          width={w}
          height={h}
          xOffset={xOffset}
          key={letter + i}
          aria-hidden="true"
        >
          <Letter className="letter-container">{letter}</Letter>
        </LetterContainer>
      );
    });
    return spanArr;
  };

  const name = stringToSpans("Joe Cooper");
  return (
    <>
      <Header ref={container} href="/" inMotion={inMotion} onClick={clickFn}>
        {name}
        <span className="sr-only">Joe Cooper</span>
      </Header>
    </>
  );
};

const Header = styled.a<HeaderProps>`
  margin: 0;
  font-size: 36px;
  font-family: "Quarto";
  color: var(--blue);
  line-height: 0.9;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-left: var(--side-padding);
  padding-top: 18px;

  div {
    overflow: ${(props) => (props.inMotion ? "hidden" : "unset")};
  }

  @media ${mobileQuery} {
    font-size: 30px;
    z-index: 2;
    height: 30px;
    pointer-events: auto;
  }
`;

const LetterContainer = styled.div<LetterContainerProps>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translateX(${(props) => props.xOffset ?? 0}px);

  @media ${mobileQuery} {
    width: ${(props) => props.width * 0.83}px;
    height: ${(props) => props.height * 0.83}px;
    transform: translateX(${(props) => props.xOffset * 0.83}px);
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

export default HeaderLogo;
