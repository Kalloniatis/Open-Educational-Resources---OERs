//var x = document.getElementById("onoff");
//x.innerHTML ="MPLAMPLA";
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
battery.position.set(28, 10, 0);
scene.add(battery);

function addBall(x, y, z){
  var ballGeom = new THREE.SphereGeometry(0.5, 32, 24);
  var ball = new THREE.Mesh(ballGeom, new THREE.MeshPhongMaterial({color:"red"}));
  ball.position.set(x, y, z);
  scene.add(ball);
  return ball;
}


var connector = addBall(18, 10, 0);
var mount = addBall(12, 10, 0);
var connector1 = addBall(6, 10, 0);
var mount1 = addBall(0, 10, 0);
var connector2 = addBall(-11, 15, 0);
var mount2 = addBall(-17, 15, 0);
var connector3 = addBall(-11, 5, 0);
var mount3 = addBall(-17, 5, 0);

var switchGeom = new THREE.BoxGeometry(6, .5, .5);
switchGeom.translate(3, 0, 0);
var swtch = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch.rotation.z = Math.PI / 4;
var swtch1 = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch1.rotation.z = Math.PI / 4;
var swtch2 = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch2.rotation.z = Math.PI / 4;
var swtch3 = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
swtch3.rotation.z = Math.PI / 4;
mount.add(swtch);
mount1.add(swtch1);
mount2.add(swtch2);
mount3.add(swtch3);

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
  
  ctx.moveTo( x + 50, y + height);
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

} )( wireShape, -30, -10, 67, 20, 5 );

var wirePoints = wireShape.createPointsGeometry();
var wire = new THREE.Line(wirePoints, new THREE.LineBasicMaterial({color: "blue"}));
scene.add(wire);

var lgeometry = new THREE.Geometry();
lgeometry.vertices.push(new THREE.Vector3( 6, 10, 0) );
lgeometry.vertices.push(new THREE.Vector3( 12, 10, 0) );
var sline = new THREE.Line(lgeometry,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline);

var lgeometry1 = new THREE.Geometry();
lgeometry1.vertices.push(new THREE.Vector3( -6, 10, 0) );
lgeometry1.vertices.push(new THREE.Vector3( 0, 10, 0) );
var sline1 = new THREE.Line(lgeometry1,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline1);

var lgeometry6 = new THREE.Geometry();
lgeometry6.vertices.push(new THREE.Vector3( 18, 10, 0) );
lgeometry6.vertices.push(new THREE.Vector3( 28, 10, 0) );
var sline6 = new THREE.Line(lgeometry6,  new THREE.LineBasicMaterial({color: "yellow"}));
scene.add(sline6);

var lgeometry2 = new THREE.Geometry();
lgeometry2.vertices.push(new THREE.Vector3( -23, 10, 0) );
lgeometry2.vertices.push(new THREE.Vector3( -23, 15, 0) );
lgeometry2.vertices.push(new THREE.Vector3( -17, 15, 0) );
var sline2 = new THREE.Line(lgeometry2,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline2);

var lgeometry5 = new THREE.Geometry();
lgeometry5.vertices.push(new THREE.Vector3( -11, 15, 0) );
lgeometry5.vertices.push(new THREE.Vector3( -6, 15, 0) );
lgeometry5.vertices.push(new THREE.Vector3( -6, 10, 0) );
var sline5 = new THREE.Line(lgeometry5,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline5);

var lgeometry3 = new THREE.Geometry();
lgeometry3.vertices.push(new THREE.Vector3( -17, 5, 0) );
lgeometry3.vertices.push(new THREE.Vector3( -23, 5, 0) );
lgeometry3.vertices.push(new THREE.Vector3( -23, 10, 0) );
var sline3 = new THREE.Line(lgeometry3,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline3);

var lgeometry4 = new THREE.Geometry();
lgeometry4.vertices.push(new THREE.Vector3( -6, 10, 0) );
lgeometry4.vertices.push(new THREE.Vector3( -6, 5, 0) );
lgeometry4.vertices.push(new THREE.Vector3( -11, 5, 0) );
var sline4 = new THREE.Line(lgeometry4,  new THREE.LineBasicMaterial({color: "blue"}));
scene.add(sline4);


var onoff = false;
var onoff1 = false;
var onoff2 = false;
var onoff3 = false;


