import React, { useState } from "react";
import styled from "styled-components";

type OpenProps = {
  open: boolean;
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Main menu"
      aria-expanded={isOpen}
    >
      <Box>
        <Inner open={isOpen} />
      </Box>
    </Container>
  );
};

export default Hamburger;

const hamburgerLayerWidth = "38px";
const hamburgerLayerHeight = "1px";
const hamburgerLayerSpacing = "9px";
const hamburgerLayerColor = "var(--blue)";
const hamburgerLayerBorderRadius = "0px";

const closedBeforeTransition =
  "top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)";
const openBeforeTransition =
  "top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)";
const closedAfterTransition =
  "top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)";
const openAfterTransition =
  "top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)";

const Container = styled.button<OpenProps>`
display: flex;
align-items: center;
justify-content: center;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  height: 50px;
  width: 50px;
  padding: 0 10px 20px;
  box-sizing: content-box;
  overflow: visible;
  opacity: ${(props) => (props.open ? "0.7" : "1")};
  &:hover {
      opacity: 0.7;
    }
  }
  &.is-active {
        opacity: 0.7;    
    }
`;

const Box = styled.span`
  width: ${hamburgerLayerWidth};
  height: ${hamburgerLayerHeight} * 3 + ${hamburgerLayerSpacing} * 2;
  display: inline-block;
  position: relative;
`;

const Inner = styled.span<OpenProps>`
  display: block;
  margin-top: calc(${hamburgerLayerHeight} / -2);
  top: calc(${hamburgerLayerHeight} / 2);
  transition: background-color 0s 0.13s linear;
  transition-delay: 0.22s;
  background-color: ${(props) =>
    props.open ? `transparent !important` : hamburgerLayerColor};
  &,
  &::before,
  &::after {
    width: ${hamburgerLayerWidth};
    height: ${hamburgerLayerHeight};
    background-color: ${hamburgerLayerColor};
    border-radius: ${hamburgerLayerBorderRadius};
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  &::before,
  &::after {
    content: "";
    display: block;
  }
  &::before {
    top: ${(props) =>
      props.open
        ? 0
        : `calc(${hamburgerLayerHeight} + ${hamburgerLayerSpacing})`};
    transition: ${(props) =>
      props.open ? openBeforeTransition : closedBeforeTransition};
    transform: ${(props) =>
      props.open
        ? `translate3d(0, calc(${hamburgerLayerSpacing} + ${hamburgerLayerHeight}), 0) rotate(45deg)`
        : ""};
  }
  &::after {
    bottom: calc(${hamburgerLayerSpacing} + ${hamburgerLayerHeight} * -1);
    top: ${(props) =>
      props.open
        ? 0
        : `calc((${hamburgerLayerHeight} * 2) + (${hamburgerLayerSpacing} * 2))`};
    transition: ${(props) =>
      props.open ? openAfterTransition : closedAfterTransition};
    transform: ${(props) =>
      props.open
        ? `translate3d(0, calc(${hamburgerLayerSpacing} + ${hamburgerLayerHeight}), 0) rotate(-45deg)`
        : ""};
  }
`;
