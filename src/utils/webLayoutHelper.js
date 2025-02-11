export const createWebLayout = () => {
    // Create the main container
    const mainContainer = document.createElement('div');
    mainContainer.style.display = 'flex';
    mainContainer.style.height = '100vh'; // Adjust as needed'
    mainContainer.style.width = '100vw';
    mainContainer.style.maxHeight = '100vh';
    document.body.appendChild(mainContainer);

    // Create the canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.style.flex = '4'; // Takes up 3 parts of the space
    canvasContainer.style.display = 'flex';
    canvasContainer.style.flexDirection = 'column'; // Stack canvas and horizontal buttons vertically
    canvasContainer.style.justifyContent = 'center';
    canvasContainer.style.alignItems = 'center';
    mainContainer.appendChild(canvasContainer);

    // Create the canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'renderCanvas';
    canvas.style.width = '100%';
    canvas.style.height = '80%';
    canvasContainer.appendChild(canvas);

    

    // Create the vertical buttons container
    const verticalButtons = document.createElement('div');
    verticalButtons.style.flex = '1'; // Takes up 1 part of the space
    verticalButtons.style.display = 'flex';
    verticalButtons.style.flexDirection = 'column';
    verticalButtons.style.justifyContent = 'flex-start';
    verticalButtons.style.alignItems = 'center';
    verticalButtons.style.backgroundColor = 'white';
    verticalButtons.style.gap = '2em';
    verticalButtons.style.maxHeight = '100%'; // Match the height of the main container
    verticalButtons.style.paddingTop = '5%';
    mainContainer.appendChild(verticalButtons);


    // Add vertical buttons
    const addDoorButton = document.createElement('button');
    addDoorButton.id='addDoorButton';
    addDoorButton.textContent = 'Voeg deur toe';
    addDoorButton.style.width = '6em';
    addDoorButton.style.height = '4em';
    verticalButtons.appendChild(addDoorButton);

    const addDummyDoorButton = document.createElement('button');
    addDummyDoorButton.id='addDummyDoorButton';
    addDummyDoorButton.textContent = 'Voeg dummy toe';
    addDummyDoorButton.style.width = '6em';
    addDummyDoorButton.style.height = '4em';
    verticalButtons.appendChild(addDummyDoorButton);

    // Create the horizontal buttons container
    const horizontalButtons = document.createElement('div');
    horizontalButtons.style.display = 'flex';
    horizontalButtons.style.gap = '2em';
    horizontalButtons.style.justifyContent = 'flex-start';
    horizontalButtons.style.alignItems = 'center';
    horizontalButtons.style.width = '100%';
    horizontalButtons.style.backgroundColor = 'rgb(192,192,192)';
    horizontalButtons.style.paddingLeft= '5%';
    horizontalButtons.style.height = '20%';
    canvasContainer.appendChild(horizontalButtons);


    // Add horizontal buttons
    const voorButton = document.createElement('button');
    voorButton.textContent = 'Voor';
    voorButton.onclick = () => console.log('Move forward');
    horizontalButtons.appendChild(voorButton);

    const linksButton = document.createElement('button');
    linksButton.textContent = 'Links';
    linksButton.onclick = () => console.log('Move left');
    horizontalButtons.appendChild(linksButton);

    const rechtsButton = document.createElement('button');
    rechtsButton.textContent = 'Rechts';
    rechtsButton.onclick = () => console.log('Move right');
    horizontalButtons.appendChild(rechtsButton);

    const achterButton = document.createElement('button');
    achterButton.textContent = 'Achter';
    achterButton.onclick = () => console.log('Move back');
    horizontalButtons.appendChild(achterButton);


    const bovenButton = document.createElement('button');
    bovenButton.textContent = 'Boven';
    bovenButton.onclick = () => console.log('Move up');
    horizontalButtons.appendChild(bovenButton);

    return canvas;
};