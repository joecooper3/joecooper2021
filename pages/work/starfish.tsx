import WorkTemplate from "@components/work/WorkTemplate";

import Hero from "@images/work/starfish/starfish-square.png";

export default function Starfish() {
  return (
    <WorkTemplate
      title="Starfish"
      lead
      hero={Hero}
      heroAlt="A still of an animation of a starfish leaping out of a hot cup of coffee."
    >
      <p>
        <a href="https://www.starfishprojects.com" target="_blank">
          Starfish
        </a>{" "}
        is Madwell's in-house production studio. I'm big on the page transitions
        and zany easter eggs here (see what happens when you click on "Release
        the Swarm"). It was challenging to create a site that could could
        properly showcase Starfish's quality photography and videos without
        sacrificing page performance, but we were able to pull it off with some
        clever architecture. The site won an{" "}
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
    </WorkTemplate>
  );
}
