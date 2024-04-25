const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');
const pointsDisplay = document.getElementById('points');
let score = 0;
// Variables para la generacion de figuras, tiempo que tardan en generarse
let intervalIdSquare; 
let intervalIdCircle; 
let intervalIdOctagon; 
// Variables para tiempo de las figuras( tiempo que tardan en irse)
let octagonTimeout;
let triangleTimeout;
let squareTimeout;
let circleTimeout;

let gameInProgress = false;

// Variables para el contaje del tiempo principal
const totalTime = 30; // Tiempo total del juego en segundos
let timeLeft = totalTime; // Tiempo restante del juego
let timerInterval; // Identificador del intervalo del temporizador

function updateTimer() {        // Funcion para el contador principal del juego.
    document.getElementById('timer').textContent = 'Tiempo: ' + timeLeft + 's';

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
    timeLeft--;
}



//funcion para comenzar el juego
function startGame() {
    if (!gameInProgress){
    // Restablecer el tiempo restante del juego
    timeLeft = totalTime;
    // Iniciar el temporizador
    timerInterval = setInterval(updateTimer, 1000);

    // Generar cuadrado, circulo y triangulo al comenzar el juego
    generateRandomSquare();
    generateRandomCircle();
    generateRandomTriangle();
    generateRandomOctagone();
    //Cambiamos el estado del juego a encendido y desactivamos el boton de iniciar juego
    gameInProgress=true;
    startButton.disabled=true;
    // Establecemos los intervalos de tiempo para la generacion de cada figura
    intervalIdSquare = setInterval(generateRandomSquare, 2000); // Iniciar la generación de cuadrados cada 2 segundos
    intervalIdCircle = setInterval(generateRandomCircle, 1000); // Genera circulos cada 1 segundos
    intervalIdTriangle = setInterval(generateRandomTriangle, 3000); // Genera triangulos cada 3 segundos
    intervalIdOctagon = setInterval(generateRandomOctagone,4000); // genera octagonos cada 4 segundos

    }
}

// funcion para la creacion de cuadrados aleatorios 
function generateRandomSquare() {
    const newSquare = document.createElement('div');
    newSquare.className = 'square'; // Agregar la clase CSS para los cuadrados

    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    newSquare.appendChild(countdown);

    // Aplicar posición al cuadrado
    const size = 100; // Tamaño fijo para todos los cuadrados
    const x = Math.random() * (gameContainer.offsetWidth - size);
    const y = Math.random() * (gameContainer.offsetHeight - size);
    newSquare.style.left = x + 'px';
    newSquare.style.top = y + 'px';

    gameContainer.appendChild(newSquare);

    startCountdown(countdown, newSquare);
}

 // funcion para la creacion de circulos aleatorios
function generateRandomCircle() {       
    const newCircle = document.createElement('div');
    newCircle.className = 'circle'; // Agregar la clase CSS para los circulo

    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    newCircle.appendChild(countdown);

    // Aplicar posición al circulo
    const size = 100; // Tamaño fijo para todos los cuadrados
    const x = Math.random() * (gameContainer.offsetWidth - size);
    const y = Math.random() * (gameContainer.offsetHeight - size);
    newCircle.style.left = x + 'px';
    newCircle.style.top = y + 'px';

    gameContainer.appendChild(newCircle);

    startCountdown(countdown, newCircle);
}

// funcion para generar triangulos aleatorios 
function generateRandomTriangle() {
    const newTriangle = document.createElement('div');
    newTriangle.className = 'triangle'; // Agregar la clase CSS para los cuadrados

    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    newTriangle.appendChild(countdown);

    // Aplicar posición al cuadrado
    const size = 100; // Tamaño fijo para todos los cuadrados
    const x = Math.random() * (gameContainer.offsetWidth - size);
    const y = Math.random() * (gameContainer.offsetHeight - size);
    newTriangle.style.left = x + 'px';
    newTriangle.style.top = y + 'px';

    gameContainer.appendChild(newTriangle);

    startCountdown(countdown, newTriangle);
}
// Funcion para crear octagonos aleatorios por el container
function generateRandomOctagone() {
    const newOctagone = document.createElement('div');
    newOctagone.className = 'octagon'; // Agregar la clase CSS para los cuadrados

    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    newOctagone.appendChild(countdown);

    // Aplicar posición al cuadrado
    const size = 100; // Tamaño fijo para todos los cuadrados
    const x = Math.random() * (gameContainer.offsetWidth - size);
    const y = Math.random() * (gameContainer.offsetHeight - size);
    newOctagone.style.left = x + 'px';
    newOctagone.style.top = y + 'px';

    gameContainer.appendChild(newOctagone);

    startCountdown(countdown, newOctagone);
}





