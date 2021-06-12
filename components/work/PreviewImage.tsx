import {
  createRef,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Image from "next/image";

import { previewImageEnter, previewImageExit } from "@animations/work";
import { useStore } from "@store/store";
import { smDesktopQuery, mobileQuery, tabletQuery } from "@styles/mediaQueries";
import { previewImages } from "@utils/work";

export default function PreviewImage(): JSX.Element {
  const previewImage = useStore((state) => state.previewImage);
  const [activeImage, setActiveImage] = useState(null);

  const containerRefs: MutableRefObject<HTMLDivElement>[] = useMemo(
    () => previewImages.map(() => createRef()),
    []
  );
  const imageRefs: MutableRefObject<HTMLDivElement>[] = useMemo(
    () => previewImages.map(() => createRef()),
    []
  );

  useEffect(() => {
    if (previewImage !== activeImage) {
      // play entrance animation
      if (previewImage !== null) {
        const i = previewImages.findIndex((item) => item.id === previewImage);
        previewImageEnter(containerRefs[i].current, imageRefs[i].current);
      }

      // play exit animation
      if (activeImage !== null) {
        const i = previewImages.findIndex((item) => item.id === activeImage);
        previewImageExit(containerRefs[i].current);
      }

      setActiveImage(previewImage);
    }
  }, [previewImage]);

  return (
    <>
      {previewImages.map((item, i) => {
        return (
          <ImageContainer ref={containerRefs[i]} key={item.id}>
            <InnerContainer ref={imageRefs[i]}>
              <Image
                src={item.path}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </InnerContainer>
          </ImageContainer>
        );
      })}
    </>
  );
}

const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0px;
  overflow: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${smDesktopQuery} {
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${smDesktopQuery} {
    img {
    }
  }
`;
