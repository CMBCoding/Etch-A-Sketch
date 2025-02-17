const frame = document.querySelector("#frame-inner");
const block = document.createElement("div");

/*Created block for sketch grid and stylings*/
block.style.backgroundColor = "gainsboro";
// block.style.display = "flex";
// block.style.flex = "1 1 50px";
block.classList.add("block");

// screen.appendChild(block);
let blocks = block.cloneNode(true);
blocks.addEventListener("mouseover", () =>
    blocks.style.backgroundColor = "grey"
);

for (let i = 0; i < 256; i++) {
    const blocks = block.cloneNode(true);
    frame.appendChild(blocks);
    blocks.addEventListener("mouseover", () =>
        blocks.style.backgroundColor = "grey"
    );
}

const leftWheel = document.querySelector("#wheel-left");
const rightWheel = document.querySelector("#wheel-right");


leftWheel.addEventListener("click", changeScreen);
rightWheel.addEventListener("click", clearScreen);
let size;

//Find way to convert size to a pixel value;
function changeScreen() {
    clearScreen();
    area = prompt("Enter a number to generate the area for your new grid");
    let size = Number(area);
    frame.style.width = size;
    frame.style.height = size;
    return frame.style.width, frame.style.height;
    // for (let i = 0; i < area; i++) {
    //     drawScreen();
    // }
};

/* Function for removal of nodes from the frame to create a blank frame.
Removes each firstChild from the frame until there are none left. */
function clearScreen() {
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild)
    }
};

//Test for adding blocks. Cut//
function drawScreen() {
    const blocks = block.cloneNode(true);
    frame.appendChild(blocks);
    blocks.addEventListener("mouseover", () =>
        blocks.style.backgroundColor = "grey"
    );
}