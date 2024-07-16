const container = document.querySelector(".container");

for(let i = 0; i < 16*16; ++i)
{
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    container.appendChild(div);
}

container.addEventListener("mouseover", (e)=>{
    e.stopPropagation();
    const inElement = e.target;
    
    inElement.style.backgroundColor = "blue";
})