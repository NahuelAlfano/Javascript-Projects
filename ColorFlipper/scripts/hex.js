const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const button = document.getElementById('button');
const color = document.getElementById('color');

button.addEventListener('click', function(){
    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
        hexColor += colors[getRandomHexColor()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

const getRandomHexColor = () => {
    return Math.floor(Math.random() * colors.length);
}

console.log(colors[getRandomHexColor()]);