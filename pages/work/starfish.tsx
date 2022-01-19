import WorkTemplate from "@components/work/WorkTemplate";

import Hero from "../../public/images/test-screenshot-sf.png";

export default function Starfish() {
  return (
    <WorkTemplate title="Starfish" lead hero={Hero}>
      <p>
        Starfish is Madwell's in-house production studio. I'm big on the page
        transitions and zany easter eggs here (see what happens when you click
        on "Release the Swarm"). Was a big challenge to create a site thar could
        do justice to Starfish's quality photography while also maintaining
        performance. Won an{" "}
        <a
          href="https://www.awwwards.com/sites/starfish-projects"
          target="_blank"
        >
          Awwwards Site of the Day honorable mention
        </a>
        .
      </p>
      <p>Tech used included Barba.js, Anime.js, WordPress.</p>
    </WorkTemplate>
  );
}
