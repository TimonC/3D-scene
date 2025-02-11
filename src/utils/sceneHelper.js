import * as BABYLON from '@babylonjs/core';

export const createScene = function(engine){

  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(242 / 255, 240 / 255, 230 / 255, 1)
  const light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);
  light.intensity = 0.7;

  const camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 4, Math.PI / 4, 3, BABYLON.Vector3.Zero(), scene);
  camera.position = new BABYLON.Vector3(0, 2, 3.5);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.inputs.clear();

 
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 8, height: 16, subdivisions: 32}, scene);
  const concreteTexture = new BABYLON.Texture("./assets/textures/asphalt_pit_lane_disp_4k.png", scene, false, false);
  const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseTexture = concreteTexture;
  groundMaterial.diffuseTexture.uScale = 4; // Tiling in the horizontal direction (X)
  groundMaterial.diffuseTexture.vScale = 6; // Tiling in the vertical direction (Y)
  ground.material = groundMaterial;



  return scene;
}