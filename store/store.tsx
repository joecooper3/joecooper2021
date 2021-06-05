import Matter from "matter-js";
import create from "zustand";

type AppState = {
  matterEngine: Matter.Engine | null;
  changeMatterEngine: (Engine: Matter.Engine) => void;
  ropes: Matter.Composite[];
  changeRopes: (arr: Matter.Composite[]) => void;
  wall: Matter.Body;
  changeWall: (wall: Matter.Body) => void;
};

export const useStore = create<AppState>((set) => ({
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
}));
