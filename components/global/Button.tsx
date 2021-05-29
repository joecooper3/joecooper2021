import Link from "next/link";
import styled, { css } from "styled-components";

type ButtonProps = {
  onClick?: () => {};
  href?: string;
  children?: React.ReactNode;
  external?: boolean;
  arrow?: boolean;
};

type ElProps = {
  arrow?: boolean;
};

function Arrow() {
  return (
    <ArrowSvg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 24 24"
      aria-hidden="true"
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
}: ButtonProps): JSX.Element {
  if (href && !external) {
    return (
      <Link href={href}>
        <Anchor href={href} arrow={arrow}>
          {children}
          {arrow && <Arrow />}
        </Anchor>
      </Link>
    );
  } else if (href && external) {
    <Anchor href={href} target="_blank" rel="noopener">
      {children}
    </Anchor>;
  }
  return <ButtonEl onClick={onClick}>{children}</ButtonEl>;
}

const shared = css<ElProps>`
  background: transparent;
  font-family: var(--body-font);
  border: 1px solid var(--blue);
  color: var(--blue);
  font-weight: 300;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 56px;
  border-radius: 75px;
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
`;

const ButtonEl = styled.button`
  ${shared}
`;

const Anchor = styled.a`
  ${shared}
  cursor: pointer;
`;

const ArrowSvg = styled.svg`
  position: absolute;
  right: 20px;

  path {
    fill: var(--blue);
  }
`;
