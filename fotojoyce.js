
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".fotojoyce", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 3,
    scale: 2,
    scrollTrigger: {
      trigger: ".fotojoyce",
      start: "top-=200 center",
      end: "bottom-=-200 center",
      toggleActions: "restart reverse restart reverse"
    }
  });
  






