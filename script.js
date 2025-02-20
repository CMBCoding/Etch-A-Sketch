const frame = document.querySelector("#frame-inner");
const block = document.createElement("div");
const column = document.createElement("div");

block.classList.add("block");
block.style.backgroundColor = "gainsboro";
column.classList.add("column");
column.style.backgroundColor = "gainsboro";

for (let i = 0; i < 16; i++) {
    let columns = column.cloneNode(true);
    frame.appendChild(columns);
    for (let i = 0; i < 16; i++) {
        let blocks = block.cloneNode(true);
        columns.appendChild(blocks);
        blocks.addEventListener("mouseover", () =>
        blocks.style.backgroundColor = "grey"
        );
    }
};

const leftWheel = document.querySelector("#wheel-left");
const rightWheel = document.querySelector("#wheel-right");


leftWheel.addEventListener("click", changeScreen);

function changeScreen() {
    gridX = prompt("Enter a number from 1 to 100 for the width of your new grid.");
    gridY = prompt("Enter a number from 1 to 100 for the height of your new grid.");
    if (gridY <= 100 && gridX <= 100) {
        console.log(gridY);
        console.log(gridX);
        let gridArea = gridY * gridX;
        console.log(gridArea);
        clearScreen();
        drawGrid(gridX, gridY);
    } else {
        alert("Please enter a number between 1 and 100 for your grid length and width.")
    }
};

function drawGrid() {
    // let gridArea = gridY * gridX;
    drawColumns(gridY);
    // for (i = 0; i < gridArea; i++) {
    //     let blocks = block.cloneNode(true);
    //     frame.appendChild(blocks);
    //     blocks.addEventListener("mouseover", () =>
    //     blocks.style.backgroundColor = "grey");
    // }
};

function drawColumns() {
    for (let i = 0; i < gridX; i++) {
        let columns = column.cloneNode(true);
        let blocks = block.cloneNode(true);
        // let columnsArray = Array.from(columns);
        frame.appendChild(columns);
        columns.addEventListener("mouseover", () => 
        columns.style.backgroundColor = "gray")
        // columnsArray.forEach(columns => { 
        //     columns.appendChild(blocks/gridY);
        // });
    }
};

// function drawColumns() {
//     for (let i = 0; i < gridX; i++) {
//         let columns = column.cloneNode(true);
//         // columns.style.width = (100 / gridX);
//         frame.appendChild(columns);
//     }
// };

// function drawBlocks() {
//     for (let i = 0; i < gridY; i ++) {
//         let blocks = block.cloneNode(true);
//         columns.appendChild(blocks);
//     }
// }

function clearScreen() {
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild)
    }
};

// function drawScreen() {
//     for (let i = 0; i < 16; i++) {
//         let columns = column.cloneNode(true);
//         frame.appendChild(columns);
//         if ((area % 2) === 0 ) {}
//         for (let i = 0; i < area; i++) {
//         const blocks = block.cloneNode(true);
//         column.appendChild(blocks);
//         blocks.addEventListener("mouseover", () =>
//         blocks.style.backgroundColor = "grey");
//         }
//     };
// }

//Old drawScreen
// function drawScreen() {      
//         for (let i = 0; i < area; i++) {
//         const blocks = block.cloneNode(true);
//         frame.appendChild(blocks);
//         blocks.addEventListener("mouseover", () =>
//         blocks.style.backgroundColor = "grey"
//     );}
// }

// let red;
// let blue;
// let green;

// function randomColor() {
//     red = Math.floor(Math.random() * 256);
//     console.log(red);
//     green = Math.floor(Math.random() * 256);
//     console.log(green);
//     blue = Math.floor(Math.random() * 256);
//     console.log(blue);
//     frame.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
// };