gsap.registerPlugin(ScrollTrigger);

function getDynamicDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

gsap.to(".box", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
  x: () => window.innerWidth - 200,
  y: () => window.innerHeight - 200,
  width: 200,
  height: 200,
});
