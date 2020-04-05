let gameBegin = true;
let gameActive = false;
let gameFinish = false;

let paddle = {
    xpos: 300,
    ypos: 650,
    speed: 5,
};

let bricks = [];

let game = {
    level: 1,
    score: 0,
    lives: 3,
};

function setup() {
    createCanvas(600, 700);
    rectMode(CENTER);
    ellipseMode(CENTER);

    for (let i = 0; i < 2; i++) {
        let x = 200 + 200 * i;
        bricks[i] = new Bricks(Bricks.x, 300, Bricks.w, Bricks.h);
    }
}

function draw() {
    background(0);

    // Gameplay loop
    gameLoop();
}

class Bricks {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 60;
    }

    show() {
        stroke(145, 0, 0);
        strokeWeight(2);
        fill(189, 9, 9);
        rect();
    }

    destroy() {
        noFill();
    }
}

function gameStart() {
    // Screen for the start of the game
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(40);
    fill(200, 200, 200);
    textFont("monospace");
    text("BRICK BREAKER", 300, 200);
    rect(67, 67, 67, 67);

    // Instructions
    /* Welcome! Use the left and right arrow keys to move the paddle left and right. You start at level 1 and you have three lives. To get points, use your paddle to hit the ball and break the bricks. You have three lives before its game over. Press ENTER to start. Good luck!
     */

    // Moving to gameplay
    if (keyIsPressed === true) {
        if (keyCode === ENTER) {
            gameBegin = false;
            gameActive = true;
        }
    }
}

function gamePlay() {
    // Screen for when the game is active

    // Show the level, points and lives

    // Draw the paddle and bricks
    rect(paddle.xpos, paddle.ypos, 80, 20, 5, 5, 10, 10);
    for (let i = 0; i < 2; i++) {
        bricks[i];
    }

    // Paddle moving
    if (keyIsPressed === true) {
        if (keyCode === LEFT_ARROW) {
            paddle.xpos -= paddle.speed;
        }
        if (keyCode === RIGHT_ARROW) {
            paddle.xpos += paddle.speed;
        }
    }
}

function gameEnd() {
    // Screen for when the game has finished
}

function gameLoop() {
    if (gameBegin === true) {
        gameStart();
    }
    if (gameActive === true) {
        gamePlay();
    }
    if (gameFinish === true) {
        gameEnd();
    }
}
