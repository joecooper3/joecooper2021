import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";
import MobileImages, {
  MobileImageProps,
} from "@components/work-single/MobileImages";

import Hero from "@images/work/starfish/starfish-square.jpg";
import DesktopOne from "@images/work/starfish/starfish-desktop-1.jpg";
import DesktopTwo from "@images/work/starfish/starfish-desktop-2.jpg";
import DesktopThree from "@images/work/starfish/starfish-desktop-3.jpg";
import MobileOne from "@images/work/starfish/starfish-mobile-1.jpg";
import MobileTwo from "@images/work/starfish/starfish-mobile-2.jpg";
import MobileThree from "@images/work/starfish/starfish-mobile-3.jpg";

const mobileImageArr: MobileImageProps[] = [
  {
    image: MobileOne,
    alt: "Starfish screenshot for mobile",
  },
  {
    image: MobileTwo,
    alt: "Starfish screenshot for mobile",
  },
  {
    image: MobileThree,
    alt: "Starfish screenshot for mobile",
  },
];

export default function Starfish() {
  return (
    <WorkTemplate
      title="Starfish"
      lead
      hero={Hero}
      heroAlt="A still of an animation of a starfish leaping out of a hot cup of coffee."
      prevSlug="ueb"
      prevTitle="Unlimited Eyebrowsing"
      nextSlug="cheercards"
      nextTitle="Cheer Cards"
    >
      <p>
        <a href="https://www.starfishprojects.com" target="_blank">
          Starfish
        </a>{" "}
        is Madwell's in-house production studio. I'm big on the page transitions
        and zany easter eggs here (see what happens when you click on "Release
        the Swarm"). It was challenging to create a site that could could
        properly showcase Starfish's quality photography and video production
        without sacrificing page performance, but we were able to pull it off
        with some clever architecture. The site won an{" "}
        <a
          href="https://www.awwwards.com/sites/starfish-projects"
          target="_blank"
        >
          Awwwards Site of the Day honorable mention
        </a>
        .
      </p>
      <p>
        Tech used for the site included Barba.js, Anime.js, and bespoke in-house
        Gutenberg blocks for WordPress.
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
