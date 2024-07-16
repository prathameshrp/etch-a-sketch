
/*
    Problem: 
 */
const container = document.querySelector(".container");


let boxSize = 50;
let isRandom = false;
const rndmBtn = document.querySelector(".random");

rndmBtn.addEventListener("click", ()=> isRandom = !isRandom);
function generateGrid(gridSize) {
    container.replaceChildren();
    for (let i = 0; i < gridSize ** 2; ++i) {
        const div = document.createElement("div");
        div.setAttribute("class", "item");
        div.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px; opacity: 1;`);
        container.appendChild(div);
    }
}
generateGrid(16);
container.addEventListener("mouseover", (e) => {
    e.stopPropagation();

    const inElement = e.target;
    if (inElement.classList.contains("item"))
    {
        inElement.style.backgroundColor = generateColor();
        const currentOpacity = inElement.style.opacity;
        inElement.style.opacity = currentOpacity - 0.1;
    }
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

// random color generator:

function generateColor()
{
    if(isRandom)
    {
    const rgbval = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let prefix = "#";
    for(let i = 0; i<6; ++i)
    {
        let colorIndex = Math.floor(Math.random()*rgbval.length);
        prefix+=rgbval[colorIndex];
    }
    return prefix;
    }
    
    else return "#FF0000"
}