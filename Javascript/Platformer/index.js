/*
Author: David Sangojinmi
Background image: https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds/?utm_source=opengameart&utm_medium=public&utm_campaign=myself
To-Do:
    - Get a platform going
*/

var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;

// Importing the classes needed
import Platform from "./platform.js";
import Sprite from "./sprite.js";
import gameScreens from "./gameScreens.js";
import gameStats from "./gameStats.js";
let sprite = new Sprite(GAME_WIDTH, GAME_HEIGHT);
let gScreens = new gameScreens(GAME_WIDTH, GAME_HEIGHT);
let gStats = new gameStats(GAME_WIDTH, GAME_HEIGHT);

// Load all the images
var background = new Image();
//     var player = new Image();
background.src = "images/bg6-3.jpg";
//     player.src = "images/sprite.jpg";

// Load audio
//     var jumpS = new Audio();
//     jumpS.src = "sounds/jump.mp3";

// Important variables
var gamestart = true;
var gameplay = false;
var gamepaused = false;
var gameend = false;
var lastTime = 0;
var platform = [];
for (var i = 0; i < 6; i++) {
    platform[i] = new Platform(GAME_WIDTH, GAME_HEIGHT, 8, 67, 168);
    platform[i].position.x = 0 + 800 * i;
    platform[i].position.y = 500 + 10 * i;
}

function coinCollision() {
    if (sprite.position.x === 650) {
        gStats.points += 1;
        //Coin.hide();
    } else if (sprite.position.x === 350) {
        gStats.points -= 1;
        //Coin.hide();
    } else {
        gStats.points += 0;
    }
}

///////////////////////////////
////  GAMEPLAY FUNCTIONS   ////
///////////////////////////////
function gameStart(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    gScreens.update(deltaTime);
    gScreens.startScreen(ctx);

    window.requestAnimationFrame(gameStart);
}

document.addEventListener("click", (ev) => {
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    if (
        ev.clientX >= 336 &&
        ev.clientX <= 336 + gScreens.play.width &&
        ev.clientY >= 452 &&
        ev.clientY <= 452 + gScreens.play.height
    ) {
        gamestart = false;
        gameplay = true;
        gameLoop();
    }
});

function gamePlay(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    gStats.update(deltaTime);
    gStats.display(ctx);

    for (var i = 0; i < platform.length; i++) {
        platform[i].update(deltaTime);
        platform[i].draw(ctx);

        if (platform[i].position.x === -800) {
            platform[i].position.x = 800;
        }
    }

    sprite.update(deltaTime);
    sprite.display(ctx, deltaTime);

    coinCollision();

    window.requestAnimationFrame(gamePlay);
}

function gameEnd() {
    //////
}

function gamePaused() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    // Draw resume button
}

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
        for (var i = 0; i < platform.length; i++) {
            platform[i].position.x += 5;
        }
        sprite.moveLeft();
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
        for (var i = 0; i < platform.length; i++) {
            platform[i].position.x -= 5;
        }
        sprite.moveRight();
    }
    if (event.code === "ArrowUp" || event.code === "KeyW") {
        sprite.jump(ctx);
    }
});

document.addEventListener("click", (evnt) => {
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    if (
        evnt.clientX >= 17 &&
        evnt.clientX <= 17 + gStats.pause.width &&
        evnt.clientY >= 17 &&
        evnt.clientY <= 17 + gStats.pause.height
    ) {
        gamepaused = true;
        gamePaused();
    }
});

///////////////////////////////
////     GAMEPLAY INIT     ////
///////////////////////////////
function gameLoop() {
    if (gamestart == true) {
        gameStart();
    }
    if (gameplay == true) {
        gamePlay();
    }
    if (gameend == true) {
        gameEnd();
    }
}

gameLoop();
