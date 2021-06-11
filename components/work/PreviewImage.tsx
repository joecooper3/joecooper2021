import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { previewImageEnter } from "@animations/work";
import { useStore } from "@store/store";

export default function PreviewImage(): JSX.Element {
  const previewImage = useStore((state) => state.previewImage);
  const container = useRef(null);
  const image = useRef(null);
  // on mount, fade in image
  useEffect(() => {
    console.log(previewImage);
    if (previewImage?.id) {
      previewImageEnter(container.current, image.current);
    }
    return () => {
      if (previewImage?.id) {
        console.log("unmounting and there is an id");
        console.log(container.current);
      } else {
        console.log("unmounting but blank");
      }
    };
  }, [previewImage]);

  if (previewImage?.path) {
    const { path, alt } = previewImage;
    return (
      <ImageContainer ref={container}>
        <div ref={image}>
          <Image src={path} width={400} height={380} alt={alt} />
        </div>
      </ImageContainer>
    );
  }
  return null;
}

const ImageContainer = styled.div`
  width: 400px;
  height: 380px;
  position: absolute;
  top: 30px;
  overflow: hidden;
`;

const ImageEl = styled(Image)``;
