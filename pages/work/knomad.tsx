import Head from "next/head";

import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";
import MobileImages, {
  MobileImageProps,
} from "@components/work-single/MobileImages";

import Hero from "@images/work/knomad/knomad-square.jpg";
import DesktopOne from "@images/work/knomad/knomad-desktop-1.jpg";
import DesktopTwo from "@images/work/knomad/knomad-desktop-2.jpg";
import DesktopThree from "@images/work/knomad/knomad-desktop-3.jpg";
import MobileOne from "@images/work/knomad/knomad-mobile-1.jpg";
import MobileTwo from "@images/work/knomad/knomad-mobile-2.jpg";
import MobileThree from "@images/work/knomad/knomad-mobile-3.jpg";

const mobileImageArr: MobileImageProps[] = [
  {
    image: MobileOne,
    alt: "Unlimited Eyebrowsing screenshot for mobile",
  },
  {
    image: MobileTwo,
    alt: "Unlimited Eyebrowsing screenshot for mobile",
  },
  {
    image: MobileThree,
    alt: "Unlimited Eyebrowsing screenshot for mobile",
  },
];

export default function UEB() {
  return (
    <>
      <Head>
        <title>Knomad • Joe Cooper</title>
      </Head>
      <WorkTemplate
        title="Knomad"
        lead
        hero={Hero}
        heroAlt="A woman wearing a sweater clutching yarn"
        prevSlug="tap-out"
        prevTitle="Tap Out"
      >
        <p>
          Knomad needed a B2B e-commerce site to help make its vibrant,
          high-quality fibers stand out from its peers. I led the development of
          a WooCommerce site that allowed customers to easily discover and order
          yarn via a number of taxonomies you'd only ever encounter if you were
          the type to buy wholesale yarn. The site was created using a more
          traditional WooCommerce tech stack, including PHP, SCSS, and vanilla
          JavaScript.
        </p>
        <DesktopImage image={DesktopOne} alt="Knomad screenshot for desktop" />
        <DesktopImage image={DesktopTwo} alt="Knomad screenshot for desktop" />
        <DesktopImage
          image={DesktopThree}
          alt="Knomad screenshot for desktop"
        />
        <MobileImages images={mobileImageArr} />
      </WorkTemplate>
    </>
  );
}
