let paddleA = {
    x: 50,
    y: 200,
    speed: 5
};

let paddleB = {
    x: 830,
    y: 200,
    speed: 5,
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
    aScore: 0,
    bScore: 0,
    aLives: 3,
    bLives: 3
}

function setup() {
    createCanvas(900, 390);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0);
    stroke(255);
    line(450, 0, 450, 390);

    // Paddle
    rect(paddleA.x, paddleA.y, 20, 80);
    rect(paddleB.x, paddleB.y, 20, 80);

    // Ball
    ellipse(ball.x, ball.y, ball.diameter);

    // Movements
    paddleAMove();
    paddleBMove();
    ballMove();
    checkCollision();

    // Game info display
    gameInfo();

    // Resetting the game score
    if (keyIsPressed === true) {
        if (key === 'p') {
            game.aScore = 0;
            game.bScore = 0;
        }
    }
}

function paddleAMove() {
    // Paddle movement
    if (paddleA.y - 45 >= 0 && paddleA.y + 45 <= 390) {
        if (keyIsPressed === true) {
            if (key === "w") {
                paddleA.y -= paddleA.speed;
            }
            if (key === "s") {
                paddleA.y += paddleA.speed;
            }
        }
    }
}

function paddleBMove() {
    // Paddle movement
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            paddleB.y -= paddleB.speed;
        }
        if (keyCode === DOWN_ARROW) {
            paddleB.y += paddleB.speed;
        }
    }
}

function ballMove() {
    // Horizontal movement
    ball.x -= ball.xspeed;
    // Vertical movement
    ball.y -= ball.yspeed;
    if (ball.y - 10 <= 0) {
        ball.yspeed = ball.yspeed * -1;
    }
    if (ball.y + 10 >= 390) {
        ball.yspeed = ball.yspeed * -1;
    }
    // Resetting and scoring
    if (ball.x + 10 < paddleA.x - 10) {
        ball.x = 450;
        ball.y = 200;
        ball.xspeed = ball.xspeed * -1;
        ball.yspeed = ball.yspeed * -1;
        game.aScore += 1;
    }
    if (ball.x - 10 > paddleB.x + 10) {
        ball.x = 450;
        ball.y = 200;
        ball.xspeed = ball.xspeed * -1;
        ball.yspeed = ball.yspeed * -1;
        game.bScore += 1;
    }
}

function checkCollision() {
    // Paddle A


    // Paddle B

}

function gameInfo() {
    textSize(20);
    text('Player 1 Score: ' + game.aScore, 200, 30);
    text("Player 2 Score: " + game.bScore, 540, 30);
    fill(255);
}