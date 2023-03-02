var map = new Array[10][10]

function snakePosRefresh() {

}

function canvasDrawing(x, y) {
    const canvas = docunent.querySelector('#game')
    let ctx = canvas.getContext("2d")

    ctx.moveTo(map[x][y])
}

function snakeMove() {
    canvasDrawing(0, 0);
}

function gameLoop() {

}