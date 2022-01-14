import gsap from "gsap";

export const heroEnter = (container: HTMLDivElement): void => {
  gsap.to(container, {
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 0.6,
    startAt: { y: 300, opacity: 0 },
  });
};
