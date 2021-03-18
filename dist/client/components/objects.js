import {
  Mesh,
  CircleGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  SphereBufferGeometry,
  DoubleSide,
} from "../core/three/build/three.module.js";

const geometry = new CircleGeometry(2147483647, 128);
geometry.rotateX(Math.PI / 2);

export const invPlane = new Mesh(
  geometry,
  new MeshBasicMaterial({
    color: 0xaaaaaa,
    side: DoubleSide,
    transparent: true,
    opacity: 0.1,
  })
);

export const inv = new Mesh(
  new CircleGeometry(2147483647, 128),
  new MeshBasicMaterial({
    color: 0xaaaaaa,
    side: DoubleSide,
    opacity: 0.1,
    transparent: true,
  })
);

const rollOverGeo = new SphereBufferGeometry(4, 32, 32);
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
