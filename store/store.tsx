import Matter from "matter-js";
import create from "zustand";

import { PreviewImage, previewImages } from "@utils/work";

type AppState = {
  matterEngine: Matter.Engine | null;
  changeMatterEngine: (Engine: Matter.Engine) => void;
  ropes: Matter.Composite[];
  changeRopes: (arr: Matter.Composite[]) => void;
  wall: Matter.Body;
  changeWall: (wall: Matter.Body) => void;
  previewImage: PreviewImage | null;
  changePreviewImage: (id: string) => void;
};

export const useStore = create<AppState>((set) => ({
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
    const selectedImage = previewImages.find((obj) => id === obj.id);
    set({ previewImage: selectedImage });
  },
}));
