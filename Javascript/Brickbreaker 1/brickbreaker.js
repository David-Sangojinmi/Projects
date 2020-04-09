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

    for (let i = 0; i < 18; i++) {
        bricks[i] = new Brick();
    }
}

function draw() {
    background(0);

    // Gameplay loop
    gameLoop();
}

class Brick {
    constructor(x, y, w, h, collided) {
        this.x = x;
        this.y = y;
        this.w = 91;
        this.h = 30;
        this.collided = false;
    }

    show() {
        if (this.collided === true) {
            noFill();
            noStroke();
            this.x = 300;
            this.y = 900;
        } else {
            stroke(145, 0, 0);
            strokeWeight(4);
            fill(189, 9, 9);
            rect(this.x, this.y, this.w, this.h);
        }
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
            this.xspd = this.xspd * random(0.95, 1.05);
            this.yspd = this.yspd * random(-0.85, -1.15);
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
    text("BRICKBREAKER", 300, 170);

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
    for (let i = 0; i < 15; i++) {
        // Not the most efficient way but it will suffice for now
        if (i <= 5) {
            bricks[i].x = 50 + 100 * i;
            bricks[i].y = 100;
        }
        if (i <= 11 && i >= 6) {
            bricks[i].x = 50 + 100 * (i-6);
            bricks[i].y = 150;
        }
        if (i <= 17 && i >= 12) {
            bricks[i].x = 50 + 100 * (i-12);
            bricks[i].y = 200;
        }
        bricks[i].show();
    }
    for (let i = 0; i < 15; i++) {
        if (
            ball.x > bricks[i].x - (bricks[i].w / 2) &&
            ball.x < bricks[i].x + (bricks[i].w / 2) &&
            ball.y > bricks[i].y - (bricks[i].h / 2) &&
            ball.y < bricks[i].y + (bricks[i].h / 2)
        ) {
            //ball.xspd = ball.xspd * -1;
            ball.yspd = ball.yspd * random(-0.85, -1.15);
            bricks[i].collided = true;
            game.score += 5;
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
    text("GAME OVER", 300, 300);
    textSize(17);
    text("Press 'r' to restart", 300, 400);
    /* Implement this: when the player dies, their total points is
    recorded in a text file along with possible their player name.
    At the end of the game there is a list of all the players and 
    their scores when they died. Save the scores in some sort of 
    text file and then show this text file in a nicer form on the
    game end screen                                               */
    
    // To restart the game
    if (keyIsPressed === true) {
        if (key === "r") {
            gameBegin = true;
            gameActive = false;
            gameFinish = false;
        }
    }
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
