
/*
    Problem: 
 */

const container = document.querySelector(".container");
const gridSize = document.querySelector("#gridSize");
const gridVal = document.querySelector("#gridVal");

let boxSize = 50;
let enableShading = false;
let isRandom = false;
let choosen_bg = "#000";

generateGrid(16);

gridSize.addEventListener("input", (e) => {
    const sz = e.target.value;
    gridVal.textContent = `${sz}x${sz}`;
    boxSize = 800 / sz;
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


const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", (e) => {
    choosen_bg = "#fff";
    isRandom = false;
    enableShading = false;
})

const clr = document.querySelector("#clr");

clr.addEventListener("click", (e) => {
    if (e.target.classList.contains('clr-btns')) return;

    choosen_bg = e.target.value;
    isRandom = false;
})


const rndmBtn = document.querySelector(".random");
rndmBtn.addEventListener("click", () => isRandom = !isRandom);

const shadingBtn = document.querySelector(".enable-shading");
shadingBtn.addEventListener("click", () => enableShading = !enableShading);


const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    boxSize = 50;
    generateGrid(16);
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