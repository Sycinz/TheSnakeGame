const map = [
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9]
]

var canvas = document.querySelector('canvas')

let snake = {
    size: 80, // in pixels for now
    color: "green"
}

function snakePosRefresh() {}

function canvasDrawing(x, y) {
    
    var ctx = canvas.getContext("2d")

    ctx.fillStyle = snake.color
    ctx.fillRect(map[0][x] * snake.size, map[1][y] * snake.size, snake.size, snake.size)

    snake.posX = x
    snake.posY = y

    // return snake.posX, snake.posY
}

function changeDirection() {
    document.addEventListener('keyup', (event) => {
        document.innerHTML += (event.key)
    })
}

window.onload = function gameLoop() {
    // for(let i; i <= 10; i++) {
    //     canvasDrawing(Math.floor(Math.random() * 9), Math.floor(Math.random() * 9))
    // }
   canvasDrawing(Math.floor(Math.random() * map[0].length), Math.floor(Math.random() * map[0].length))
}