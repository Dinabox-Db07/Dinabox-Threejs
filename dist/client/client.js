import * as THREE from "./core/three/build/three.module.js";
import Stats from "./core/stats.js/src/Stats.js";
import { directionalLight, ambientLight } from "./core/sceneLights.js";
import { sphereGeo, sphereMaterial, invPlane } from "./components/objects.js";
import {
  XAxis,
  YAxis,
  ZAxis,
  IXAxis,
  IYAxis,
  IZAxis,
} from "./components/axis.js";
import { camera } from "./core/mainCamera.js";
import { controls } from "./core/controls.js";
import { renderer } from "./core/renderer.js";

let scene,
  count = 0;
let raycaster,
  mouse,
  shape,
  INTERSECTED,
  objects = [],
  controlPoints = [],
  group = new THREE.Group(),
  stats = new Stats();

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.name = "Projeto Three";
  scene.background = new THREE.Color(0xf0f8ff);

  stats.showPanel(0);
  document.getElementById("status").appendChild(stats.dom);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  group.add(
    ambientLight,
    directionalLight,
    XAxis,
    YAxis,
    ZAxis,
    IXAxis,
    IYAxis,
    IZAxis,
    invPlane
  );

  objects.push(invPlane);
  scene.add(group);

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("keypress", onDocumentKeyPress, false);

  window.addEventListener("resize", onWindowResize, false);

  console.log(
    `Name: ${scene.name} \nID: ${scene.id} \nRevision: r${THREE.REVISION}`
  );
}

const addLine = () => {
  const lineGeom = new THREE.Geometry();
  const line = new THREE.Line(
    lineGeom,
    new THREE.LineBasicMaterial({ color: "black" })
  );
  line.name = "Linha";

  let arr = scene.children;
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    if (element.name === "Ponto Dois") {
      lineGeom.vertices.push(element.position);
    }
  }

  scene.add(line);
};

const removePoints = () => {
  let arr = scene.children;

  for (let idx = 0; idx < arr.length; idx++) {
    const elmt = arr[idx];

    if (elmt.name === "Ponto Dois") {
      scene.remove(elmt);
    }
  }

  count = 0;
};

function mouseSetXY(evt) {
  mouse.set(
    (evt.clientX / window.innerWidth) * 2 - 1,
    -(evt.clientY / window.innerHeight) * 2 + 1
  );
}

function onDocumentMouseMove(evt) {
  evt.preventDefault();
  mouseSetXY(evt);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED)
        INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex(0xff0000);
    }
  } else {
    if (INTERSECTED)
      INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

    INTERSECTED = null;
  }
}

function onDocumentMouseDown(evt) {
  evt.preventDefault();
  mouseSetXY(evt);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);
  const point = new THREE.Mesh(sphereGeo, sphereMaterial);

  if (intersects.length > 0) {
    if (count <= 5) {
      controlPoints[count] = intersects[0].point.clone();

      point.position.copy(intersects[0].point);

      scene.add(point);
      point.name = "Ponto Dois";

      count++;
    } else {
      shape = new THREE.Shape();
      shape.moveTo(controlPoints[0].x, -controlPoints[0].z);
      shape.lineTo(controlPoints[1].x, -controlPoints[1].z);
      shape.lineTo(controlPoints[2].x, -controlPoints[2].z);
      shape.lineTo(controlPoints[3].x, -controlPoints[3].z);
      shape.lineTo(controlPoints[0].x, -controlPoints[0].z);

      let extrudeSettings = {
        steps: 0,
        depth: 0,
        bevelEnabled: false,
      };
      let extrudeGeom = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
      extrudeGeom.rotateX(-Math.PI / 2);
      let form = new THREE.Mesh(
        extrudeGeom,
        new THREE.MeshLambertMaterial({
          color: "green",
          side: THREE.DoubleSide,
        })
      );

      scene.add(form);
      form.position.setY(0);

      controlPoints = [];
      removePoints();
      count = 0;
    }

    if (count <= -1) {
      count++;
    }

    addLine();
  }
}

function onDocumentKeyPress(evt) {
  switch (evt.keyCode) {
    case 49:
      controls.enabled = false;
      break;

    case 50:
      controls.enabled = true;
      break;

    case 51:
      console.log(scene.children[0].children);
      break;
  }
}

function animate() {
  requestAnimationFrame(animate);
  stats.begin();
  stats.end();

  render();
}

function render() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
