/*
Video: https://www.youtube.com/watch?v=L07i4g-zhDA&list=PLt4757glfbhHkfz7dqojMbnBdgUnFih4B&index=5&t=26s
Time of video: 23:26
Code: https://github.com/CodeExplainedRepo/FlappyBird-JavaScript/blob/master/flappyBird.js
*/

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// Load audio
var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// Important variables
var gap = 85;
var constant  = pipeNorth.height + gap;

var bX = 10;
var bY = 150;
var gravity = 1;

// When key is down
document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 20;
}

// Generating pipes
var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

function draw() {
    ctx.drawImage(bg, 0, 0); // Draw background

    for (var i = 0; i < pipe.length; i++) {
        constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
        
        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
            });
        }

        // Detect if there is a collision
        if () {
            location.reload();
        }

        if () {
            score++;
            scor.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height); // Foreground
    ctx.drawImage(bird, bX, bY); // Draw bird

    bY += gravity;

    requestAnimationFrame(draw);
}

draw();