import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);

const createScene = function(){
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(242 / 255, 240 / 255, 230 / 255, 1)
  const light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);
  light.intensity = 0.7;

  const camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 4, Math.PI / 4, 3, BABYLON.Vector3.Zero(), scene);
  camera.position = new BABYLON.Vector3(0, 2.5, 5);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.inputs.clear();

 
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 8, height: 16, subdivisions: 32}, scene);
  const concreteTexture = new BABYLON.Texture("./assets/textures/asphalt_pit_lane_disp_4k.png", scene, false, false);
  const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseTexture = concreteTexture;
  groundMaterial.diffuseTexture.uScale = 2; // Tiling in the horizontal direction (X)
  groundMaterial.diffuseTexture.vScale = 2 // Tiling in the vertical direction (Y)
  ground.material = groundMaterial;




// Create transformer box
const wallTexture = new BABYLON.Texture("./assets/textures/factory_wall_diff_4k.jpg", scene);
const wallMaterial = new BABYLON.StandardMaterial('wallMaterial', scene);
wallMaterial.diffuseTexture = wallTexture;
wallMaterial.alpha = 0.8;
const transformerBox = BABYLON.MeshBuilder.CreateBox("transformer1", {width: 3, height: 1.5, depth: 2}, scene);
transformerBox.position = new BABYLON.Vector3(0, transformerBox.scaling.y/2, 0);
transformerBox.material = wallMaterial;

// Create door
const door = new BABYLON.MeshBuilder.CreateBox('myDoor',{size: 2, width: 0.5, height: 1, depth: 0.005}, scene);
const doorPos = new BABYLON.Vector3(0, ground.position.y + door.scaling.y/2, transformerBox.position.z + transformerBox.scaling.z + 0.002);
door.position = doorPos
const doorMaterial = new BABYLON.StandardMaterial('doorMaterial', scene);
doorMaterial.diffuseTexture = new BABYLON.Texture("./assets/textures/factory_wall_diff_4k.jpg", scene);
doorMaterial.diffuseTexture.uScale = 1;
doorMaterial.diffuseTexture.vScale = 1;
door.material = doorMaterial;


 const minX = transformerBox.position.x - transformerBox.scaling.x - door.scaling.x/4;  // Left limit of the box
 const maxX = transformerBox.position.x + transformerBox.scaling.x + door.scaling.x/4;  // Right limit of the box
 const doorDragBehavior = new BABYLON.PointerDragBehavior({
    dragAxis: new BABYLON.Vector3(1, 0, 0), // Restrict dragging to the X-axis
});
doorDragBehavior.validateDrag = (target) => {
    return target.x >= minX && target.x <= maxX;
};
door.addBehavior(doorDragBehavior);

 return scene;
}



const scene = createScene();
engine.runRenderLoop(function(){
  scene.render();
});

window.addEventListener('resize', function(){
  engine.resize();
});

