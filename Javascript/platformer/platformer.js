/*
Author: David Sangojinmi
Background image: https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds/?utm_source=opengameart&utm_medium=public&utm_campaign=myself
To-Do:
    - Get a platform going
*/

var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");

// Platform
import Platform from "platform.js";
let pf = new Platform(GAME_WIDTH, GAME_HEIGHT);

// Load images
var background = new Image();
background.src = "images/bg2.jpg";

// Load audio
// var jumpS = new Audio();
// jumpS.src = "sounds/jump.mp3";

// Important variables
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var lastTime = 0;
var plyr = {
    posX: 0,
    posY: 0,
    dX: 0,
    dY: 0,
    health: 50
}

// Draw the environment
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //paddle.update(deltaTime);
    pf.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);