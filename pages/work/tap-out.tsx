import Head from "next/head";

import WorkTemplate from "@components/work/WorkTemplate";
import DesktopImage from "@components/work-single/DesktopImage";

import Hero from "@images/work/tap-out/tap-out-square.jpeg";
import DesktopOne from "@images/work/tap-out/tap-out-desktop-1.png";
import DesktopTwo from "@images/work/tap-out/tap-out-desktop-2.png";
import DesktopThree from "@images/work/tap-out/tap-out-desktop-3.png";
import DesktopFour from "@images/work/tap-out/tap-out-desktop-4.jpeg";

export default function TapOut() {
  return (
    <>
      <Head>
        <title>Unlimited Eyebrowsing • Joe Cooper</title>
      </Head>
      <WorkTemplate
        title="Tap Out"
        lead
        hero={Hero}
        heroAlt="Tap Out logo"
        prevSlug="cheercards"
        prevTitle="Cheer Cards"
        nextSlug="knomad"
        nextTitle="Knomad"
      >
        <p>
          As part of Visible's Phonetopia event, our dev team was tasked with
          creating a host of tech-y activations. My assignment was to program an
          arcade game about receiving too many text messages. The game supported
          up to four players and connected to a central external database to
          help display high scores at different screens at the event.
        </p>
        <p>
          The game was built with Phaser.js and transformed into a Windows app
          via Electron. To get things booted up on that arcade unit pictured
          below, I had to write some Bash scripts for whatever version of
          Windows the cabinet used under the hood.
        </p>
        <DesktopImage
          image={DesktopFour}
          alt="A photo of the Phonetopia event, including the Tap Out arcade cabinet"
        />
        <DesktopImage image={DesktopOne} alt="The Tap Out title screen" />
        <DesktopImage image={DesktopTwo} alt="Tap Out game instructions" />
        <DesktopImage image={DesktopThree} alt="Tap Out game play" />
      </WorkTemplate>
    </>
  );
}
