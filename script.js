let colorchange = (color) => {
    console.log(color)
    circle.style.backgroundColor = color
}
let circle = document.getElementById("color");
let redcolor = document.getElementById("red")
let bluecolor = document.getElementById("blue")
let greencolor = document.getElementById("green")
let reset = document.getElementById("reset")
let boxchange = document.getElementById("boxchange")
redcolor.addEventListener("click", colorchange.bind(null, "red"))
greencolor.addEventListener("click", colorchange.bind(null, "green"))
bluecolor.addEventListener("click", colorchange.bind(null, "blue"))
reset.addEventListener("click", colorchange.bind(null, "white"))
boxchange.addEventListener("change", () => colorchange(boxchange.value))

