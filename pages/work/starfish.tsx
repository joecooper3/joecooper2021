import WorkTemplate from "@components/work/WorkTemplate";

import Hero from "../../public/images/test-screenshot-sf.png";

export default function Starfish() {
  return (
    <WorkTemplate title="Starfish" lead hero={Hero}>
      <p>
        Starfish! Won an{" "}
        <a href="https://www.awwwards.com/sites/starfish-projects" target="_blank">
          Awwwards Site of the Day honorable mention
        </a>
        .
      </p>
      <p>Tech used included Barba.js, Anime.js, WordPress.</p>
    </WorkTemplate>
  );
}
