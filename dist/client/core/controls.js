import { MOUSE } from "./three/build/three.module.js";
import { OrbitControls } from "./three/examples/jsm/controls/OrbitControls.js";
import { camera } from "./mainCamera.js";
import { renderer } from "./renderer.js";

export const controls = new OrbitControls(camera, renderer.domElement);
controls.mouseButtons = {
  LEFT: MOUSE.PAN,
  MIDDLE: MOUSE.ROTATE,
  RIGHT: MOUSE.DOLLY,
};

controls.maxDistance = 12000;
controls.minDistance = 50;
controls.minPolarAngle = 0.1;
controls.maxPolarAngle = 1.4;

controls.enabled = true;
