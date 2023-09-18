// import rive from "@rive-app/canvas";

const height = (document.body.clientHeight * 3) / 4;

window.addEventListener("scroll", () => {
  const scollPercentage = (window.scrollY / height) * 100;
  const scrollPercentageRounded = Math.round(scollPercentage);
});

const r = new rive.Rive({
  src: "tree.riv",
  canvas: document.getElementById("rive"),
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
