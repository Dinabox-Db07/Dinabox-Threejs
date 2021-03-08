import { WebGLRenderer } from "./three/build/three.module.js";

export const renderer = new WebGLRenderer({
  antialias: true,
  canvas: zacanvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
