let paddleA = {
    x: 50,
    y: 200,
    speed: 5
};

let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    xspeed: 2,
    yspeed: 3
};

function setup() {
    createCanvas(900, 390);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0);

    // Paddle
    rect(paddleA.x, paddleA.y, 20, 50);
    // Ball
    ellipse(ball.x, ball.y, ball.diameter);
    // Movements
    paddleMove();
    ballMove();
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
    if ((ball.x-10) <= (paddleA.x+9)) {
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
    // Collision detection
}
