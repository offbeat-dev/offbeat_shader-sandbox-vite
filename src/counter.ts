import "./styles.css";

// // Sizes
// const sizes = {};
// sizes.width = window.innerWidth;
// sizes.height = window.innerHeight;

// // Stats
// const stats = new Stats();
// document.body.appendChild(stats.dom);

// // Scene
// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.z = 3;
// scene.add(camera);

// // Test Material
// const material = new THREE.ShaderMaterial({
//   extensions: {
//     derivatives: "#extension GL_OES_standard_derivatives : enable",
//   },
//   side: THREE.DoubleSide,
//   uniforms: {
//     time: { value: 1.0 },
//     resolution: { value: new THREE.Vector2() },
//   },
//   // wireframe: true,
//   // transparent: true,
//   vertexShader: vert,
//   fragmentShader: frag,
// });

// // Test
// const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), material);
// scene.add(plane);

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector(".webgl"),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(sizes.width, sizes.height);

// // orbit
// new OrbitControls(camera, renderer.domElement);

// // Gui
// var gui = new GUI();
// //props
// //gui.addColor(0xffffff, "color");
// //gui.add(0.5, "interval", 0, 1);

// gui.open();

// // Loop
// const loop = () => {
//   // Render
//   renderer.render(scene, camera);

//   // Stats
//   stats.update();

//   // Keep looping
//   window.requestAnimationFrame(loop);
// };
// loop();

// window.addEventListener("resize", () => {
//   // Save sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
// });
