import { PerspectiveCamera } from "./three/build/three.module.js";

export const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

camera.position.set(900, 1500, 1800);
camera.lookAt(0, 0, 0);
