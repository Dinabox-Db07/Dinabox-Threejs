import { MOUSE } from "../components/three/build/three.module.js";
import { OrbitControls } from "../components/three/examples/jsm/controls/OrbitControls.js";
import { camera } from "./mainCamera.js";
import { renderer } from "./renderer.js";

// controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.mouseButtons = {
  LEFT: null,
  MIDDLE: MOUSE.ROTATE,
  RIGHT: MOUSE.PAN,
};

controls.maxDistance = 2500;
controls.minDistance = 500;
controls.maxPolarAngle = 1.25;

controls.enabled = false;
