const frame = document.querySelector("#frame-inner");
const block = document.createElement("div");
const column = document.createElement("div");

block.style.backgroundColor = "gainsboro";
block.classList.add("block");

/* Test for adding colums to then add in the blocks */
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

/* End of test code */


// let blocks = block.cloneNode(true);
// blocks.addEventListener("mouseover", () =>
// blocks.style.backgroundColor = "grey"
// );

// for (let i = 0; i < 256; i++) {
//     const blocks = block.cloneNode(true);
//     frame.appendChild(blocks);
//     blocks.addEventListener("mouseover", () =>
//         blocks.style.backgroundColor = "grey"
//     );
// }

const leftWheel = document.querySelector("#wheel-left");
const rightWheel = document.querySelector("#wheel-right");


leftWheel.addEventListener("click", changeScreen);
rightWheel.addEventListener("click", clearScreen);
let size;

function changeScreen() {
    area = prompt("Enter a number to generate the area for your new grid");
    let size = Number(area);
    if (size <= 100) {
        clearScreen();    
        drawScreen(size);         
    } else {
        alert("Please enter a number between 1 and 100");
    }
};

function clearScreen() {
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild)
    }
};

function drawScreen() {      
        for (let i = 0; i < area; i++) {
        const blocks = block.cloneNode(true);
        frame.appendChild(blocks);
        blocks.addEventListener("mouseover", () =>
        blocks.style.backgroundColor = "grey"
    );}
}

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