import Matter from "matter-js";
import create from "zustand";

type ExitTransition = (href: string, color?: string) => void;

type AppState = {
  deviceSize: "lgDesktop" | "smDesktop" | "tablet" | "mobile" | null;
  isDesktop: boolean;
  changeDeviceSize: (
    size: "lgDesktop" | "smDesktop" | "tablet" | "mobile"
  ) => void;
  exitTransition: ExitTransition;
  changeExitTransition: (ExitTransition) => void;
  logoVisible: boolean;
  changeLogoVisible: (bool: boolean) => void;

  // home page
  matterEngine: Matter.Engine | null;
  changeMatterEngine: (Engine: Matter.Engine) => void;
  ropes: Matter.Composite[];
  changeRopes: (arr: Matter.Composite[]) => void;
  wall: Matter.Body;
  changeWall: (wall: Matter.Body) => void;
  homeLogo: HTMLHeadingElement;
  changeHomeLogo: (el: HTMLHeadingElement) => void;
  homeSubCopy: HTMLParagraphElement;
  changeHomeSubCopy: (el: HTMLParagraphElement) => void;
  homeButtonContainer: HTMLDivElement;
  changeHomeButtonContainer: (el: HTMLDivElement) => void;
  homeMobileWall: HTMLDivElement;
  changeHomeMobileWall: (el: HTMLDivElement) => void;

  // work landing page
  previewImage: string;
  changePreviewImage: (id: string) => void;
  workSquareContainer: HTMLDivElement;
  changeWorkSquareContainer: (el: HTMLDivElement) => void;
  workSquareText: HTMLHeadingElement;
  changeWorkSquareText: (el: HTMLHeadingElement) => void;
  workList: HTMLUListElement;
  changeWorkList: (el: HTMLUListElement) => void;
};

export const useStore = create<AppState>((set) => ({
  // global
  deviceSize: null,
  isDesktop: null,
  changeDeviceSize: (size) => {
    set({ deviceSize: size });
    if (size === "lgDesktop" || size === "smDesktop") {
      set({ isDesktop: true });
    } else if (size === "tablet" || size === "mobile") {
      set({ isDesktop: false });
    } else {
      set({ isDesktop: null });
    }
  },
  exitTransition: null,
  changeExitTransition: (func) => {
    set({ exitTransition: func });
  },
  logoVisible: false,
  changeLogoVisible: (bool) => {
    set({ logoVisible: bool });
  },

  // landing page
  matterEngine: null,
  changeMatterEngine: (engine) => {
    set({ matterEngine: engine });
  },
  ropes: [],
  changeRopes: (arr) => {
    set({ ropes: arr });
  },
  wall: null,
  changeWall: (wall) => {
    set({ wall: wall });
  },
  homeLogo: null,
  changeHomeLogo: (el) => {
    set({ homeLogo: el });
  },
  homeSubCopy: null,
  changeHomeSubCopy: (el) => {
    set({ homeSubCopy: el });
  },
  homeButtonContainer: null,
  changeHomeButtonContainer: (el) => {
    set({ homeButtonContainer: el });
  },
  homeMobileWall: null,
  changeHomeMobileWall: (el) => {
    set({ homeMobileWall: el });
  },

  // work landing page
  previewImage: null,
  changePreviewImage: (id) => {
    set({ previewImage: id });
  },
  workSquareContainer: null,
  changeWorkSquareContainer: (el) => {
    set({ workSquareContainer: el });
  },
  workSquareText: null,
  changeWorkSquareText: (el) => {
    set({ workSquareText: el });
  },
  workList: null,
  changeWorkList: (el) => {
    set({ workList: el });
  },
}));
