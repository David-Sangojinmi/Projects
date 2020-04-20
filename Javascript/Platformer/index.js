/*
Author: David Sangojinmi
Background image: https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds/?utm_source=opengameart&utm_medium=public&utm_campaign=myself
To-Do:
    - Get a platform going
*/

var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");

// Importing the classes needed
import Platform from "./platform.js";
import Sprite from "./sprite.js";
import gameScreens from "./gameScreens.js";
import gameStats from "./gameStats.js";
let pf = new Platform(GAME_WIDTH, GAME_HEIGHT);
let sprite = new Sprite(GAME_WIDTH, GAME_HEIGHT);
let gScreens = new gameScreens(GAME_WIDTH, GAME_HEIGHT);
let gStats = new gameStats(GAME_WIDTH, GAME_HEIGHT);

// Load all the images
var background = new Image();
//              var player = new Image();
background.src = "images/bg6-2.jpg";
//              player.src = "images/sprite.jpg";

// Load audio
// var jumpS = new Audio();
// jumpS.src = "sounds/jump.mp3";

// Important variables
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var lastTime = 0;
var platform = [];
platform[0] = {
    x: 0,
    y: 500,
};

// Draw the environment
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    gStats.display(ctx);
    gStats.update(deltaTime);

    for (var i = 0; i < platform.length; i++) {
        pf.update(deltaTime);
        pf.draw(ctx);

        if (platform[i].x === -800) {
            platform.push({
                x: 800,
                y: 500,
            });
        }
    }

    sprite.display(ctx, deltaTime);
    sprite.update(deltaTime);
    
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowLeft" || event.code === "KeyA") {
            sprite.moveLeft(ctx, deltaTime);
        }
        if (event.code === "ArrowRight" || event.code === "KeyD") {
            sprite.moveRight(ctx, deltaTime);
        }
        if (event.code === "ArrowUp" || event.code === "Space") {
            // sprite.jump(ctx, deltaTime);
            gStats.hp -= 1 / deltaTime;
        }
    });

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
