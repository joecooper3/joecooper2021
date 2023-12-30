import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";
import MobileImages, {
  MobileImageProps,
} from "@components/work-single/MobileImages";

import Hero from "@images/work/wim/wim-square.webp";
import DesktopOne from "@images/work/wim/wim-desktop-1.webp";
import DesktopTwo from "@images/work/wim/wim-desktop-2.webp";
import DesktopThree from "@images/work/wim/wim-desktop-3.webp";
import DesktopFour from "@images/work/wim/wim-desktop-4.webp";
import DesktopFive from "@images/work/wim/wim-desktop-5.webp";
import MobileOne from "@images/work/wim/wim-mobile-1.webp";
import MobileTwo from "@images/work/wim/wim-mobile-2.webp";
import MobileThree from "@images/work/wim/wim-mobile-3.webp";

const mobileImageArr: MobileImageProps[] = [
  {
    image: MobileOne,
    alt: "What Is Missing? screenshot for mobile",
  },
  {
    image: MobileTwo,
    alt: "What Is Missing? screenshot for mobile",
  },
  {
    image: MobileThree,
    alt: "What Is Missing? screenshot for mobile",
  },
];

export default function Starfish() {
  return (
    <WorkTemplate
      title="What Is Missing?"
      lead
      hero={Hero}
      heroAlt="A still of an animation of a starfish leaping out of a hot cup of coffee."
      prevSlug="snapchat"
      prevTitle="Snapchat Agency (Ad)venture"
      nextSlug="ueb"
      nextTitle="Unlimited Eyebrowsing"
    >
      <p>
        <a href="https://www.starfishprojects.com" target="_blank">
          What Is Missing?
        </a>{" "}
        is a memorial from renowned designer and sculptor Maya Lin. The site
        serves as a harrowing look into the effect humanity has had on its
        planet while also offering tangible solutions towards preventing further
        degredaton.
      </p>
      <p>
        The project won two Webbys in 2023, including the{" "}
        <a
          href="https://winners.webbyawards.com/2023/websites-and-mobile-sites/general-websites-and-mobile-sites/activism/246279/what-is-missing"
          target="_blank"
        >
          Activism and Best Navigation/Structure categories
        </a>
        . I also wrote in more detail about the project's development as part of
        the the Webby's{" "}
        <a
          href="https://www.webbyawards.com/crafted-with-code/what-is-missing/"
          target="_blank"
        >
          Crafted With Code
        </a>{" "}
        series. Additionally, the site was honored with an{" "}
        <a href="https://thefwa.com/cases/what-is-missing" target="_blank">
          FWA of the Day
        </a>{" "}
        and an{" "}
        <a
          href="https://www.awwwards.com/sites/what-is-missing"
          target="_blank"
        >
          Awwwards Site of the Day Honorable Mention
        </a>
        .
      </p>
      <p>
        Some of the tech used for the site include Next.JS, GSAP, and React
        Three Fiber.
      </p>
      <DesktopImage
        image={DesktopOne}
        alt="What Is Missing? screenshot for desktop"
      />
      <DesktopImage
        image={DesktopTwo}
        alt="What Is Missing? screenshot for desktop"
      />
      <DesktopImage
        image={DesktopThree}
        alt="What Is Missing? screenshot for desktop"
      />
      <DesktopImage
        image={DesktopFour}
        alt="What Is Missing? screenshot for desktop"
      />
      <DesktopImage
        image={DesktopFive}
        alt="What Is Missing? screenshot for desktop"
      />
      <MobileImages images={mobileImageArr} />
    </WorkTemplate>
  );
}
