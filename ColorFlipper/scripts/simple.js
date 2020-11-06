const colors = ["red", "green", "white", "blue", "aquamarine"];
const button = document.getElementById('button');
const color = document.getElementById('color');

function getRandomColor(){
    let pickedColor = Math.floor(Math.random() * colors.length);
    return pickedColor;
}

button.addEventListener('click', function(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = colors[newColor];
    color.textContent = colors[newColor];
});