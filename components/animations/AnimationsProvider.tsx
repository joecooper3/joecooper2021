import DefaultExit from "@components/animations/DefaultExit";
import HomeExit from "@components/animations/HomeExit";
import WorkExit from "@components/animations/WorkExit";

type AnimationsProviderProps = {
  children: React.ReactNode;
  route: string;
};

export default function AnimationsProvider({
  children,
  route,
}: AnimationsProviderProps): JSX.Element {
  switch (route) {
    case "/":
      return <HomeExit>{children}</HomeExit>;
    case "/work":
      return <WorkExit>{children}</WorkExit>;
    default:
      return <DefaultExit>{children}</DefaultExit>;
  }
}
