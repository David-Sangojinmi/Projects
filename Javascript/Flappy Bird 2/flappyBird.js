/*
Code: https://github.com/CodeExplainedRepo/FlappyBird-JavaScript/blob/master/flappyBird.js
TO-DO: Make it so when you click the play button it moves to game play and
doesn't just get stuck on the start screen.
Fix the transition from game play to end screen.
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
// async function loadFonts() {
//     var gameFont = new FontFace("flappyFont", "url(fonts/Flappybirdy.tff)");
//     await gameFont.load();
// }

function gameStart() {
    // Game title and instructions
    if (gameBegin === true) {
        function drawStart() {
            ctx.drawImage(bg, 0, 0);
            ctx.drawImage(fg, 0, cvs.height - fg.height);
            ctx.drawImage(playButton, 90, cvs.height - fg.height - 50, 100, 50);
            ctx.drawImage(
                bird,
                cvs.width / 2 - bird.width / 2,
                cvs.height - fg.height - bird.height - 120
            );
            ctx.font = "40px impact"; // Candara, Roboto, Courier, Arial
            ctx.strokeStyle = "black";
            ctx.lineWidth = 4;
            ctx.strokeText("FlappyBird", 55, 180);
            ctx.fillStyle = "white";
            ctx.fillText("FlappyBird", 55, 180);

            requestAnimationFrame(drawStart);
        }
        drawStart();
    }
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyP") {
            gameBegin = false;
            gameMiddle = true;
            gamePlay();
        }
    });
    document.addEventListener("mousedown", (ev) => {
        if ((ev.clientX >= 90 && ev.clientX <= 190) && (ev.clientY >= cvs.height - fg.height - 50 && ev.clientY <= cvs.height - fg.height)) {
            gameBegin = false;
            gameMiddle = true;
            gamePlay();
        }
    });
}

function playReset() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    gameMiddle = false;
    gameEnding = true;
    gameEnd();
}

function gamePlay() {
    if (gameMiddle === true) {
        function drawMiddle() {
            // Drawing all the objects and interactions
            ctx.drawImage(bg, 0, 0); // Draw background

            for (var i = 0; i < pipe.length; i++) {
                constant = pipeNorth.height + gap;
                ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
                ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

                pipe[i].x--;

                if (pipe[i].x === 100) {
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
                    ctx.clearRect(0, 0, cvs.width, cvs.height);
                    gameMiddle = false;
                    gameEnding = true;
                    gameEnd();
                }

                if (pipe[i].x == 5) {
                    bPoints++;
                    score.play();
                }
            }
            ctx.drawImage(fg, 0, cvs.height - fg.height); // Foreground
            ctx.drawImage(bird, bX, bY); // Draw bird
            ctx.font = "40px impact"; //    -
            ctx.strokeStyle = "black"; //    -
            ctx.lineWidth = 8; //   Draw
            ctx.strokeText(bPoints, 130, 40); //  points
            ctx.fillStyle = "#fff"; //    -
            ctx.fillText(bPoints, 130, 40); //    -
            bY += gravity; // Gravity keeping the bird falling

            requestAnimationFrame(drawMiddle);
        }
        drawMiddle();
    }
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // When key is down
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp" || event.code === "Space") {
            bY -= 25;
            fly.play();
        }
    });

    // Colliding with the ground
    if (bX + bird.with >= bg.x) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        gameMiddle = false;
        gameEnding = true;
        gameEnd();
    }
}

function gameEnd() {
    //ctx.clearRect(0, 0, cvs.width, cvs.height);
    if (gameEnding === true) {
        // End game screen, score and restart option
        function drawEnd() {
            ctx.drawImage(bg, 0, 0);
            ctx.fillStyle = "#fff";  // #e8db84
            ctx.fillRect(48, 156, 192, 200);
            // End text
            requestAnimationFrame(drawEnd);
        }
        drawEnd();
    }
}

gameStart();