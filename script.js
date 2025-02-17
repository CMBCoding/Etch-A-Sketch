const screen = document.querySelector("#frame-inner");
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
    screen.appendChild(blocks);
    blocks.addEventListener("mouseover", () =>
        blocks.style.backgroundColor = "grey"
    );
}
