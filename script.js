
/*
    Problem: 
 */

const container = document.querySelector(".container"); //get grid element to perform operation on
const gridSize = document.querySelector("#gridSize"); //get input to access changed grid value
const gridVal = document.querySelector("#gridVal"); //get label to display changed grid value

let boxSize = 720/16; //default div size in px
let enableShading = false; //progressive darkening effect
let isRandom = false; // rgb color button
let choosen_bg = "#000"; //default color chosen 

generateGrid(16); //default grid generation

gridSize.addEventListener("input", (e) => {
    const sz = e.target.value;
    gridVal.textContent = `${sz}x${sz}`;
    boxSize = 720 / sz;
    generateGrid(sz);

})

container.addEventListener("mouseover", (e) => {
    e.stopPropagation();

    const inElement = e.target;
    if (inElement.classList.contains("item")) {
        inElement.style.backgroundColor = generateColor();
        if (enableShading) {
            const currentOpacity = inElement.style.opacity;
            inElement.style.opacity = currentOpacity - 0.1;
        }
        else {
            inElement.style.opacity = 1;
        }
    }
})

function generateGrid(gridSize) {
    container.replaceChildren();
    for (let i = 0; i < gridSize ** 2; ++i) {
        const div = document.createElement("div");
        div.setAttribute("class", "item");
        div.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px; opacity: 1;`);
        container.appendChild(div);
    }
}

//eraser event handler, erases pixels (defaults their background to white)
const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", (e) => {
    choosen_bg = "#fff";
    isRandom = false;
    enableShading = false;
})

//clear button event handler, clears whole grid and generates new default
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    boxSize = 720/16;
    generateGrid(16);
})


// toggle buttons event handler to toggle random and shading effect
const rndmBtn = document.querySelector(".random");
rndmBtn.addEventListener("click", () => isRandom = !isRandom);

const shadingBtn = document.querySelector(".enable-shading");
shadingBtn.addEventListener("click", () => enableShading = !enableShading);

//getting color options to change default color
const clr = document.querySelector("#clr");

clr.addEventListener("input", (e) => {

    choosen_bg = e.target.value;
    isRandom = false;
})

function generateColor() {
    if (isRandom) {
        const rgbval = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let prefix = "#";
        for (let i = 0; i < 6; ++i) {
            let colorIndex = Math.floor(Math.random() * rgbval.length);
            prefix += rgbval[colorIndex];
        }
        return prefix;
    }

    else return choosen_bg;
}