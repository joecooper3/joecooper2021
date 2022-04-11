import styled from "styled-components";
import Image from "next/image";

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
  return (
    <Container>
      {images.map((image: MobileImageProps, i) => (
        <ImageContainer key={`image.alt${i}`}>
          <Image src={image.image} alt={image.alt} layout="responsive" />
        </ImageContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  flex: 1 1 100%;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
