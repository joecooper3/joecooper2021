import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/store";

export default function DefaultExit({ children }) {
  const router = useRouter();
  const changeExitTransition = useStore((state) => state.changeExitTransition);

  useEffect(() => {
    changeExitTransition((href: string) => {
      router.push(href);
    })
  }, [])

  return <>{children}</>;
}