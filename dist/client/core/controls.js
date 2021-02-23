import { MOUSE } from "./three/build/three.module.js";
import { OrbitControls } from "./three/examples/jsm/controls/OrbitControls.js";
import { camera } from "./mainCamera.js";
import { renderer } from "./renderer.js";

// controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.mouseButtons = {
  LEFT: null,
  MIDDLE: MOUSE.ROTATE,
  RIGHT: MOUSE.PAN,
};

controls.maxDistance = 5000;
controls.minDistance = 50;
controls.maxPolarAngle = 1.25;

controls.enabled = false;
