import * as THREE from "../../three/build/three.module.js";
import { camera } from "./core/mainCamera.js";
import { directionalLight, ambientLight } from "./core/sceneLights.js";
import {
  sphereGeo,
  sphereMaterial,
  rollOverMesh,
  invPlane,
  gridHelper,
} from "./components/objects.js";
import { controls } from "./core/controls.js";
import { renderer } from "./core/renderer.js";
// variables
let scene,
  plane,
  count = 0;
let raycaster,
  mouse,
  objects = [],
  isShiftDown = false;
// starting function

function init() {
  // scene
  scene = new THREE.Scene();
  scene.name = "Projeto Ts";
  scene.background = new THREE.Color(0xf0f0f0);

  // grid
  scene.add(gridHelper);

  // raycaster(cursor)
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  scene.add(rollOverMesh);

  // plane
  scene.add(invPlane);
  objects.push(invPlane);

  // lights
  scene.add(ambientLight, directionalLight);

  // listeners
  window.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("mousedown", onDocumentMouseDown);
  window.addEventListener("keydown", onDocumentKeyDown);
  window.addEventListener("keyup", onDocumentKeyUp);
  window.addEventListener("keypress", onKeyPress);

  // window resize
  window.addEventListener("resize", onWindowResize, false);
  console.log(
    `Name: ${scene.name} \nUUID: ${scene.uuid} \nID: ${scene.id} \nType: ${scene.type} \nVisible: ${scene.visible}`
  );
}

// set X & Y
function mouseSetXY(evt) {
  mouse.set(
    (evt.clientX / window.innerWidth) * 2 - 1,
    -(evt.clientY / window.innerHeight) * 2 + 1
  );
}

// mouse move
function onDocumentMouseMove(evt) {
  evt.preventDefault();

  // set X&Y
  mouseSetXY(evt);

  // cursor
  raycaster.setFromCamera(mouse, camera);

  // intersect objects
  const intersects = raycaster.intersectObjects(objects);

  //
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

  // set X&Y
  mouseSetXY(evt);

  // raycaster
  raycaster.setFromCamera(mouse, camera);

  // intersect objects
  const intersects = raycaster.intersectObjects(objects);

  // points
  const point = new THREE.Mesh(sphereGeo, sphereMaterial);
  const point2 = new THREE.Mesh(sphereGeo, sphereMaterial);

  // complete the line
  const whenCompleteLine = () => {
    // points position
    let posX = point2.position.x;
    let posY = point2.position.y;
    let posZ = point2.position.z;

    // geometry
    const planeGeo = new THREE.PlaneGeometry(posX * 2, posZ * 2);

    // material
    const planeMat = new THREE.MeshLambertMaterial({
      color: "green",
      side: THREE.DoubleSide,
    });

    // mesh
    const plane = new THREE.Mesh(planeGeo, planeMat);

    // name
    plane.name = "Plane";

    // plane positions
    plane.rotateX(-Math.PI / 2);
    plane.position.setY(posY);

    //
    scene.add(plane);
    objects.push(plane);
  };

  const addLine = () => {
    // line
    const lineGeom = new THREE.Geometry();
    const line2 = new THREE.Line(
      lineGeom,
      new THREE.LineBasicMaterial({ color: "red" })
    );
    line2.name = "Linha";

    // arr scene
    let arr = scene.children;

    // loop
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];

      // element 1
      if (element.name === "firstPoint") {
        lineGeom.vertices.push(element.position);
      }

      // element 2
      if (element.name === "finalPoint") {
        lineGeom.vertices.push(element.position);
      }
    }

    //
    scene.add(line2);
  };

  console.log(count);

  //
  if (intersects.length) {
    const intersect = intersects[0];

    // if statement for deleting object
    if (isShiftDown) {
      if (intersect.object !== plane) {
        scene.remove(intersect.object);

        objects.splice(objects.indexOf(intersect.object), 1);

        count--;
      }

      // if statement for creating the first point
      // else if statement for creating the second point
    } else if (count === 0) {
      point.name = "firstPoint";

      //position lock in plane
      point.position.copy(intersect.point).add(intersect.face.normal);
      point.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
      scene.add(point);
      objects.push(point);

      //
      count++;

      //
    } else if (count >= 1) {
      point2.name = "finalPoint";

      // position lock in plane
      point2.position.copy(intersect.point).add(intersect.face.normal);
      point2.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

      // add line function
      addLine();

      //
      scene.add(point2);
      objects.push(point2);

      // count for creating the plane
      if (count === 5) {
        whenCompleteLine();
      }

      //
      count++;
    }
    if (count <= -1) {
      count++;
    }
  }
}

function onKeyPress(evt) {
  switch (evt.keyCode) {
    case 49:
      controls.enabled = false;
      break;

    case 50:
      controls.enabled = true;
      break;
  }
}

// SHIFT
function onDocumentKeyDown(evt) {
  switch (evt.keyCode) {
    case 16:
      isShiftDown = true;
      break;
  }
}

// SHIFT
function onDocumentKeyUp(evt) {
  switch (evt.keyCode) {
    case 16:
      isShiftDown = false;
      break;
  }
}

// animate the scene
function animate() {
  requestAnimationFrame(animate);

  render();
}

// render the scene
function render() {
  renderer.render(scene, camera);
}

// resize the camera and scene when window resizes
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();
