const scene = new THREE.Scene ();
const camera = new
THREE.PerspectiveCamera (75,
window. innerWidth / window. innerHeight,
0.1, 1000);
const renderer = new
THREE.WebGLRenderer({
canvas:
document.createElement ( 'canvas'),
antialias: true
});
renderer.setSize(window. innerWidth, window.innerHeight); document.body.appendChild(renderer.domEl ement) ;
const geometry = new
THREE. SphereGeometry (1, 60, 60);
const material = new
THREE.MeshBasicMaterial({ color:
0x00ff00 3);
const sphere = new THREE.Mesh (geometry,
material);
scene.add (sphere) ;
camera.position.z = 5;
function animate() {
requestAn imationFrame(animate); sphere.rotation.x += 0.01; sphere. rotation.y += 0.01; renderer. render (scene, camera);
}
animate();