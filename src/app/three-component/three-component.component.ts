import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';



@Component({
  selector: 'app-three-component',
  templateUrl: './three-component.component.html',
  styleUrls: ['./three-component.component.css']
})
export class ThreeComponentComponent implements OnInit {


  public renderer;
  public scene;
  public camera;
  public mesh; 
  public stats;
  constructor() { 

  }

  ngOnInit(): void {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setClearColor(new THREE.Color("rgb(255, 255, 255)"));
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById("renderDiv").appendChild(this.renderer.domElement);

            //scene
            this.scene = new THREE.Scene();

            //camara
            let fov = 60;
            let aspect = window.innerWidth / window.innerHeight;
            let near = 0.1;
            let far = 10000;
            this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            this.camera.position.set(0, 0, 5);
            

            //models
            //let n= 10;
            //let geometry = new THREE.CylinderGeometry( 1, 1, 2, 12 );
            //let geometry = new THREE.SphereGeometry( 1, n, n );
            let geometry = new THREE.BoxGeometry();
            let material = new THREE.MeshBasicMaterial({ color: "green", wireframe: true });
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.name = "Cube";

            //scene graph
            this.scene.add(this.mesh);

         
            this.renderLoop();
            
  }
        renderLoop() {
            this.renderer.render(this.scene, this.camera);
            this.updateScene();
            requestAnimationFrame(this.renderLoop);
        }


        updateScene() {
            //mesh.rotation.y = mesh.rotation.y + rot;
            //mesh.rotation.x = mesh.rotation.x + rot;
            //mesh.rotation.z = mesh.rotation.z + rot;
        }

        // manejo de eventos
        /*
        document.addEventListener("DOMContentLoaded", init);
        window.addEventListener("resize",function(){
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });
        */

}
