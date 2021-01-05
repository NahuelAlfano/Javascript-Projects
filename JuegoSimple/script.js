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