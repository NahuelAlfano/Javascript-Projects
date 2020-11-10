// initial count
let count = 0;


// get values and buttons
const value = document.getElementById('value');
const increasesBtn = document.querySelector('.increases');
const decreasesBtn = document.querySelector('.decreases');
const resetBtn = document.querySelector('.reset');


// event listeners for buttons

increasesBtn.addEventListener('click', function(){
    count++;
    value.textContent = count;
    changeColor(count);
})

decreasesBtn.addEventListener('click', function(){
    count--;
    value.textContent = count;
    changeColor(count);
})

resetBtn.addEventListener('click', function(){
    count = 0;
    value.textContent = count;
    changeColor(count);
})


function changeColor(number){
    switch(number){
        case 1:
            value.style.color = 'green';
            break;
        case 0:
            value.style.color = 'black';
            break;
        case -1:
            value.style.color = 'red';
            break;
        default:
            break;
    }
}