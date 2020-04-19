/*
Author: David Sangojinmi
Background image: https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds/?utm_source=opengameart&utm_medium=public&utm_campaign=myself
To-Do:
    - Get a platform going
*/

// var cvs = document.getElementById("gameScreen");
// var ctx = cvs.getContext("2d");

// // Platform
// // import Platform from "platform";
// // let pf = new Platform(GAME_WIDTH, GAME_HEIGHT);

// // Load images
// var background = new Image();
// background.src = "images/bg2.jpg";

// // Load audio
// // var jumpS = new Audio();
// // jumpS.src = "sounds/jump.mp3";

// // Important variables
// var GAME_WIDTH = 800;
// var GAME_HEIGHT = 600;
// var lastTime = 0;
// var plyr = {
//     posX: 0,
//     posY: 0,
//     dX: 0,
//     dY: 0,
//     health: 50
// }

// var platform = [];
// platform[0] = {
//     x: 0,
//     y: 500,
// };

// // Draw the environment
// function gameLoop(timestamp) {
//     let deltaTime = timestamp - lastTime;
//     lastTime = timestamp;

//     ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

//     // pf.update(deltaTime);
//     // pf.draw(ctx);
//     ctx.drawImage(background, 0, 0);
//     for (var i = 0; i < platform.length; i++) {
//         ctx.fillStyle = "#1c1c1c";
//         ctx.fillRect(platform[i].x, platform[i].y, 800, 100);
//         ctx.fillStyle = "#525252";
//         ctx.fillRect(platform[i].x + 800, platform[i].y, 800, 100);
//         function moveLeft() {
//             platform[0].x -= 5;
//         }
//         function moveRight() {
//             platform[0].x += 5;
//         }

//         if (platform[i].x === -800) {
//             platform.push({
//                 x: 800,
//                 y: 500,});
//         }
//     }

//     requestAnimationFrame(gameLoop);

//     document.addEventListener("keydown", (event) => {
//         if (event.code === "ArrowRight") {
//             moveLeft();
//         } else if (event.code === "ArrowLeft") {
//             moveRight();
//         }
//     });
// }

// requestAnimationFrame(gameLoop);
let bground;

function preload() {
    bground = loadImage("images/bg2.jpg");
}

function setup() {
    createCanvas(800, 600);
    background(0);
    image(bground, 0, 0);
}

function draw() {
    rect(30, 20, 55, 55);
}