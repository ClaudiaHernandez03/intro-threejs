import * as THREE from './three.js';

// Crea una eScena
const scene = new THREE.Scene();

// Crea una camara 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Crea un render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

// Crea el elemento HTML para visualizar la escena 3D
document.body.appendChild( renderer.domElement );

// Dibuja un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Crea un material para la geometria
const material = new THREE.MeshBasicMaterial( { color: 0x20A5A1 } );

// Dibuja la geometria con el material
const cube = new THREE.Mesh( geometry, material );

// Agrega el cubo a la escena
scene.add( cube );

//
camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}