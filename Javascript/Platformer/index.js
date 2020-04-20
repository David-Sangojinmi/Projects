/*
Author: David Sangojinmi
Background image: https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds/?utm_source=opengameart&utm_medium=public&utm_campaign=myself
To-Do:
    - Get a platform going
*/

var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");

// Load images
var background = new Image();
//              var player = new Image();
background.src = "images/bg2.jpg";
//              player.src = "images/sprite.jpg";

// Importing the classes needed
import Platform from "./platform.js";
import Sprite from "./sprite.js";
import gameScreens from "./gameStats.js";
let pf = new Platform(GAME_WIDTH, GAME_HEIGHT);
let sprite = new Sprite();
let gScreen = new gameScreens();

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

    sprite.display(player, ctx);
    sprite.display(deltaTime);
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp" || event.code === "Space") {
            sprite.jump();
        }
    });

    requestAnimationFrame(gameLoop);

    // document.addEventListener("keydown", (event) => {
    //     if (event.code === "ArrowRight") {
    //         moveLeft();
    //     } else if (event.code === "ArrowLeft") {
    //         moveRight();
    //     }
    // });
}

requestAnimationFrame(gameLoop);
