const container = document.querySelector(".container");


let boxSize = 50;

function generateGrid(gridSize) {
    container.replaceChildren();
    for (let i = 0; i < gridSize ** 2; ++i) {
        const div = document.createElement("div");
        div.setAttribute("class", "item");
        div.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px;`);
        container.appendChild(div);
    }
}
generateGrid(16);
container.addEventListener("mouseover", (e) => {
    e.stopPropagation();

    const inElement = e.target;
    if (inElement.classList.contains("item"))
        inElement.style.backgroundColor = "blue";
})

function userInput() {
    let gridSize = prompt("please enter the grid size! (<100)");
    if(gridSize > 100) return userInput();
    return gridSize;
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const sz = userInput();
    boxSize = 800 / sz;
    generateGrid(sz);

})