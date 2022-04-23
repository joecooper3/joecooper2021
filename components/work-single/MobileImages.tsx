import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";

import { MobileImageEnter } from "@animations/work-single";

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

  useEffect(() => {
    imageContainersRef.current = imageContainersRef.current.slice(
      0,
      images.length
    );
  }, [images]);

  useEffect(() => {
    MobileImageEnter({
      container: containerRef.current,
      imageContainers: imageContainersRef.current,
    });
  }, [imageContainersRef.current]);

  return (
    <Container ref={containerRef}>
      {images.map((image: MobileImageProps, i) => (
        <ImageContainer
          key={`image.alt${i}`}
          ref={(el) => (imageContainersRef.current[i] = el)}
        >
          <Image src={image.image} alt={image.alt} layout="responsive" loading="eager" />
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
`;

const ImageContainer = styled.div`
  max-width: 100%;
  flex: 1 1 100%;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
