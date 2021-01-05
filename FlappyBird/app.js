document.addEventListener('DOMContentLoaded', () =>{
    
    // CONSTANTES
    
    const gameDisplay = document.querySelector('.game-container')
    const bird = document.querySelector('.bird')
    const gravity = 2
    
    // VARIABLES
    
    let birdBottom = 250
    let birdLeft = 200
    let isPlaying = true
    let contador = 0

    // INTERVALO PARA ACTUALIZAR EL JUEGO (POSICION "PAJARO")
    
    let gameTimerId = setInterval(startGame, 20 )
    
    
    // FUNCIONES
    
    
    function startGame(){
        birdBottom -= gravity
        bird.style.left = birdLeft + "px"
        bird.style.bottom = birdBottom + "px"
        if(birdBottom === 0){
            gameOver()
        }
    }
    
    // AGREGO EVENT LISTENER CONTROL KEY ( 32 es el keycode para la barra espaciadora)

    function control(e){
        if(e.keyCode === 32){
            jump()
        }
    }
    
    document.addEventListener('keydown', control)

    function gameOver(){
        clearInterval(gameTimerId);
        isPlaying = false;
        document.removeEventListener('keydown', control)
        console.log('game Over')
    }

    function jump(){
        // para no salirse de pantalla
        if (birdBottom < 480){
            birdBottom = birdBottom + 50
        }
        bird.style.bottom = birdBottom + "px"
    }

    

    // CREANDO LOS OBSTACULOS E INICIALIZANDO

    function createObstacle(){

        // variables
        // hago un random de altura con la altura maxima del piso
        // variables de obstaculo de abajo
        let randomHeightBottom = Math.random() * 180;
        let obstacleBottom = randomHeightBottom;

        let randomHeightTopObstacle = (Math.random() * -180)

        // posicion desde la derecha de donde viene el obstaculo

        let obstacleLeft = 500;
        
        
        // creando los obstaculos
        
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if(isPlaying){
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        contador += 1;
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        
        
        // posicionando los obstaculos
        
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.top = randomHeightTopObstacle + 'px'
        
        function movingObstacle(){
            // agrego una variacion para mover los obstaculos
            obstacleLeft -= 2

            // actualizo la posicion left de los obstaculos

            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'
            
            // borro el obstaculo cuando salga de pantalla
            
            if(obstacleLeft === -60 && contador >= 2){
                contador--;
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }

            // borrando obstaculos con las colisiones

            if(obstacleLeft > 150 && obstacleLeft < 250 && birdLeft === 200 && birdBottom < (obstacle.clientHeight - (180 - obstacleBottom))){   
                clearInterval(timerId)
                gameOver()
                if(contador == 2){
                    gameDisplay.lastChild.remove(obstacle)
                    gameDisplay.lastChild.remove(topObstacle)
                    
                }
            }
            else if(obstacleLeft > 150 && obstacleLeft < 250 && birdLeft === 200 && birdBottom > (220 - randomHeightTopObstacle)){
                console.log(220 - randomHeightTopObstacle)
                clearInterval(timerId)
                gameOver()
                if(contador == 2){
                    gameDisplay.lastChild.remove(obstacle)
                    gameDisplay.lastChild.remove(topObstacle)
                    
                }
            }
        }

        // timer para actualizar el movimiento
        
        let timerId = setInterval(movingObstacle, 20);
        
        if(isPlaying){
            setTimeout(createObstacle, 3000);
        }

    }
    
    createObstacle()

})