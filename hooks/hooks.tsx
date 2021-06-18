import { useStore } from "@store/store";

export function useTransitionLink(href: string, color: "tan" | "white") {
  const exitTransition = useStore((state) => state.exitTransition);

  return () => {
    exitTransition(href, color);
  };
}
