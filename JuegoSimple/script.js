const personaje = document.getElementById('character');
const block = document.getElementById('block');




function jump(){
    if(personaje.classList != 'jumpAnimation'){
        personaje.classList.add('jumpAnimation')
    }
    setTimeout(function(){
        personaje.classList.remove('jumpAnimation')
    }, 700)
}

const youLose = setInterval(function(){
    let personajePosition = parseInt(window.getComputedStyle(personaje).getPropertyValue('top'));
    let blockPosition = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockPosition < 35 && blockPosition > 15 && personajePosition >= 130){
        block.style.animation = 'none';
        alert('You lose!!')
    }
}, 10);