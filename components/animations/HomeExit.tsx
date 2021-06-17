import { useEffect } from "react";
import { useRouter } from "next/router";

import { exitAnimation } from "@animations/homepage";
import { useStore } from "@store/store";

export default function WorkExit({ children }) {
  const router = useRouter();
  const matterEngine = useStore((state) => state.matterEngine);
  const ropes = useStore((state) => state.ropes);
  const wall = useStore((state) => state.wall);

  const homeLogo = useStore((state) => state.homeLogo);
  const homeSubCopy = useStore((state) => state.homeSubCopy);
  const homeButtonContainer = useStore((state) => state.homeButtonContainer);
  const homeMobileWall = useStore((state) => state.homeMobileWall);
  const isDesktop = useStore((state) => state.isDesktop);
  const changeExitTransition = useStore((state) => state.changeExitTransition);

  const gsapCaller = (href: string): void => {
    const args = {
      router: router,
      ropeArr: ropes,
      wall: wall,
      engine: matterEngine,
      logo: homeLogo,
      subCopy: homeSubCopy,
      buttonContainer: homeButtonContainer,
      mobileWall: homeMobileWall,
    };
    exitAnimation(href, args);
  };

  useEffect(() => {
    changeExitTransition(gsapCaller);
  }, [gsapCaller, isDesktop]);

  return <>{children}</>;
}
