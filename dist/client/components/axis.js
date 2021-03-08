import {
  LineBasicMaterial,
  LineDashedMaterial,
  Vector3,
  BufferGeometry,
  Line,
  LineSegments,
} from "../core/three/build/three.module.js";

const red = new LineBasicMaterial({ color: 0xff0000 });
const green = new LineBasicMaterial({ color: 0x00ff00 });
const blue = new LineBasicMaterial({ color: 0x0000ff });

const redDashed = new LineDashedMaterial({
  color: 0xff0000,
  dashSize: 3,
  gapSize: 4,
});
const greenDashed = new LineDashedMaterial({
  color: 0x00ff00,
  dashSize: 3,
  gapSize: 4,
});
const blueDashed = new LineDashedMaterial({
  color: 0x0000ff,
  dashSize: 3,
  gapSize: 4,
});

const XPoints = [];
XPoints.push(new Vector3(0, 0, 0));
XPoints.push(new Vector3(2147483647, 0, 0));
const YPoints = [];
YPoints.push(new Vector3(0, 0, 0));
YPoints.push(new Vector3(0, 2147483647, 0));
const ZPoints = [];
ZPoints.push(new Vector3(0, 0, 0));
ZPoints.push(new Vector3(0, 0, -2147483647));

const IXPoints = [];
IXPoints.push(new Vector3(0, 0, 0));
IXPoints.push(new Vector3(-2147483647, 0, 0));
const IYPoints = [];
IYPoints.push(new Vector3(0, 0, 0));
IYPoints.push(new Vector3(0, -2147483647, 0));
const IZPoints = [];
IZPoints.push(new Vector3(0, 0, 0));
IZPoints.push(new Vector3(0, 0, 2147483647));

const XGeometry = new BufferGeometry().setFromPoints(XPoints);
const YGeometry = new BufferGeometry().setFromPoints(YPoints);
const ZGeometry = new BufferGeometry().setFromPoints(ZPoints);

const IXGeometry = new BufferGeometry().setFromPoints(IXPoints);
const IYGeometry = new BufferGeometry().setFromPoints(IYPoints);
const IZGeometry = new BufferGeometry().setFromPoints(IZPoints);

export const XAxis = new Line(XGeometry, red);
export const YAxis = new Line(YGeometry, blue);
export const ZAxis = new Line(ZGeometry, green);

export const IXAxis = new LineSegments(IXGeometry, redDashed);
export const IYAxis = new LineSegments(IYGeometry, blueDashed);
export const IZAxis = new LineSegments(IZGeometry, greenDashed);

IXAxis.computeLineDistances();
IYAxis.computeLineDistances();
IZAxis.computeLineDistances();
