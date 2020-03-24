let paddleA = {
    x: 50,
    y: 200,
    speed: 5
};

let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    speed: 7
};

function setup() {
    createCanvas(900, 400);
    rectMode(CENTER);
    ellipsdeMode(CENTER);
}

function draw() {
    background(0);

    // Paddle
    rect(paddleA.x, paddleA.y, 20, 50);
    // Ball
    ellipse(ball.x, ball.y, ball.diameter);
    paddleMove();
    ballMove();
}

function paddleMove() {
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            paddleA.y -= paddleA.speed;
        }
    }
}

function ballMove() {}
