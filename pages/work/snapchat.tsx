import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";

import Hero from "@images/work/snapchat/snapchat-square.webp";
import DesktopOne from "@images/work/snapchat/snapchat-1.webp";
import DesktopTwo from "@images/work/snapchat/snapchat-2.webp";
import DesktopThree from "@images/work/snapchat/snapchat-3.webp";
import DesktopFour from "@images/work/snapchat/snapchat-4.webp";
import DesktopFive from "@images/work/snapchat/snapchat-5.webp";
import DesktopSix from "@images/work/snapchat/snapchat-6.webp";
import DesktopSeven from "@images/work/snapchat/snapchat-7.webp";

export default function Snapchat() {
  return (
    <WorkTemplate
      title="Snapchat Agency (Ad)venture"
      lead
      hero={Hero}
      heroAlt="A still of an animation of a starfish leaping out of a hot cup of coffee."
      nextSlug="what-is-missing"
      nextTitle="What Is Missing?"
    >
      <p>
        <a href="https://www.snapchatagencyadventure.com" target="_blank">
          Snapchat Agency (Ad)venture
        </a>{" "}
        is an in-browser, 16-bit style game used to highlight Snapchat's reach
        and capabilities to agency partners. The experience included an RPG
        overworld, four mini-games, and a leaderboard for its participants. The
        site was a critical success, winning an{" "}
        <a
          href="https://www.awwwards.com/sites/snapchat-agency-adventure"
          target="_blank"
        >
          Awwwards Site of the Day Award, an Awwwards Developer Award
        </a>
        , an Awwwards Site of the Month nomination, and an{" "}
        <a
          href="https://thefwa.com/cases/snapchat-agency-adventure-p3"
          target="_blank"
        >
          FWA of the Day
        </a>
        .
      </p>
      <p>Tech used for the site included Phaser.js, SvelteKit, GSAP, and Firebase.</p>
      <DesktopImage
        image={DesktopOne}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopTwo}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopThree}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopFour}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopFive}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopSix}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
      <DesktopImage
        image={DesktopSeven}
        alt="Snapchat Agency (Ad)venture screenshot for desktop"
      />
    </WorkTemplate>
  );
}
