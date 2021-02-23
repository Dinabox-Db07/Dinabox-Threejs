import {
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  SphereBufferGeometry,
  DoubleSide,
  GridHelper,
} from "../core/three/build/three.module.js";

// invPlane
const geometry = new PlaneGeometry(1000 * 2, 1000 * 2);
geometry.rotateX(-Math.PI / 2);
export const invPlane = new Mesh(
  geometry,
  new MeshBasicMaterial({ visible: false, side: DoubleSide })
);

// another plane
/* const geometryPlane = new PlaneGeometry(1000, 1000);
export const placeHolder = new Mesh(
  geometryPlane,
  new MeshBasicMaterial({
    color: "purple",
    side: DoubleSide,
    opacity: 0.125,
    transparent: true,
  })
);

export const newPlane = placeHolder.clone();
placeHolder.rotateX(Math.PI / 2);
newPlane.rotateX(Math.PI / 2);

placeHolder.position.set(-500, 0, -500);
newPlane.position.set(500, 0, 500);

const placeGeo = new PlaneGeometry(1000, 1000);
 export const placePlane = new Mesh(
  placeGeo,
  new MeshBasicMaterial({
    color: "red",
    side: DoubleSide,
    opacity: 0.125,
    transparent: true,
  })
);

export const newPlace = placePlane.clone();
placePlane.rotateX(Math.PI / 2);
newPlace.rotateX(Math.PI / 2);

placePlane.position.set(500, 0, -500);
newPlace.position.set(-500, 0, 500); */

// grid
export const grid = new GridHelper(1000 * 2, 20 * 2, 0x666666, 0x999999);

// roll-over helpers
const rollOverGeo = new SphereBufferGeometry(8, 32, 32);
const rollOverMaterial = new MeshBasicMaterial({
  color: 0xff0000,
  opacity: 0.45,
  transparent: true,
});

export const rollOverMesh = new Mesh(rollOverGeo, rollOverMaterial);

// sphere
export const sphereGeo = new SphereBufferGeometry(8, 32, 32);
export const sphereMaterial = new MeshLambertMaterial({
  color: "yellow",
  side: DoubleSide,
});