// funcion para establecer los contadores de las figuras geomtricas
function startCountdown(counterElement, square, circle, triangle) {
    let timeLeft = 3;

    squareTimeout = setTimeout(() => {
        square.remove(); // Eliminar el cuadrado si se acaba el tiempo
    }, timeLeft * 350);

    circleTimeout = setTimeout(() => {
        circle.remove(); // Eliminar el circulo si se acaba el tiempo
    }, timeLeft * 750);

    triangleTimeout = setTimeout(() => {
        triangle.remove(); // Eliminar el triangulo si se acaba el tiempo
    }, timeLeft * 750);

    octagonTimeout = setTimeout(() => {
        octagone.remove(); // Eliminar el triangulo si se acaba el tiempo
    }, timeLeft * 500);


    const countdownInterval = setInterval(() => {
        timeLeft--;
        counterElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            counterElement.textContent = '';
        }
    }, 1000);
}

function endGame() {
    // Mostrar la puntuación final en un mensaje de alerta
    alert('¡Juego terminado! Tu puntuación final es: ' + score);

    // Detener los intervalos de generación de figuras
    clearInterval(intervalIdSquare);
    clearInterval(intervalIdCircle);
    clearInterval(intervalIdTriangle);
    clearInterval(intervalIdOctagon);

    // Reiniciar la puntuación a cero y actualizar el marcador en la pantalla
    score = 0;
    pointsDisplay.textContent = score;

    // Eliminar todas las figuras que aún estén en pantalla
    const squares = gameContainer.querySelectorAll('.square');
    squares.forEach(square => square.remove());

    const circles = gameContainer.querySelectorAll('.circle');
    circles.forEach(circle => circle.remove());

    const triangle = gameContainer.querySelectorAll('.triangle');
    triangle.forEach(triangle => triangle.remove());

    const octagon = gameContainer.querySelectorAll('.octagon');
    octagon.forEach(octagon => octagon.remove());


    // Reiniciar los timeouts
    clearTimeout(squareTimeout);
    clearTimeout(circleTimeout);
    clearTimeout(triangleTimeout);
    clearTimeout(octagonTimeout);

    // Reiniciar el estado del juego a no iniciado
    gameInProgress = false;

    // Habilitar el botón de inicio para permitir que el jugador inicie un nuevo juego
    startButton.disabled = false;
}


// funcion para darle click al boton iniciar partida y que llame a start game
startButton.addEventListener('click', () => {
    // Reiniciar la puntuación y la pantalla de puntuación
    score = 0;
    pointsDisplay.textContent = score;
    startGame();
});

// evento para escuchar las teclas y que se elimine la correspondiente figura
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        event.preventDefault(); // Evitar comportamiento por defecto (scroll) al presionar 'w'
        const square = gameContainer.querySelector('.square');
        if (square) {
            square.remove();
            clearTimeout(squareTimeout);
            score++;
            pointsDisplay.textContent = score;
            
        }
        else {
            score--;
            pointsDisplay.textContent = score;
            failSound(); // Reproducir sonido de fallo
        }
        
    }
     else if (event.key === 'q') {
        event.preventDefault(); // Evitar comportamiento por defecto (scroll) al presionar 'q'
        const circle = gameContainer.querySelector('.circle');
        if (circle) {
            circle.remove();
            clearTimeout(circleTimeout);
            score++;
            pointsDisplay.textContent = score;
            
        }
        else {
            score--;
            pointsDisplay.textContent = score;
            failSound(); // Reproducir sonido de fallo
        }
    }

    else if (event.key === 'e') {
        event.preventDefault(); // Evitar comportamiento por defecto (scroll) al presionar 'q'
        const triangle = gameContainer.querySelector('.triangle');
        if (triangle) {
            triangle.remove();
            clearTimeout(triangleTimeout);
            score++;
            pointsDisplay.textContent = score;
            
        }
        else{
            score--;
            pointsDisplay.textContent = score;
            failSound(); // Reproducir sonido de fallo
        }
    }
    else if (event.key === 'r') {
        event.preventDefault(); // Evitar comportamiento por defecto (scroll) al presionar 'q'
        const octagon = gameContainer.querySelector('.octagon');
        if (octagon) {
            octagon.remove();
            clearTimeout(octagonTimeout);
            score+=2;
            pointsDisplay.textContent = score;
            successSound(); // Reproducir sonido de éxito
        }
        else{
            score--;
            pointsDisplay.textContent = score;
            failSound(); // Reproducir sonido de fallo
        }
    }

});


function successSound() {
    const audioAcierto = document.getElementById('acierto');
    audioAcierto.play();
}

function failSound() {
    const falloAudio = document.getElementById('fallo');
    falloAudio.play();
}
