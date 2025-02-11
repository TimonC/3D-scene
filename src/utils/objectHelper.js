import * as BABYLON from '@babylonjs/core';


export const addDoor = (scene, building, doorMaterial) =>{
    // Create door
    const door = new BABYLON.MeshBuilder.CreateBox('myDoor',{size: 2, width: 0.5, height: 1, depth: 0.005}, scene);
    const doorPos = new BABYLON.Vector3(0, door.scaling.y/2, building.position.z + building.scaling.z + 0.002);
    door.position = doorPos

    door.material = doorMaterial;

    // door.renderOutline = false;
    // door.outlineColor = new BABYLON.Color3(0,0,1);
    // door.outlineWidth = 0.1;


    const leftLim = building.position.x - building.scaling.x - door.scaling.x/4;
    const rightLim = building.position.x + building.scaling.x + door.scaling.x/4;
    let isDragging = false;

    const dragBehavior = createDragBehavior(door, leftLim, rightLim);
    addReactiveLight(dragBehavior, doorMaterial)
    door.addBehavior(dragBehavior)
    return
}

export const addBuilding = (scene, wallMaterial) =>{
    const building = BABYLON.MeshBuilder.CreateBox("transformer", {width: 3, height: 1.2, depth: 2}, scene);
    building.position = new BABYLON.Vector3(0, building.scaling.y/2, 0);
    building.material = wallMaterial;
    return
}

export const addDummy = (scene) =>{
}

const createDragBehavior = (product, leftLim, rightLim) =>{
    const productDragBehavior = new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1, 0, 0)});
    productDragBehavior.validateDrag = (target) => {
        return target.x >= leftLim && target.x <= rightLim;
    };
    return productDragBehavior
}
const addReactiveLight = (productDragBehavior, productMaterial)=>{
    productDragBehavior.onDragStartObservable.add(function () {
        productMaterial.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    });
    productDragBehavior.onDragEndObservable.add(function () {
        productMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0);
    });
    return
}