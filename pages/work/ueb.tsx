import WorkTemplate from "@components/work/WorkTemplate";

import Hero from "../../public/images/test-screenshot.png"

export default function UEB() {
  return (
    <WorkTemplate title="Unlimited Eyebrowsing" lead hero={Hero}>
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
        Some of the tech we used included React, Barba.js, Anime.js, Face Mesh,
        Phaser.js, and WordPress.
      </p>
    </WorkTemplate>
  );
}
