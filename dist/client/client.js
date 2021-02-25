import * as THREE from "./core/three/build/three.module.js";
import { WEBGL } from "./core/three/examples/jsm/WebGL.js";
import { camera } from "./core/mainCamera.js";
import { directionalLight, ambientLight } from "./core/sceneLights.js";
import {
  sphereGeo,
  sphereMaterial,
  rollOverMesh,
  invPlane,
  grid,
} from "./components/objects.js";
import { controls } from "./core/controls.js";
import { renderer } from "./core/renderer.js";

let scene,
  count = 0;
let raycaster,
  mouse,
  objects = [],
  isShiftDown = false;

function init() {
  scene = new THREE.Scene();
  scene.name = "Projeto Three";
  scene.background = new THREE.Color(0xf0f0f0);

  scene.add(grid);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  scene.add(rollOverMesh);

  scene.add(invPlane);
  objects.push(invPlane);

  scene.add(ambientLight, directionalLight);

  window.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("mousedown", onDocumentMouseDown, false);

  window.addEventListener("keydown", onDocumentKeyDown, false);
  window.addEventListener("keyup", onDocumentKeyUp, false);
  window.addEventListener("keypress", onDocumentKeyPress, false);

  window.addEventListener("resize", onWindowResize, false);

  console.log(
    `Name: ${scene.name} \nUUID: ${scene.uuid} \nID: ${scene.id} \nType: ${scene.type} \nVisible: ${scene.visible}`
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
      .addScalar(25);
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
    let py = point.position.y;
    let pz = point.position.z;

    const IShape = new THREE.Shape();

    IShape.lineTo(py, pz);

    const extrudeSettings = {
      depth: 1,
      bevelEnabled: true,
      bevelSegments: 1,
      steps: 1,
      bevelSize: 1,
      bevelThickness: 1,
    };

    const shapeGeo = new THREE.ExtrudeGeometry(IShape, extrudeSettings);

    const shape = new THREE.Mesh(
      shapeGeo,
      new THREE.MeshPhongMaterial({ color: "green" })
    );

    let arr = scene.children;
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];

      if (element.name === "Ponto Dois") {
        shapeGeo.vertices.push(element.position);
      }
    }

    scene.add(shape);
    objects.push(shape);

    shape.rotateX(Math.PI / 2);
    shape.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
    shape.position.set(px, 25, pz);

    // removePoints();

    // count = -1;
  };

  const addLine = () => {
    const lineGeom = new THREE.Geometry();
    const line = new THREE.Line(
      lineGeom,
      new THREE.LineBasicMaterial({ color: "red" })
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
      point.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
      scene.add(point);
      objects.push(point);
      whenCompleteLine();

      count++;
    }

    console.log(point.position);
    console.log(scene);

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

if (WEBGL.isWebGLAvailable()) {
  init();
  animate();
} else {
  const warning = WEBGL.getWebGLErrorMessage();
  const container = document.createElement("div");
  document.body.appendChild(container, warning);
}
