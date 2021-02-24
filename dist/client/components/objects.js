import {
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  SphereBufferGeometry,
  DoubleSide,
  GridHelper,
} from "../core/three/build/three.module.js";

const geometry = new PlaneGeometry(1000, 1000);
geometry.rotateX(-Math.PI / 2);
export const invPlane = new Mesh(
  geometry,
  new MeshBasicMaterial({ visible: false, side: DoubleSide })
);

export const grid = new GridHelper(1000, 20, 0x666666, 0x999999);

const rollOverGeo = new SphereBufferGeometry(8, 32, 32);
const rollOverMaterial = new MeshBasicMaterial({
  color: 0xff0000,
  opacity: 0.45,
  transparent: true,
});

export const rollOverMesh = new Mesh(rollOverGeo, rollOverMaterial);

export const sphereGeo = new SphereBufferGeometry(8, 32, 32);
export const sphereMaterial = new MeshLambertMaterial({
  color: "yellow",
  side: DoubleSide,
});