function setOn(){
	
  var x = document.getElementById("onoff");
  x.innerHTML = "A";
  
  if (onoff1 && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff1==false && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff1 && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff1 && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if (onoff1 && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  }; 

  if ( onoff1==false && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff1==false && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}


function setOff(){
	
  var x = document.getElementById("onoff");
  x.innerHTML = "Ψ";
  
  if (onoff1 && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff1==false && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff1 && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff1 && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;;
  };  
  
  if (onoff1 && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;;
		swtch3.rotation.z = 0;
  }; 

  if ( onoff1==false && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff1==false && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}

function setOn1(){
	
  var y = document.getElementById("onoff1");
  y.innerHTML = "A";
		
  if (onoff && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff==false && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;;
  };  
  
  if (onoff && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;;
		swtch3.rotation.z = 0;
  }; 
  
  if ( onoff==false && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };  
  

  if ( onoff==false && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff==false && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}

function setOff1(){
	
  var y = document.getElementById("onoff1");
  y.innerHTML = "Ψ";
  
  if (onoff && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff==false && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff && onoff2==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;;
  };  
  
  if (onoff && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;;
		swtch3.rotation.z = 0;
  }; 

    if ( onoff==false && onoff2 && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };  
  
  if ( onoff==false && onoff2 && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff==false && onoff2==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}


function setOn2(){
	
  var z = document.getElementById("onoff2");
  z.innerHTML = "A";
		
  if (onoff1 && onoff && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff1==false && onoff==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff1 && onoff==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff1 && onoff && onoff3==false) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if (onoff1 && onoff==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  }; 

  if ( onoff1==false && onoff && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff1==false && onoff==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };  
}

function setOff2(){
	
  var z = document.getElementById("onoff2");
  z.innerHTML = "Ψ";
  
  if (onoff1 && onoff && onoff3) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff1==false && onoff==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff1 && onoff==false && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff1 && onoff && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;;
  };  
  
  if (onoff1 && onoff==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;;
		swtch3.rotation.z = 0;
  }; 

  if ( onoff1==false && onoff && onoff3==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff1==false && onoff==false && onoff3) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}

function setOn3(){
	
  var w = document.getElementById("onoff3");
  w.innerHTML ="A";
  
  if (onoff1 && onoff2 && onoff) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };
  
  if ( onoff1==false && onoff2==false && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  }; 
	
  if ( onoff1 && onoff2==false && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  }; 
  
  if (onoff1 && onoff2 && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };  
  
  if (onoff1 && onoff2==false && onoff) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("yellow");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  }; 

  if ( onoff1==false && onoff2 && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = 0;
  };  
  
  if ( onoff1==false && onoff2==false && onoff) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = 0;
  };  
}

function setOff3(){
	
  var w = document.getElementById("onoff3");
  w.innerHTML ="Ψ";
		
  if (onoff1 && onoff2 && onoff) 
  {
		wire.material.color.setStyle("yellow");
		lampBulb.material.color.setStyle("yellow");
		lampBulb.material.transparent = false;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("yellow");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };
  
  if ( onoff1==false && onoff2==false && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
	
  if ( onoff1 && onoff2==false && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  }; 
  
  if (onoff1 && onoff2 && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;;
  };  
  
  if (onoff1 && onoff2==false && onoff) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("yellow");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("yellow");
		sline5.material.color.setStyle("yellow");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = 0;
		swtch2.rotation.z = Math.PI / 4;;
		swtch3.rotation.z = Math.PI / 4;
  }; 

  if ( onoff1==false && onoff2 && onoff==false) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("blue");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = Math.PI / 4;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = 0;
		swtch3.rotation.z = Math.PI / 4;
  };  
  
  if ( onoff1==false && onoff2==false && onoff) 
  {
		wire.material.color.setStyle("blue");
		lampBulb.material.color.setStyle("white");
		lampBulb.material.transparent = true;
		sline.material.color.setStyle("yellow");
		sline1.material.color.setStyle("blue");
		sline2.material.color.setStyle("blue");
		sline3.material.color.setStyle("blue");
		sline4.material.color.setStyle("blue");
		sline5.material.color.setStyle("blue");
		sline6.material.color.setStyle("yellow");
		swtch.rotation.z = 0;
		swtch1.rotation.z = Math.PI / 4;
		swtch2.rotation.z = Math.PI / 4;
		swtch3.rotation.z = Math.PI / 4;
  };  
}
 

document.getElementById("onoff").addEventListener('click', setOnOff);
document.getElementById("onoff1").addEventListener('click', setOnOff1);
document.getElementById("onoff2").addEventListener('click', setOnOff2);
document.getElementById("onoff3").addEventListener('click', setOnOff3);

function setOnOff(){
  onoff = !onoff;
	if (onoff) {setOn()} else {setOff()};
}

function setOnOff1(){
  onoff1 = !onoff1;
	if (onoff1) {setOn1()} else {setOff1()};
}

function setOnOff2(){
  onoff2 = !onoff2;
	if (onoff2) {setOn2()} else {setOff2()};
}

function setOnOff3(){
  onoff3 = !onoff3;
	if (onoff3) {setOn3()} else {setOff3()};
}

 
render();
function render(){
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}