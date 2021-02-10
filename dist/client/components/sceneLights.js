import { AmbientLight, DirectionalLight } from "/build/three.module.js";
export const ambientLight = new AmbientLight(0x606060);
export const directionalLight = new DirectionalLight(0xffffff);
directionalLight.position.set(1, 0.75, 0.5).normalize();
