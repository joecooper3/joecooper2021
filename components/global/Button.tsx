import Link from "next/link";
import styled, { css } from "styled-components";

import { mobileQuery } from "@styles/mediaQueries";

type ArrowProps = {
  responsiveHeight?: boolean;
};

type ButtonProps = {
  onClick?: () => {};
  href?: string;
  children?: React.ReactNode;
  external?: boolean;
  arrow?: boolean;
  responsiveHeight?: boolean;
};

type ElProps = {
  arrow?: boolean;
  responsiveHeight?: boolean;
};

function Arrow({ responsiveHeight }: ArrowProps): JSX.Element {
  const size = responsiveHeight ? "2.73vh" : "20";
  return (
    <ArrowSvg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 24 24"
      aria-hidden="true"
      responsiveHeight={responsiveHeight}
    >
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </ArrowSvg>
  );
}

export default function Button({
  onClick,
  href,
  children,
  external,
  arrow,
  responsiveHeight,
}: ButtonProps): JSX.Element {
  if (href && !external) {
    return (
      <Link href={href}>
        <Anchor href={href} arrow={arrow} responsiveHeight={responsiveHeight}>
          {children}
          {arrow && <Arrow responsiveHeight={responsiveHeight} />}
        </Anchor>
      </Link>
    );
  } else if (href && external) {
    return (
      <Anchor
        href={href}
        arrow={arrow}
        responsiveHeight={responsiveHeight}
        target="_blank"
        rel="noopener"
      >
        {children}
        {arrow && <Arrow responsiveHeight={responsiveHeight} />}
      </Anchor>
    );
  }

  return (
    <ButtonEl
      onClick={onClick}
      arrow={arrow}
      responsiveHeight={responsiveHeight}
    >
      {children}
      {arrow && <Arrow responsiveHeight={responsiveHeight} />}
    </ButtonEl>
  );
}

const shared = css<ElProps>`
  background: transparent;
  font-family: var(--body-font);
  border: 1px solid var(--blue);
  color: var(--blue);
  font-weight: 300;
  text-transform: uppercase;
  font-size: ${(props) => (props.responsiveHeight ? "1.9vh" : "14px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.responsiveHeight ? "23.88vh" : "175px")};
  height: ${(props) => (props.responsiveHeight ? "7.64vh" : "56px")};
  border-radius: 999px;
  line-height: 1;
  text-decoration: none;
  position: relative;
  box-sizing: border-box;
  padding-right: ${(props) => (props.arrow ? "10px" : "0")};
  transition: background 0.25s ease-out, color 0.25s ease-out;
  &:hover {
    background: var(--blue);
    color: var(--white);

    svg {
      path {
        fill: var(--white);
      }
    }
  }

  @media ${mobileQuery} {
    width: 145px;
    height: 48px;
    justify-content: flex-start;
    padding: 2px 0 0 26px;
  }
`;

const ButtonEl = styled.button`
  ${shared}
`;

const Anchor = styled.a`
  ${shared}
  cursor: pointer;
`;

const ArrowSvg = styled.svg<ArrowProps>`
  position: absolute;
  right: ${(props) => (props.responsiveHeight ? "2.73vh" : "20px")};

  path {
    fill: var(--blue);
  }

  @media ${mobileQuery} {
    height: 16px !important;
    width: 16px !important;
    padding-bottom: 2px;
  }
`;
