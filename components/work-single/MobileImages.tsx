import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { MobileImageEnter } from "@animations/work-single";
import { mobileQuery } from "@styles/mediaQueries";
import { useStore } from "@store/store";

// suggested image size: 375x670px (but scaled up for retina, obviously)

export type MobileImageProps = {
  image: StaticImageData;
  alt: string;
};

export type MobileImagesProps = {
  images: MobileImageProps[];
};

export default function MobileImage({
  images,
}: MobileImagesProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainersRef = useRef([]);
  const isDesktop = useStore((state) => state.isDesktop);

  useEffect(() => {
    imageContainersRef.current = imageContainersRef.current.slice(
      0,
      images.length
    );
  }, [images]);

  useEffect(() => {
    if (isDesktop !== null) {
      setTimeout(
        () =>
          MobileImageEnter({
            container: containerRef.current,
            imageContainers: imageContainersRef.current,
            isDesktop: isDesktop,
          }),
        0
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isDesktop]);

  return (
    <Container ref={containerRef}>
      {images.map((image: MobileImageProps, i) => (
        <ImageContainer
          key={`image.alt${i}`}
          ref={(el) => (imageContainersRef.current[i] = el)}
        >
          <Image
            src={image.image}
            alt={image.alt}
            layout="responsive"
            loading="eager"
          />
        </ImageContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 35px 0;
  overflow: hidden;

  @media ${mobileQuery} {
    flex-flow: column nowrap;
    margin: 24px 0;
  }
`;

const ImageContainer = styled.figure`
  max-width: 100%;
  flex: 1 1 100%;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }

  @media ${mobileQuery} {
    margin-right: 0;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
