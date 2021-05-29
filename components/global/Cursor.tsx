import { useEffect, useMemo } from "react";
import styled from "styled-components";

import { smooth } from "@utils/cursor";

export default function Cursor() {
  const smoothedMouse = useMemo(() => {
    return smooth({ x: 0, y: 0 }).start(({ x, y }) => {
      document.body.style.setProperty("--mouse-x", x);
      document.body.style.setProperty("--mouse-y", y);
    });
  }, []);

  const updateCursorPosition = (e) => {
    smoothedMouse.update({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => () => smoothedMouse.stop(), []);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => updateCursorPosition(e));
  });

  return (
    <Container
      width="20"
      height="20"
      viewBox="0 0 20 20"
      onMouseMove={updateCursorPosition}
    >
      <Inner cx="10" cy="10" r="5" />
    </Container>
  );
}
const Container = styled.svg`
  display: none;
  @media (any-pointer: fine) {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
    z-index: 1001;
    --x: calc(var(--mouse-x) * 1px);
    --y: calc(var(--mouse-y) * 1px);
    transform: translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0);
  }
`;

const Inner = styled.circle`
  fill: var(--blue);
  stroke: none;
  stroke-width: 1px;
  opacity: 0.7;
`;
