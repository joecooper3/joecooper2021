import styled from "styled-components";
import { mobileQuery, tabletQuery } from "@styles/mediaQueries";

type MainProps = {
  children: React.ReactNode;
  background?: string;
};

type ContainerProps = {
  background?: string;
};

export default function Main({ children, background }: MainProps): JSX.Element {
  return <Container background={background}>{children}</Container>;
}

const Container = styled.main<ContainerProps>`
  background: ${(props) => props.background ?? "#FDFDFD"};
  min-height: 100vh;
  width: 100%;

  @media ${tabletQuery} {
    position: relative;
    max-height: -webkit-fill-available;
    overflow: hidden;
    min-height: -webkit-fill-available;
    max-width: 100%;
    padding: 0 45px;
    box-sizing: border-box;
  }
  
  @media ${mobileQuery} {
    grid-template-columns: 1fr;
    padding: 0 22px;
  }
`;
