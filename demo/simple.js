'use strict';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 500;

var renderer = window.renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 1.0);

document.body.appendChild(renderer.domElement);

var sphere_geometry = new THREE.SphereGeometry(150, 100);
var sphere_material = new THREE.MeshLambertMaterial({color: 0xFF0000});
var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
//sphere.overdraw = true;
//sphere.position.set(0, 0, 0);
scene.add(sphere);

var cube_geometry = new THREE.CubeGeometry(100, 100, 100);
var cube_material = new THREE.MeshBasicMaterial({color: 0x0000FF});
var cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);

var light = new THREE.DirectionalLight(0xCC0000, 1.0, 0);
light.position.set(200, 200, 200);
scene.add(light);

var render = function() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.1;
  sphere.rotation.x += 0.1;
  renderer.render(scene, camera);
};
render();
