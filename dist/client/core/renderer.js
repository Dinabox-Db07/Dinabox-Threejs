import { WebGLRenderer } from "./three/build/three.module.js";

export const renderer = new WebGLRenderer({
  canvas: zacanvas,
  antialias: true,
  logarithmicDepthBuffer: true,
  powerPreference: "high-performance",
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.capabilities.getMaxAnisotropy();
renderer.setSize(window.innerWidth, window.innerHeight);
