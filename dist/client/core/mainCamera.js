import { PerspectiveCamera } from "./three/build/three.module.js";

export const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  50000
);

camera.position.set(600, 900, 1200);
camera.lookAt(0, 0, 0);
