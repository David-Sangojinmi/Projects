let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

` Define the game function`

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - LastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    `game.update(deltaTime);`
    `game.draw(ctx);`

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);