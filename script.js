const frame = document.querySelector("#frame-inner");
const block = document.createElement("div");
const column = document.createElement("div");

const frameWidth = frame.style.minWidth = "500px";
const frameHeight = frame.style.minHeight = "500px";

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
    grid = prompt("Enter a number from 1 to 100 for the area of your new grid.");
    if (grid <= 100) {
        clearScreen();
        drawGrid(grid);
    } else {
        alert("Please enter a number from 1 to 100 for the area of your new grid.")
    }
};

function drawGrid() {
    let gridArea = grid * grid;
    console.log(gridArea);
    for (let i = 0; i < (gridArea / 2); i++) {
        let columns = column.cloneNode(true);
        frame.appendChild(columns);
        for (let i = 0; i < grid; i++) {
            console.log(block.style.height);
            console.log(block.style.width);
            let blocks = block.cloneNode(true);
            columns.appendChild(blocks);
            blocks.addEventListener("mouseover", () =>
            blocks.style.backgroundColor = "grey"
            );
        }
    };
};

function clearScreen() {
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild)
    }
};

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