const colors = [{
        name: "red",
        motto: "Rose Red",
    },
    {
        name: "blue",
        motto: "Ocean Blue",
    },
    {
        name: "gray",
        motto: "Smoke Gray",
    },
    {
        name: "green",
        motto: "Grass Green",
    },
    {
        name: "purple",
        motto: "Deep Purple",
    },
];

const randomColorButton = document.querySelector("#randomColorButton");
const setColorButton = document.querySelector("#randomColorButton");

randomColorButton.addEventListener("click", changeColor);
setColorButton.addEventListener("click", setNewColor);

function changeColor(){
    const colorIndex = Math.floor(Math.random() * colors.length)
    
    document.querySelector("#colorName").textContent = colors[colorIndex].name;
    document.querySelector("#colorDesc").textContent = colors[colorIndex].motto;

    document.querySelector(".container").style.backgroundColor = colors[colorIndex].name
}

function setNewColor(){
const inputBox = document.querySelector(".colorInput")
const colorInput = inputBox.value.split(",");

const colorObject = {name: colorInput[0], motto: colorInput[1]};

const searchedColorIndex = colors.findIndex((myColor)=>myColor.name === colorObject.name)





}