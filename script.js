const container = document.querySelector(".container");

let gridSize = prompt("please enter the grid size! (<100)");

let boxSize = 800/gridSize;


for(let i = 0; i < gridSize**2; ++i)
{
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    div.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px;`);
    container.appendChild(div);
}


container.addEventListener("mouseover", (e)=>{
    e.stopPropagation();
    
    const inElement = e.target;
    if(inElement.classList.contains("item"))
        inElement.style.backgroundColor = "blue";
})