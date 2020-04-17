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
var playButton = new Image();
bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";
playButton.src = "images/playBtn.png";

// Load audio
var fly = new Audio();
var score = new Audio();
fly.src = "sounds/fly.mp3";
score.src = "sounds/score.mp3";

// Important variables
var gap = 85;
var constant;
var bX = 10;
var bY = 150;
var gravity = 1.5;
var bPoints = 0;

var gameBegin = true;
var gameMiddle = false;
var gameEnding = false;

// Generating pipes
var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0,
};

// Load font
async function loadFonts() {
    var gameFont = new FontFace('myfont', 'url(fonts/Flappybirdy.tff');
    await gameFont.load();
}

function gameStart() {
    // Game title and instructions
    function drawStart() {
        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(fg, 0, cvs.height - fg.height);
        ctx.drawImage(playButton, 90, cvs.height - fg.height - 50, 100, 50);
        ctx.drawImage(
            bird,
            cvs.width / 2 - bird.width / 2,
            cvs.height / 2 + bird.height
        );
        // document.font.load('20pt "Flappy Bird"'); // .then(
        // renderText("Flappy Bird", 144, 389);
        ctx.font = '30px "gameFont"';
        ctx.fillText("FlappyBird", 50, 50);
        // ctx.textAlign = "center";
        // ctx.fillText("FlappyBird", x, y);

        requestAnimationFrame(drawStart);
    }

    document.addEventListener("keypress", function onEvent(moveToStart) {
        if (moveToStart.key === "p") {
            gameBegin = false;
            gameMiddle = true;
        } else {
            return false;
        }
    });

    drawStart();
}

function playReset() {
    bX = 10;
    bY = 150;
    bPoints = 0;
    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

        pipe[i].x--;
    }
}

function gamePlay() {
    // When key is down
    document.addEventListener("keydown", moveUp);

    function moveUp() {
        bY -= 25;
        fly.play();
    }

    // Drawing all the objects and interactions
    function drawMiddle() {
        ctx.drawImage(bg, 0, 0); // Draw background

        for (var i = 0; i < pipe.length; i++) {
            constant = pipeNorth.height + gap;
            ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

            pipe[i].x--;

            if (pipe[i].x === 125) {
                pipe.push({
                    x: cvs.width,
                    y:
                        Math.floor(Math.random() * pipeNorth.height) -
                        pipeNorth.height,
                });
            }

            // Detect if there is a collision with pipes
            if (
                (bX + bird.width >= pipe[i].x &&
                    bX <= pipe[i].x + pipeNorth.width &&
                    (bY <= pipe[i].y + pipeNorth.height ||
                        bY + bird.height >= pipe[i].y + constant)) ||
                bY + bird.height >= cvs.height - fg.height
            ) {
                playReset();
            }
            // Detect collision with ground
            if (bX + bird.with >= bg.x) {
                playReset();
            }

            if (pipe[i].x == 5) {
                bPoints++;
                score.play();
            }
        }

        ctx.drawImage(fg, 0, cvs.height - fg.height); // Foreground
        ctx.drawImage(bird, bX, bY); // Draw bird
        ctx.fillStyle = "#fff";
        ctx.font = "40px sans-serif";
        ctx.fillText(bPoints, 130, 40);

        bY += gravity;

        // console.log(score);

        requestAnimationFrame(drawMiddle);
    }

    drawMiddle();
}

function gameEnd() {
    // End game screen, score and restart option
    function drawEnd() {
        ctx.drawImage(bg, 0, 0);
        ctx.fillStyle = "#e8db84";
        ctx.fillRect(48, 156, 192, 200);
        // End text
        requestAnimationFrame(drawEnd);
    }
    drawEnd();
}

function gameLoop() {
    if (gameBegin === true) {
        gameStart();
    } else if (gameMiddle === true) {
        gamePlay();
    } else if (gameEnding === true) {
        gameEnd();
    }
}

gameLoop();
// gamePlay();
