declare const require: any;

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);
require('three-lut');

@Component({
  templateUrl: './polynomial-sphere.component.html',
  styleUrls: ['./polynomial-sphere.component.css']
})
export class PolynomialSphereComponent implements AfterViewInit {
  camera: THREE.PerspectiveCamera;
  canvasHeight: number;
  canvasWidth: number;
  icosphere: THREE.IcosahedronGeometry;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  sphereRadius = 200;

  @ViewChild('threeContainer') threeContainer: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    this.canvasWidth = this.threeContainer.nativeElement.clientWidth;
    this.canvasHeight = this.threeContainer.nativeElement.clientHeight;

    this.initScene();
    this.createIcoSphere();
    this.initRenderer();
    this.render();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.threeContainer.nativeElement
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
  }

  initScene() {
    const ambientLight = new THREE.AmbientLight(0xAAAAAA);	// 0.2
    ambientLight.color.setHSL(.121, .01, .8);

    const materialColor = new THREE.Color();
    materialColor.setRGB(1.0, 1.0, 1.0);

    const wireMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
    const flatMaterial = new THREE.MeshPhongMaterial({
      color: materialColor,
      specular: 0x000000,
      flatShading: true,
      side: THREE.DoubleSide
    });

    window.addEventListener('resize', () => this.onWindowResize(), false);
    this.camera = new THREE.PerspectiveCamera(45, this.canvasWidth /  this.canvasHeight, 1, 80000);
    this.camera.aspect = this.canvasWidth / this.canvasHeight;
    const cameraControls = new OrbitControls(this.camera, this.threeContainer.nativeElement);
    cameraControls.addEventListener('change', () => this.render());
    this.camera.position.set(-600, 550, 1300);
    this.camera.updateProjectionMatrix();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(ambientLight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  createIcoSphere() {
    if (this.icosphere) {
      return;
    }
    this.icosphere = new THREE.IcosahedronGeometry(this.sphereRadius, 4);
    const faceIndices = ['a', 'b', 'c'];
    let f, p, vertexIndex;

    // Go through and find the min / max values of the discriminant
    let minDiscriminant = null;
    let maxDiscriminant = null;

    for (let i = 0; i < this.icosphere.faces.length; i++) {
      f = this.icosphere.faces[i];

      for (let j = 0; j < 3; j++) {
        vertexIndex = f[faceIndices[j]];
        p = this.icosphere.vertices[vertexIndex];
        const coefA = p.x;
        const coefB = p.y;
        const coefC = p.z;
        const discriminant = Math.sqrt(Math.abs(coefB * coefB - 4 * coefA * coefC));

        if (discriminant > maxDiscriminant || maxDiscriminant === null) {
          maxDiscriminant = discriminant;
        }
        if (discriminant < minDiscriminant || minDiscriminant === null) {
          minDiscriminant = discriminant;
        }
      }
    }

    const rainbowLut = new (THREE as any).Lut('rainbow', 512);
    rainbowLut.setMax(maxDiscriminant);
    rainbowLut.setMin(minDiscriminant);

    for (let i = 0; i < this.icosphere.faces.length; i++) {
      f = this.icosphere.faces[i];

      for (let j = 0; j < 3; j++) {
        vertexIndex = f[faceIndices[j]];
        p = this.icosphere.vertices[vertexIndex];
        const coefA = p.x;
        const coefB = p.y;
        const coefC = p.z;
        const discriminant = Math.sqrt(Math.abs(coefB * coefB - 4 * coefA * coefC));
        f.vertexColors[j] = rainbowLut.getColor(discriminant);
      }
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: THREE.VertexColors,
      shininess: 0
    });
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true
    });
    const mesh = new THREE.Mesh(this.icosphere, material);
    mesh.position.x = 0;
    this.scene.add(mesh);
  }

  onWindowResize() {
    this.canvasWidth = this.threeContainer.nativeElement.clientWidth;
    this.canvasHeight = this.threeContainer.nativeElement.clientHeight;
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.camera.aspect = this.canvasWidth / this.canvasHeight;
    this.camera.updateProjectionMatrix();
    this.render();
  }

}
