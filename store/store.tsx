import Matter from "matter-js";
import create from "zustand";

type AppState = {
  deviceSize: "lgDesktop" | "smDesktop" | "tablet" | "mobile" | null;
  isDesktop: boolean;
  changeDeviceSize: (
    size: "lgDesktop" | "smDesktop" | "tablet" | "mobile"
  ) => void;
  nextPageBg: "white" | "tan";
  changeNextPageBg: (color: "white" | "tan") => void;

  // home page
  matterEngine: Matter.Engine | null;
  changeMatterEngine: (Engine: Matter.Engine) => void;
  ropes: Matter.Composite[];
  changeRopes: (arr: Matter.Composite[]) => void;
  wall: Matter.Body;
  changeWall: (wall: Matter.Body) => void;

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
  nextPageBg: "white",
  changeNextPageBg: (color) => {
    set({ nextPageBg: color });
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
