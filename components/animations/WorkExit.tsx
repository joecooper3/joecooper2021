import { useEffect } from "react";
import { useRouter } from "next/router";

import { pageExit } from "@animations/work";
import { useStore } from "@store/store";

export default function WorkExit({ children }) {
  const router = useRouter();
  const workSquareContainer = useStore((state) => state.workSquareContainer);
  const workSquareText = useStore((state) => state.workSquareText);
  const workList = useStore((state) => state.workList);
  const nextPageBg = useStore((state) => state.nextPageBg);
  const isDesktop = useStore((state) => state.isDesktop);
  const changeExitTransition = useStore((state) => state.changeExitTransition);
  const changePreviewImage = useStore((state) => state.changePreviewImage);

  const gsapCaller = (href: string): void => {
    changePreviewImage(null);
    const args = {
      router: router,
      squareContainer: workSquareContainer,
      squareText: workSquareText,
      workList: workList,
      nextPageBg: nextPageBg,
      isDesktop: isDesktop,
    };
    pageExit(href, args);
  };

  useEffect(() => {
    changeExitTransition(gsapCaller);
  }, [
    gsapCaller,
    router,
    workSquareContainer,
    workSquareText,
    nextPageBg,
    isDesktop,
  ]);

  return <>{children}</>;
}
