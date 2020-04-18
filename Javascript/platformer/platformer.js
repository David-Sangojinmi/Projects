
var cvs = document.getElementById("gameScreen");
var ctx = cvs.getContext("2d");

// Load images
var background = new Image();
background.src = "images/bg2.jpg";

// Load audio
// var jumpS = new Audio();
// jumpS.src = "sounds/jump.mp3";

// Important variables
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var plyr = {
    posX: 0,
    posY: 0,
    dX: 0,
    dY: 0,
    health: 50
}

// Draw the environment
function draw() {
    ctx.drawImage(background, 0, 0);

    requestAnimationFrame(draw);
}
draw();