let gameBegin = true;
let gameActive = false;
let gameFinish = false;
let ballActive = false;

let paddle = {
    xpos: 300,
    ypos: 550,
    speed: 5,
    width: 90,
    height: 20,
};

/* let padpos = {
    left: paddle.xpos - paddle.width / 2,
    right: paddle.xpos + paddle.width / 2,
    top: paddle.ypos - paddle.height / 2,
    bottom: paddle.ypos + paddle.height / 2,
}; */

let bricks = [];

let game = {
    level: 1,
    score: 0,
    lives: 5,
};

function setup() {
    createCanvas(600, 700);
    rectMode(CENTER);
    ellipseMode(CENTER);

    for (let i = 0; i < 5; i++) {
        bricks[i] = [];
        for (let j = 0; bricks[i][j] < 2; j++) {
            bricks[i][j] = new Brick();
        }
    }

    //let playerName = createInput("Enter player name: ");
}

function draw() {
    background(0);

    // Gameplay loop
    gameLoop();
}

class Brick {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 30;
    }

    show() {
        stroke(145, 0, 0);
        strokeWeight(4);
        fill(189, 9, 9);
        rect(this.x, this.y, this.w, this.h);
    }

    collide() {
        noFill();
        noStroke();
        this.x = 300;
        this.y = 800;
        game.score += 5;
    }
}

class Ball {
    constructor(x, y, d, xspd, yspd) {
        this.x = 300;
        this.y = 530;
        this.d = 20;
        this.xspd = 5;
        this.yspd = 3;
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
        // General movement and edge collision
        this.y -= this.yspd;
        this.x += this.xspd;
        if (this.x + this.d / 2 >= 599) {
            this.xspd = this.xspd * -1;
        }
        if (this.y - this.d / 2 <= 0) {
            this.yspd = this.yspd * -1;
        }
        if (this.x - this.d / 2 <= 0) {
            this.xspd = this.xspd * -1;
        }
        if (this.y + this.d / 2 >= 600) {
            this.x = 300;
            this.y = 529;
            game.score -= 5;
            game.lives -= 1;
            ballActive = false;
            paddle.xpos = 300;
            paddle.ypos = 550;
        }
        // Paddle collision
        if (
            this.y + 10 > paddle.ypos - 9 &&
            this.y < paddle.ypos - 10 &&
            this.x - 10 >= paddle.xpos - 45 &&
            this.x + 10 <= paddle.xpos + 45
        ) {
            this.y -= 5;
            this.yspd = this.yspd * -1;
        }
        // Brick collision
        for (let i = 0; i < 5; i++) {
            bricks[i] = [];
            for (let j = 0; bricks[i][j] < 2; j++) {
                if (
                    ball.x > bricks[i][j].x - 40 &&
                    ball.x < bricks[i][j].x + 40 &&
                    ball.y > bricks[i][j].y - 15 &&
                    ball.y < bricks[i][j].y + 15
                ) {
                    bricks[i][j].collide();
                    //this.xspd = this.xspd * -1;
                    this.yspd = this.yspd * -1;
                }
            }
        }
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
        "Welcome! Use the left and right arrow keys to move the paddle left and right. Press the space bar to release the ball. You start at level 1 and you have five lives. Get points by breaking bricks with the ball and losing a life loses you points. Click the button below or press 'g' to start. Good luck!",
        300,
        400,
        380,
        375
    );
    //text("User: " + input.playerName, 300, 545);
    rect(300, 550, 120, 50);
    fill(61, 55, 138);
    textStyle(BOLD);
    text("START", 300, 555);

    // Moving to gameplay
    if (mouseX > 240 && mouseX < 360 && mouseY > 525 && mouseY < 575) {
        if (mouseIsPressed === true) {
            gameBegin = false;
            gameActive = true;
            gameFinish = false;
        }
    }
    if (keyIsPressed === true) {
        if (key === "g") {
            gameBegin = false;
            gameActive = true;
            gameFinish = false;
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
    for (let i = 0; i < 5; i++) {
        bricks[i] = [];
        for (let j = 0; bricks[i][j] < 2; j++) {
            bricks[i][j].x = 80 + 110 * i;
            bricks[i][j].y = 200 + 100 * j;
            bricks[i][j].show();
        }
    }
    ball.show();
    if (keyIsPressed === true) {
        if (key === " ") {
            ballActive = true;
        }
    }
    if (ballActive === true) {
        ball.show();
        ball.move();
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

    if (game.lives <= 0) {
        gameBegin = false;
        gameActive = false;
        gameFinish = true;
    }
}

function gameEnd() {
    // Screen for when the game has finished
    fill(20, 20, 20);
    rect(300, 350, 600, 700);
    fill(134, 207, 19);
    textSize(30);
    textAlign(CENTER);
    text("GAME OVER", 300, 350);
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
