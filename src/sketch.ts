import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import frag from "./shader/fragment.glsl";
import vert from "./shader/vertex.glsl";

interface iSketch {
  time?: number;
  container: HTMLElement;
  scene: THREE.Scene;
  width: number;
  height: number;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  clock: THREE.Clock;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshNormalMaterial | THREE.ShaderMaterial;
  mesh: THREE.Mesh;
}

export default class Sketch implements iSketch {
  time?: number;
  container: HTMLElement;
  scene: THREE.Scene;
  width: number;
  height: number;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  clock: THREE.Clock;
  geometry!: THREE.BoxGeometry;
  material!: THREE.MeshNormalMaterial | THREE.ShaderMaterial;
  mesh!: THREE.Mesh;

  constructor(options: { dom: HTMLElement }) {
    //Clock
    this.clock = new THREE.Clock();

    //Container
    this.container = options.dom;

    //Width and Height
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    //Scene
    this.scene = new THREE.Scene();

    //Camera
    this.camera = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
      0.01,
      10
    );
    this.camera.position.z = 1;

    //Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    //Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    //Run methods
    this.resize();
    this.setupResize();
    this.addObjects();
    this.render();
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    // this.material = new THREE.MeshNormalMaterial();

    this.material = new THREE.ShaderMaterial({
      fragmentShader: frag,
      vertexShader: vert,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);
  }

  render() {
    this.time += 0.05;
    this.mesh.rotation.x = this.clock.getElapsedTime();
    this.mesh.rotation.y = this.clock.getElapsedTime();

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch({ dom: document.querySelector(".container")! });
