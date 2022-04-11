import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";

import { ImageEnter } from "@animations/work-single";

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

  useEffect(() => {
    ImageEnter({
      container: containerRef.current,
      imageContainer: imageContainerRef.current,
    });
  }, [imageContainerRef.current]);

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
  overflow: hidden;
`;

// const ImageContainer = styled.div`
//   width: 100%;
//   transform: translateY(500px);
//   opacity: 0;
// `;
const ImageContainer = styled.div`
  width: 100%;
`;
