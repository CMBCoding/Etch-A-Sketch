console.log("Hello");
const screen = document.querySelector("#frame-inner");
const block = document.createElement("div");

/*Created block for sketch grid and stylings*/
block.innerText = "Box";
block.style.backgroundColor = "gainsboro";
block.style.display = "flex";
block.style.height = "50px";
block.style.width = "50px";
block.style.alignItems = "center";
block.style.justifyContent = "center";

screen.appendChild(block);
let blocks = block.cloneNode(true);
screen.appendChild(blocks);
screen.appendChild(blocks);