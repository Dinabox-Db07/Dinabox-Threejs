import {
  Mesh,
  CylinderGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  SphereBufferGeometry,
  DoubleSide,
} from "../core/three/build/three.module.js";

const geometry = new CylinderGeometry(2147483647, 0, 1, 128);

export const invPlane = new Mesh(
  geometry,
  new MeshBasicMaterial({
    color: 0xaaaaaa,
    transparent: true,
    opacity: 0.1,
  })
);

const rollOverGeo = new SphereBufferGeometry(8, 32, 32);
const rollOverMaterial = new MeshBasicMaterial({
  color: 0xff0000,
  opacity: 0.45,
  transparent: true,
});

export const rollOverMesh = new Mesh(rollOverGeo, rollOverMaterial);

export const sphereGeo = new SphereBufferGeometry(4, 32, 32);
export const sphereMaterial = new MeshLambertMaterial({
  color: "yellow",
  side: DoubleSide,
});
