import { useRouter } from "next/router";
import { useStore } from "@store/store";

export function useTransitionLink(href: string) {
  const router = useRouter();
  const nextPageBg = useStore((state) => state.nextPageBg);
  const exitTransition = useStore((state) => state.exitTransition);
  return () => {
    exitTransition(href);
    console.log(exitTransition);
    console.log('fired in hook')
  };
}