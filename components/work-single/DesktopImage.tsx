import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ImageEnter } from "@animations/work-single";
import { mobileQuery } from "@styles/mediaQueries";

// suggested size for desktop sites: 1300x800 (but scaled up for retina, obviously)

type DesktopImageProps = {
  image: StaticImageData;
  alt: string;
};

export default function DesktopImage({
  image,
  alt,
}: DesktopImageProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      ImageEnter({
        container: containerRef.current,
        imageContainer: imageContainerRef.current,
      }),
        10;
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <ImageContainer ref={imageContainerRef}>
        <Image src={image} alt={alt} layout="responsive" loading="eager" />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 35px 0;
  width: 100%;
  max-width: 1200px;
  overflow: clip;

  @media ${mobileQuery} {
    margin: 12px 0;
  }
`;

// const ImageContainer = styled.div`
//   width: 100%;
//   transform: translateY(500px);
//   opacity: 0;
// `;
const ImageContainer = styled.figure`
  width: 100%;
`;
