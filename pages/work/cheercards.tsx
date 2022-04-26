import Head from "next/head";

import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";
import MobileImages, {
  MobileImageProps,
} from "@components/work-single/MobileImages";

import Hero from "@images/work/cheercards/cheercards-square.jpg";
import DesktopOne from "@images/work/cheercards/cheercards-desktop-1.jpeg";
import DesktopTwo from "@images/work/cheercards/cheercards-desktop-2.jpeg";
import DesktopThree from "@images/work/cheercards/cheercards-desktop-3.jpeg";
import MobileOne from "@images/work/cheercards/cheercards-mobile-1.jpg";
import MobileTwo from "@images/work/cheercards/cheercards-mobile-2.jpg";
import MobileThree from "@images/work/cheercards/cheercards-mobile-3.jpg";

const mobileImageArr: MobileImageProps[] = [
  {
    image: MobileOne,
    alt: "A screenshot of the Cheer Cards mobile app",
  },
  {
    image: MobileTwo,
    alt: "A screenshot of the Cheer Card mobile app",
  },
  {
    image: MobileThree,
    alt: "A screenshot of the Cheer Card mobile app",
  },
];

export default function UEB() {
  return (
    <>
      <Head>
        {" "}
        <title>Cheer Cards • Joe Cooper</title>
      </Head>
      <WorkTemplate
        title="Cheer Cards"
        hero={Hero}
        heroAlt="A Cheer Card on display in Times Square"
        prevSlug="starfish"
        prevTitle="Starfish"
        nextSlug="tap-out"
        nextTitle="Tap Out"
      >
        <p>
          The TCS New York City Marathon wanted to find a way to encourage
          friends and family to support their runners; enter the Cheer Cards. I
          helped develop a mobile app that allowed users to upload, edit, and
          tag photos to cheer on their loved ones.
        </p>
        <p>
          After the user-generated images were sufficiently plastered with
          colorful stickers, messages, and frames, they were uploaded and
          integrated into TCS's existing runner database. Chips in the runners'
          racing bibs triggered nearby billboards to display Cheer Cards created
          by their supporters.
        </p>
        <p>
          The app was built with React, Redux, Konva.js, and used WordPress on
          the back end.
        </p>

        <DesktopImage image={DesktopOne} alt="A sampling of Cheer Cards" />
        <DesktopImage
          image={DesktopTwo}
          alt="A Cheer Card on display in Times Square"
        />
        <DesktopImage
          image={DesktopThree}
          alt="Runners react as they see encouragement via Cheer Cards"
        />
        <MobileImages images={mobileImageArr} />
      </WorkTemplate>
    </>
  );
}
