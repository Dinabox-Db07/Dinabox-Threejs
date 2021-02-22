import * as THREE from "./components/three/build/three.module.js";
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
  scene.name = "Projeto Three";
  scene.background = new THREE.Color(0xf0f0f0);

  //grid
  scene.add(grid);

  // raycaster(cursor)
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  scene.add(rollOverMesh);

  // plane
  scene.add(invPlane);
  objects.push(invPlane);

  // lights
  scene.add(ambientLight, directionalLight);

  // mouse listeners
  window.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("mousedown", onDocumentMouseDown, false);

  // key listener
  window.addEventListener("keydown", onDocumentKeyDown, false);
  window.addEventListener("keyup", onDocumentKeyUp, false);
  window.addEventListener("keypress", onDocumentKeyPress, false);

  /* reajustar tamanho da janela */
  window.addEventListener("resize", onWindowResize, false);

  //
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

/* função para mover o mouse */
function onDocumentMouseMove(evt) {
  evt.preventDefault();
  mouseSetXY(evt);

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
  mouseSetXY(evt);

  // raycaster
  raycaster.setFromCamera(mouse, camera);

  // intersect objects
  const intersects = raycaster.intersectObjects(objects);

  // points
  const point = new THREE.Mesh(sphereGeo, sphereMaterial);
  const point2 = new THREE.Mesh(sphereGeo, sphereMaterial);

  /* função para remover os pontos */
  function removePoints() {
    let array = scene.children;

    for (let idx = 0; idx < array.length; idx++) {
      const elmt = array[idx];
      if (elmt.name === "firstPoint") {
        scene.remove(elmt);
      }

      if (elmt.name === "finalPoint") {
        scene.remove(elmt);
      }
    }
  }

  // complete the line
  const whenCompleteLine = () => {
    // points position
    let px = point2.position.x;
    let py = point2.position.y;
    let pz = point2.position.z;

    // geometry
    const planeGeo = new THREE.PlaneGeometry(150, 200);

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
    plane.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

    let setPosSmol = plane.position.set(px + 75, 25, pz - 100);

    if (px <= -25) {
      setPosSmol;
    }

    scene.add(plane);
    objects.push(plane);

    /* para resetar os pontos */
    removePoints();

    count = -1;
  };

  const addLine = () => {
    // line
    const lineGeom = new THREE.Geometry();
    const line = new THREE.Line(
      lineGeom,
      new THREE.LineBasicMaterial({ color: "red" })
    );
    line.name = "Linha";

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
    scene.add(line);
  };

  if (intersects.length) {
    const intersect = intersects[0];

    /* if statement para verificar se o shift
    está pressionado para deletar o objeto */
    if (isShiftDown) {
      if (intersect.object !== invPlane) {
        scene.remove(intersect.object);

        objects.splice(objects.indexOf(intersect.object), 1);

        count--;
      }

      /* else if statement para a criação
      do primeiro ponto

      else if statement para a criação
      do segundo ponto já com a linha */
    } else if (count === 0) {
      point.name = "firstPoint";

      /* Travar a posição do ponto
      no centro da grade */
      point.position.copy(intersect.point).add(intersect.face.normal);
      point.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
      scene.add(point);
      objects.push(point);

      /* Adicione +1 no contador */
      count++;

      //
    } else if (count >= 1) {
      point2.name = "finalPoint";

      // position lock in plane
      point2.position.copy(intersect.point).add(intersect.face.normal);
      point2.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

      //
      scene.add(point2);
      objects.push(point2);

      console.log(point2.position);

      // count for creating the plane
      if (count === 4) {
        whenCompleteLine();
      }

      //
      count++;

      //
    }

    /*
    Para prevenir que o contador chegue a -1
    e impossibilite a pessoa de criar pontos
    */
    if (count <= -1) {
      count++;
    }

    addLine();
  }
}

// Activate controls
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

// SHIFT
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

// animar a cena
function animate() {
  requestAnimationFrame(animate);

  render();
}

// renderizar a cena
function render() {
  renderer.render(scene, camera);
}

/* Ajustar a janela e a câmera
quando o tamanho da mesma for
alterado */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();
