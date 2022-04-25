import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

import { enterAnimations } from "@animations/work-single";
import { tabletQuery, mobileQuery } from "@styles/mediaQueries";
import { useStore } from "@store/store";

type WorkTemplateProps = {
  lead?: boolean;
  children: React.ReactNode;
  title: string;
  hero: StaticImageData;
  heroAlt: string;
  nextSlug?: string;
  nextTitle?: string;
  prevSlug?: string;
  prevTitle?: string;
};

export default function WorkTemplate({
  children,
  hero,
  heroAlt,
  lead,
  title,
  nextSlug,
  nextTitle,
  prevSlug,
  prevTitle,
}: WorkTemplateProps): JSX.Element {
  const heroContainer = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const whiteHeadline = useRef<HTMLHeadingElement>(null);
  const leadDeveloper = useRef<HTMLElement>(null);
  const copyContainer = useRef<HTMLDivElement>(null);
  const isDesktop = useStore((state) => state.isDesktop);

  useEffect(() => {
    enterAnimations({
      container: heroContainer.current,
      headline: headline.current,
      whiteHeadline: whiteHeadline.current,
      leadDeveloper: leadDeveloper.current,
      copyContainer: copyContainer.current,
      isDesktop: isDesktop,
    });
  }, [heroContainer.current]);
  return (
    <>
      <Main>
        <Container>
          <HeadlineContainer>
            <Headline ref={headline}>{title}</Headline>
            <WhiteHeadline ref={whiteHeadline} aria-hidden>{title}</WhiteHeadline>
            {lead && (
              <LeadDeveloper ref={leadDeveloper}>Lead Developer</LeadDeveloper>
            )}
          </HeadlineContainer>
          <ImageContainer ref={heroContainer}>
            <Image src={hero} alt={heroAlt} loading="eager" />
          </ImageContainer>
          <CopyContainer ref={copyContainer}>{children}</CopyContainer>
        </Container>
      </Main>
      <PrevNextContainer>
        {prevSlug && prevTitle && (
          <Link href={"/work/" + prevSlug}>
            <PrevLink>
              <CgArrowLongLeft size={20} />
              <PrevTitle>{prevTitle}</PrevTitle>
            </PrevLink>
          </Link>
        )}
        {nextSlug && nextTitle && (
          <Link href={"/work/" + nextSlug}>
            <NextLink>
              <NextTitle>{nextTitle}</NextTitle>
              <CgArrowLongRight size={20} aria-hidden />
            </NextLink>
          </Link>
        )}
      </PrevNextContainer>
    </>
  );
}

const Main = styled.main`
  background: var(--tan);
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 100px var(--side-padding);
  box-sizing: border-box;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px minmax(300px, 500px);
  max-width: 1200px;
  margin: 0 auto;

  @media ${mobileQuery} {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.figure`
  grid-column: 2;

  @media ${mobileQuery} {
    grid-column: 1;
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  position: relative;
  padding-top: 100px;

  @media ${mobileQuery} {
    padding-top: 0px;
  }
`;

const Headline = styled.h1`
  font-size: 84px;
  color: var(--blue);
  font-family: var(--header-font);
  grid-column: 1;
  width: 100%;
  z-index: 3;
  margin: 0 0 20px;

  @media ${tabletQuery} {
    font-size: 59px;
  }

  @media ${mobileQuery} {
    font-size: 42px;
  }
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

  @media ${tabletQuery} {
    font-size: 59px;
  }

  @media ${mobileQuery} {
    font-size: 42px;
    top: 3px;
  }
`;

const LeadDeveloper = styled.aside`
  text-transform: uppercase;
  color: var(--blue);
  font-weight: 700;
  font-size: 20px;
  padding-left: 6px;

  @media ${mobileQuery} {
    display: none;
  }
`;

const CopyContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  grid-column: 1 / -1;
  margin: 50px 0;

  @media ${mobileQuery} {
    margin: 16px 0;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 600px;
    margin: 12px 0;

    @media ${mobileQuery} {
      font-size: 16px;
      margin: 8px 0;
    }
  }
`;

const PrevNextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--white);
  padding: 20px var(--side-padding);
  box-sizing: border-box;
`;

const sharedLinkStyles = css`
  display: flex;
  color: var(--blue);
  cursor: pointer;
  align-items: center;
  svg {
    transition: transform 0.5s ease-in-out;
  }
`;

const PrevLink = styled.a`
  ${sharedLinkStyles}
  grid-column: 1;

  &:hover {
    svg {
      transform: translateX(-15px);
    }
  }
`;

const NextLink = styled.a`
  ${sharedLinkStyles}
  grid-column: 2;
  justify-self: end;

  &:hover {
    svg {
      transform: translateX(15px);
    }
  }
`;

const PrevTitle = styled.p`
  font-size: 20px;
  padding-left: 16px;
`;

const NextTitle = styled.p`
  font-size: 20px;
  padding-right: 16px;
`;
