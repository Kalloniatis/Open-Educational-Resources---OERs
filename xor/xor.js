
// document.addEventListener('DOMContentLoaded', function () {
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 40);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var ambLight = new THREE.AmbientLight( 0x909090);
scene.add(ambLight);

var dirLight = new THREE.DirectionalLight( 0xfffff, 1);
dirLight.position.set(1,1,1);
scene.add(dirLight);

var btryGeom = new THREE.CylinderGeometry( 1, 1, 5, 32 );
var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"skyblue"}));
var tipGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.5, 32);
tipGeom.translate(0, 2.555, 0);
var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"darkgray"}));
battery.add(tip);
battery.rotation.z = -Math.PI / 2;
battery.position.set(23, 10, 0);
scene.add(battery);

function addBall(x, y, z){
  var ballGeom = new THREE.SphereGeometry(0.5, 32, 24);
  var ball = new THREE.Mesh(ballGeom, new THREE.MeshPhongMaterial({color:"red"}));
  ball.position.set(x, y, z);
  scene.add(ball);
  return ball;
}

var connector = addBall(-14, 14, 0);
var connector1 = addBall(-12, 10, 0);
var connector2 = addBall(8, 10, 0);
var connector3 = addBall(10, 14, 0);
var mount = addBall(-18, 10, 0);
var mount1 = addBall(14, 10, 0);

var switchGeom = new THREE.BoxGeometry(6, .5, .5);
switchGeom.translate(3, 0, 0);
var swtch = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch.rotation.z = Math.PI / 4;
var swtch1 = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch1.rotation.z = 3 * Math.PI / 4;
mount.add(swtch);
mount1.add(swtch1);

var lampBottomGeom = new THREE.CylinderGeometry(1, 1, 2, 32);
var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "gray"}));
lampBottom.position.set(0, -10, 0);
scene.add(lampBottom);
var lampBulbGeom = new THREE.SphereGeometry(3, 32, 24);
lampBulbGeom.translate(0, 3, 0);
var lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
lampBottom.add(lampBulb);

var wireShape = new THREE.Shape();
( function roundedRect( ctx, x, y, width, height, radius ){
  
   ctx.moveTo( x + 39, y + height);
  ctx.lineTo( x + width - radius, y + height) ;
  ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
  ctx.lineTo( x + width, y + radius );
  ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
  ctx.lineTo( x + radius, y );
  ctx.quadraticCurveTo( x, y, x, y + radius );
  ctx.moveTo( x, y + radius );
  ctx.lineTo( x, y + height - radius );
  ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
  ctx.lineTo( x + 7, y + height) ;

} )( wireShape, -25, -10, 60, 20, 5  );

var wirePoints = wireShape.createPointsGeometry();
var wire = new THREE.Line(wirePoints, new THREE.LineBasicMaterial({color: "blue"}));
scene.add(wire);

var lgeometry = new THREE.Geometry();
lgeometry.vertices.push(new THREE.Vector3( -14, 14, 0) );
lgeometry.vertices.push(new THREE.Vector3( 8, 10, 0) );
var sline = new THREE.Line(lgeometry,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline);

var lgeometry1 = new THREE.Geometry();
lgeometry1.vertices.push(new THREE.Vector3( -12, 10, 0) );
lgeometry1.vertices.push(new THREE.Vector3( 10, 14, 0) );
var sline1 = new THREE.Line(lgeometry1,  new THREE.LineBasicMaterial({color: "yellow"}));
scene.add(sline1);

var lgeometry2 = new THREE.Geometry();
lgeometry2.vertices.push(new THREE.Vector3( 14, 10, 0) );
lgeometry2.vertices.push(new THREE.Vector3( 23, 10, 0) );
var sline2 = new THREE.Line(lgeometry2,  new THREE.LineBasicMaterial({color: "yellow"}));
scene.add(sline2);



function setOn(){
  wire.material.color.setStyle("blue");
  sline.material.color.setStyle("yellow");
  sline1.material.color.setStyle("blue");
  lampBulb.material.color.setStyle("white");
  lampBulb.material.transparent = true;
  swtch.rotation.z = 0;
  swtch1.rotation.z = Math.PI;
}

function setOn1(){
  wire.material.color.setStyle("yellow");
  sline.material.color.setStyle("yellow");
  sline1.material.color.setStyle("blue");
  lampBulb.material.color.setStyle("yellow");
  lampBulb.material.transparent = false;
  swtch.rotation.z = Math.PI / 4;
  swtch1.rotation.z = Math.PI;
}

function setOn2(){
  wire.material.color.setStyle("yellow");
  sline.material.color.setStyle("blue");
  sline1.material.color.setStyle("yellow");
  lampBulb.material.color.setStyle("yellow");
  lampBulb.material.transparent = false;
  swtch.rotation.z = 0;
  swtch1.rotation.z = 3 * Math.PI / 4;
}


function setOff(){
  wire.material.color.setStyle("blue");
  sline.material.color.setStyle("blue");
  sline1.material.color.setStyle("yellow");
  lampBulb.material.color.setStyle("white");
  lampBulb.material.transparent = true;
  swtch.rotation.z = Math.PI / 4;
  swtch1.rotation.z = 3 * Math.PI / 4;
}


document.getElementById("onoff").addEventListener('click', setOn);
document.getElementById("onoff1").addEventListener('click', setOn1);
document.getElementById("onoff2").addEventListener('click', setOn2);
document.getElementById("onoff3").addEventListener('click', setOff);


render();
function render(){
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
//});
