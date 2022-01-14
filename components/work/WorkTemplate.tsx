import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";

import { heroEnter } from "@animations/work-single";

type WorkTemplateProps = {
  lead: boolean;
  children: React.ReactNode;
  title: string;
  hero: StaticImageData;
};

export default function WorkTemplate({
  children,
  hero,
  lead,
  title,
}: WorkTemplateProps): JSX.Element {
  const heroContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    heroEnter(heroContainer.current);
  }, [heroContainer.current]);
  return (
    <Main>
      <Container>
        <HeadlineContainer>
          <Headline>{title}</Headline>
          <WhiteHeadline>{title}</WhiteHeadline>
          {lead && <LeadDeveloper>Lead Developer</LeadDeveloper>}
        </HeadlineContainer>
        <ImageContainer ref={heroContainer}>
          <Image src={hero} alt="An eyebrow-themed coloring book app" />
        </ImageContainer>
        <CopyContainer>{children}</CopyContainer>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  background: var(--tan);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

const ImageContainer = styled.div`
  grid-column: 2;
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  position: relative;
  padding-top: 100px;
`;

const Headline = styled.h1`
  font-size: 84px;
  color: var(--blue);
  font-family: var(--header-font);
  grid-column: 1;
  width: 100%;
  z-index: 3;
  margin: 0 0 20px;
`;

const WhiteHeadline = styled.h1`
  font-size: 84px;
  color: var(--white);
  font-family: var(--header-font);
  grid-column: 1;
  width: 100%;
  z-index: 2;
  margin: 0 0 20px;
  position: absolute;
  top: 103px;
  left: 3px;
`;

const LeadDeveloper = styled.aside`
  text-transform: uppercase;
  color: var(--blue);
  font-weight: 700;
  font-size: 20px;
  padding-left: 6px;
`;

const CopyContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  grid-column: 1 / -1;
  margin: 50px 0;

  p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 600px;
    margin: 12px 0;
  }
`;
