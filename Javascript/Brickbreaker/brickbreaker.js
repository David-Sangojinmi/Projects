let gameBegin = true;
let gameActive = false;
let gameFinish = false;

let paddle = {
    xpos: 300,
    ypos: 550,
    speed: 5,
    width: 90,
    height: 20,
};

let padpos = {
    left: paddle.xpos - paddle.width / 2,
    right: paddle.xpos + paddle.width / 2,
    top: paddle.ypos - paddle.height / 2,
    bottom: paddle.ypos + paddle.height / 2,
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
        game.score += 5;
    }
}

class Ball {
    constructor(x, y, d) {
        this.x = 300;
        this.y = 530;
        this.d = 20;
    }

    show() {
        strokeWeight(1);
        stroke(158, 158, 158);
        fill(79, 75, 75);
        circle(this.x, this.y, this.d);
        noStroke();
        fill(173, 172, 172);
        circle(this.x - 3, this.y - 3, 7);
    }

    move() {

    }

    collide() {
        // Code for colliding **Can't this just be in the move() function?**
    }
}

let ball = new Ball();

function gameStart() {
    // Screen for the start of the game
    noStroke();
    fill(61, 55, 138);
    rect(300, 350, 600, 700);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(60);
    fill(250);
    textFont("courier");
    text("BRICK BREAKER", 300, 170);

    // Instructions
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(20);
    fill(235);
    text(
        "Welcome! Use the left and right arrow keys to move the paddle left and right. You start at level 1 and you have three lives. To get points, use your paddle to hit the ball and break the bricks. You have three lives before its game over. Click the button below or press ENTER to start. Good luck!",
        300,
        400,
        380,
        375
    );
    rect(300, 550, 120, 50);
    fill(61, 55, 138);
    textStyle(BOLD);
    text("START", 300, 555);

    // Moving to gameplay
    if (mouseX > 240 && mouseX < 360 && mouseY > 525 && mouseY < 575) {
        if (mouseIsPressed === true) {
            gameBegin = false;
            gameActive = true;
        }
    }
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

    // Draw the paddle, bricks and the ball
    rect(paddle.xpos, paddle.ypos, paddle.width, paddle.height, 5, 5, 10, 10);
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].x = 80 + 110 * i;
        bricks[i].show();
    }
    ball.show();

    // Paddle moving
    if (keyIsPressed === true) {
        if (keyCode === LEFT_ARROW) {
            paddle.xpos -= paddle.speed;
        }
        if (keyCode === RIGHT_ARROW) {
            paddle.xpos += paddle.speed;
        }
    }
    if (paddle.xpos - 45 <= 0) {
        paddle.xpos = 45;
    }
    if (paddle.xpos + 45 >= 599) {
        paddle.xpos = 555;
    }

    /* Fix this so the brick actually disappears ***
    if (keyIsPressed === true) {
        if (key === "p") {
            bricks[2].destroy();
        }
    } */
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
