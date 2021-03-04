import * as THREE from "./core/three/build/three.module.js";
import { camera } from "./core/mainCamera.js";
import { directionalLight, ambientLight } from "./core/sceneLights.js";
import {
  sphereGeo,
  sphereMaterial,
  rollOverMesh,
  invPlane,
} from "./components/objects.js";
import {
  XAxis,
  YAxis,
  ZAxis,
  IXAxis,
  IYAxis,
  IZAxis,
} from "./components/axis.js";
import { controls } from "./core/controls.js";
import { renderer } from "./core/renderer.js";

let scene,
  count = 0;
let raycaster,
  mouse,
  objects = [],
  isShiftDown = false;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.name = "Projeto Three";
  scene.background = new THREE.Color(0xf0f8ff);

  scene.add(XAxis, YAxis, ZAxis, IXAxis, IYAxis, IZAxis);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  scene.add(rollOverMesh);

  scene.add(invPlane);
  objects.push(invPlane);

  scene.add(ambientLight, directionalLight);

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("keydown", onDocumentKeyDown, false);
  document.addEventListener("keyup", onDocumentKeyUp, false);
  document.addEventListener("keypress", onDocumentKeyPress, false);

  window.addEventListener("resize", onWindowResize, false);

  console.log(
    `Name: ${scene.name} \nID: ${scene.id} \nRevision: r${THREE.REVISION}`
  );
}

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

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const intersect = intersects[0];
    rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
    rollOverMesh.position
      .divideScalar(50)
      .floor()
      .multiplyScalar(50)
      .addScalar(0);
  }

  render();
}

function onDocumentMouseDown(evt) {
  evt.preventDefault();
  mouseSetXY(evt);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  const point = new THREE.Mesh(sphereGeo, sphereMaterial);

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

  const whenCompleteLine = () => {
    let px = point.position.x;
    let pz = point.position.z;

    const l = 150,
      w = 150;

    const geometry = new THREE.BoxBufferGeometry(l, 1, w);

    const material = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    objects.push(mesh);

    mesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(0);
    mesh.position.set(px + 75, 0, pz - 75);

    removePoints();

    count = 0;
  };

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

  if (intersects.length) {
    const intersect = intersects[0];

    if (isShiftDown) {
      if (intersect.object !== invPlane) {
        scene.remove(intersect.object);

        objects.splice(objects.indexOf(intersect.object), 1);

        count--;
      }
    } else if (count >= 0) {
      point.name = "Ponto Dois";

      point.position.copy(intersect.point).add(intersect.face.normal);
      point.position.divideScalar(50).floor().multiplyScalar(50).addScalar(0);
      scene.add(point);
      objects.push(point);

      count++;
    }

    console.log(point.position);

    if (count === 6) {
      whenCompleteLine();
      // removePoints();
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
  }
}

function onDocumentKeyDown(evt) {
  switch (evt.keyCode) {
    case 16:
      isShiftDown = true;
      break;
  }
}

function onDocumentKeyUp(evt) {
  switch (evt.keyCode) {
    case 16:
      isShiftDown = false;
      break;
  }
}

function animate() {
  requestAnimationFrame(animate);

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
