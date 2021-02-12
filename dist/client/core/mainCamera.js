import { PerspectiveCamera } from "../components/three/build/three.module.js";

export const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

camera.position.set(600, 1200, 1500);
camera.lookAt(0, 0, 0);
