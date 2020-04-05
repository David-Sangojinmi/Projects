let gameBegin = true;
let gameActive = false;
let gameFinish = false;

let paddle = {
    xpos: 300,
    ypos: 550,
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

    for (let i = 0; i < 5; i++) {
        //let x = 200 + 200 * i;
        bricks[i] = new Brick();
    }
}

function draw() {
    background(0);

    // Gameplay loop
    gameLoop();
}

class Brick {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = 200;
        this.w = 80;
        this.h = 30;
    }

    show() {
        stroke(145, 0, 0);
        strokeWeight(4);
        fill(189, 9, 9);
        rect(this.x, this.y, this.w, this.h);
    }

    destroy() {
        noFill();
    }
}

function gameStart() {
    // Screen for the start of the game
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(60);
    fill(250);
    textFont("monospace");
    text("BRICK BREAKER", 300, 170);

    // Instructions
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(20);
    fill(235);
    text(
        "Welcome! Use the left and right arrow keys to move the paddle left and right. You start at level 1 and you have three lives. To get points, use your paddle to hit the ball and break the bricks. You have three lives before its game over. Press ENTER to start. Good luck!", 300, 450, 380, 400
    );

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
    // Show the game stats: level, points and lives
    stroke(255);
    line(0, 600, 600, 600);
    noStroke();
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(20);
    fill(250);
    text("Level: " + game.level, 150, 650);
    text("Points: " + game.score, 300, 650);
    text("Lives: " + game.lives, 450, 650);

    // Draw the paddle and bricks
    rect(paddle.xpos, paddle.ypos, 90, 20, 5, 5, 10, 10);
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].x = 80 + 110*i;
        bricks[i].show();
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
