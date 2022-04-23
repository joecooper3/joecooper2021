export type PreviewImage = {
  id: string;
  path: string;
  alt: string;
  height: number;
  width: number;
};

export const previewImages: PreviewImage[] = [
  {
    id: "ueb",
    path: "/images/test-screenshot.png",
    alt: "Preview of Unlimited EyeBrowsing site",
    height: 380,
    width: 400,
  },
  {
    id: "starfish",
    path: "/images/work/starfish/starfish-square.png",
    alt: "Preview of Starfish website",
    height: 400,
    width: 400,
  },
  {
    id: "cheer-cards",
    path: "/images/test-screenshot.png",
    alt: "Preview of Cheer Cards",
    height: 380,
    width: 400,
  },
  {
    id: "tap-out",
    path: "/images/test-screenshot-sf.png",
    alt: "Preview of Tap Out game",
    height: 275,
    width: 400,
  },
  {
    id: "knomad",
    path: "/images/work/knomad/knomad-square.png",
    alt: "Preview of Knomad e-commerce site",
    height: 400,
    width: 400,
  },
];
