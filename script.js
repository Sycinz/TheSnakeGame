var canvas;
var blockSize = 25;

var board = {
    x: 20,
    y: 20
}
var snake = {
    posX: 10, // range from 0 - 19
    posY: 10, // range from 0 - 19
    velocityX: 0,
    velocityY: 0,
    color: "green",
    length: 1,
}

window.onload = function gameLoop() {
    canvas = document.querySelector('canvas')

    // setting 
    canvas.width = board.x * blockSize
    canvas.height = board.y * blockSize

    setInterval(update, 1000/10) // calling update() every 100ms 
}

// main function that updates the whole game and creates object
function update() {
    var ctx = canvas.getContext("2d")

    // setting board background
    ctx.fillStyle = "#252525"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // checks if player inputs any key to change direction of a snake
    changeDirection()

    // Snake movement check
    snake.posX += snake.velocityX
    snake.posY += snake.velocityY

    // Snake create model (same head for now)
    ctx.fillStyle = snake.color
    ctx.fillRect(snake.posX * blockSize, snake.posY * blockSize, blockSize * snake.length, blockSize * snake.length)
}

function changeDirection() {
    document.addEventListener('keyup', (event) => {
        if(event.code == "ArrowUp") {
            snake.velocityX = 0;
            snake.velocityY = -1;
        } else if(event.code == "ArrowRight") {
            snake.velocityX = 1;
            snake.velocityY = 0;
        } else if(event.code == "ArrowDown") {
            snake.velocityX = 0;
            snake.velocityY = 1;
        } else if(event.code == "ArrowLeft") {
            snake.velocityX = -1;
            snake.velocityY = 0;
        } 
    })
}