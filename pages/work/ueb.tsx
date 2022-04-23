import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";
import MobileImages, {
  MobileImageProps,
} from "@components/work-single/MobileImages";

import Hero from "../../public/images/test-screenshot.png";
import DesktopOne from "@images/work/ueb/ueb-desktop-1.png";
import DesktopTwo from "@images/work/ueb/ueb-desktop-2.png";
import DesktopThree from "@images/work/ueb/ueb-desktop-3.png";
import MobileOne from "@images/work/ueb/ueb-mobile-1.png";
import MobileTwo from "@images/work/ueb/ueb-mobile-2.png";
import MobileThree from "@images/work/ueb/ueb-mobile-3.png";

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
    <WorkTemplate
      title="Unlimited Eyebrowsing"
      lead
      hero={Hero}
      heroAlt="An eyebrow-themed coloring book app"
    >
      <p>
        Unlimited Eyebrowsing was a sprawling web app that simulated an endless
        stream of eyebrow-related content. The site also featured face detection
        integration, allowing users to browse the site by moving their eyebrows.
        With over 300 unique pages—including games like Brow Pong, Brow or
        Stache, and an eyebrow-themed dating app—the site was made possible via
        a creative tech stack and a clever CMS integration.
      </p>
      <p>
        Kind of as weird as it sounds. Anyway, the site was the centerpiece of a
        campaign that ended up becoming a{" "}
        <a
          href="https://shortyawards.com/13th/unlimited-eye-browsing"
          target="_blank"
        >
          finalist for a Shorty Award
        </a>
        .
      </p>
      <p>
        Some of the tech we used included React, Barba.js, GreenSock, Face Mesh,
        Phaser.js, and WordPress.
      </p>
      <DesktopImage
        image={DesktopOne}
        alt="Unlimited Eyebrowsing screenshot for desktop"
      />
      <DesktopImage
        image={DesktopTwo}
        alt="Unlimited Eyebrowsing screenshot for desktop"
      />
      <DesktopImage
        image={DesktopThree}
        alt="Unlimited Eyebrowsing screenshot for desktop"
      />
      <MobileImages images={mobileImageArr} />
    </WorkTemplate>
  );
}
