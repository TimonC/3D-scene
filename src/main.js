
import * as BABYLON from '@babylonjs/core';
import * as utils from './utils/index.js';

const canvas = utils.createWebLayout()
const engine = new BABYLON.Engine(canvas);
//Initialize scene
const scene = utils.createScene(engine);
engine.runRenderLoop(function(){
  scene.render();
});

window.addEventListener('resize', function(){
  engine.resize();
});

// Create Textures
const wallTexture = new BABYLON.Texture("./assets/textures/factory_wall_diff_4k.jpg", scene);
const wallMaterial = new BABYLON.StandardMaterial('wallMaterial', scene);
wallMaterial.diffuseTexture = wallTexture;
wallMaterial.diffuseTexture.uScale = 3;
wallMaterial.diffuseTexture.vScale = 3;
wallMaterial.alpha = 0.7;

const doorMaterial = new BABYLON.StandardMaterial('doorMaterial', scene);
doorMaterial.diffuseTexture = new BABYLON.Texture("./assets/textures/factory_wall_diff_4k.jpg", scene);
doorMaterial.diffuseTexture.uScale = 1;
doorMaterial.diffuseTexture.vScale = 1;

//add objects
const transformerBox = utils.addBuilding(scene, wallMaterial);

document.addEventListener('DOMContentLoaded', () =>{
  addDoorButton = document.getElementById('addDoorButton');
  addDoorButton.onclick = () => {
    utils.addDoor(scene, transformerBox, doorMaterial);
    console.log('Door added');
  }

  addDummyDoorButton = document.getElementById('addDummyDoorButton');
  addDummyDoorButton.onclick = () => {
    utils.addDoor(scene, transformerBox, doorMaterial);
    console.log('Dummy door added');
  }
});


// // Add event listeners to change cursor on product hover
// scene.onPointerObservable.add(function (evt) {
//   var pickResult = scene.pick(scene.pointerX, scene.pointerY);

//   if (pickResult.pickedMesh === door) {
//       document.body.style.cursor = "pointer";
//   } else {
//       document.body.style.cursor = "default";
//   }
//   });







