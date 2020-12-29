document.addEventListener('DOMContentLoaded', () =>{
    
    // CONSTANTES

    const gameDisplay = document.querySelector('.game-container')
    const bird = document.querySelector('.bird')
    const gravity = 2

    // VARIABLES

    let initialPositionBottom = 250
    let initialPositionLeft = 200


    // FUNCIONES


    function startGame(){
        initialPositionBottom -= gravity
        bird.style.left = initialPositionLeft + "px"
        bird.style.bottom = initialPositionBottom + "px"
    }

    function jump(){
        // para no salirse de pantalla
        if (initialPositionBottom < 480){
            initialPositionBottom = initialPositionBottom + 50
        }
        bird.style.bottom = initialPositionBottom + "px"
    }

    // CONTROL KEY ( 32 es el keycode para la barra espaciadora)
    function control(e){
        if(e.keyCode === 32){
            jump()
        }
    }

    document.addEventListener('keydown', control)


    // CREANDO LOS OBSTACULOS

    function createObstacle(){
        const obstacle = document.createElement('div')
    }
    
    // INTERVALO PARA ACTUALIZAR LA POSICION

    let timerId = setInterval(startGame, 20 )
})