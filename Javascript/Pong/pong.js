let paddleA = {
    x: 50,
    y: 200,
    speed: 5
};

let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    xspeed: 4,
    yspeed: 6
};

let game = {
    round: 1,
    score: 0,
    lifes: 3
}

function setup() {
    createCanvas(900, 390);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0);

    // Paddle
    rect(paddleA.x, paddleA.y, 20, 70);
    // Ball
    ellipse(ball.x, ball.y, ball.diameter);
    // Movements
    paddleMove();
    ballMove();
    // Game info display
    gameInfo();
    // Resetting the game score
    if (keyIsPressed === true) {
        if (key === 'p') {
            game.score = 0;
        }
    }
}

function paddleMove() {
    // Paddle movement
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            paddleA.y -= paddleA.speed;
        }
        if (keyCode === DOWN_ARROW) {
            paddleA.y += paddleA.speed;
        }
    }
}

function ballMove() {
    // Horizontal movement
    ball.x -= ball.xspeed;
    if ((ball.x-10) < (paddleA.x+10) && ((ball.y+10 < paddleA.y+35) && (ball.y-10 > paddleA.y-35))) {
        ball.xspeed = ball.xspeed * -1;
    }
    if ((ball.x+10) >= 890) {
        ball.xspeed = ball.xspeed * -1;
    }
    // Vertical movement
    ball.y -= ball.yspeed;
    if (ball.y - 10 <= 10) {
        ball.yspeed = ball.yspeed * -1;
    }
    if (ball.y + 10 >= 380) {
        ball.yspeed = ball.yspeed * -1;
    }
    // Resetting
    if (ball.x+10 < paddleA.x-10) {
        ball.x = 450;
        ball.y = 200;
        game.score += 1;
    }
}

function gameInfo() {
    textSize(20);
    text('Score: ' + game.score, 420, 30);
    fill(255);
}