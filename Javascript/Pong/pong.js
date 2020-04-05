let paddleA = {
    x: 50,
    y: 200,
    speed: 4
};

let paddleB = {
    x: 850,
    y: 200,
    speed: 4
};

let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    xspeed: 2,
    yspeed: 6
};

let game = {
    round: 1,
    aScore: 0,
    bScore: 0,
    //aLives: 3,
    //bLives: 3
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
    paddleMove();
    ballMove();
    checkCollision();

    // Game info display
    gameInfo();

    // Resetting the game score
    if (keyIsPressed === true) {
        if (key === 'p') {
            game.aScore = 0;
            game.bScore = 0;
            ball.x = 450;
            ball.y = 200;
            ball.xspeed = 3;
            ball.yspeed = 6;
        }
    }
}

function paddleMove() {
    // Paddle A movement
    if (keyIsPressed === true) {
        if (key === "w") {
            paddleA.y -= paddleA.speed;
        }
        if (key === "s") {
            paddleA.y += paddleA.speed;
        }
    }
    // Paddle B movement
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            paddleB.y -= paddleB.speed;
        }
        if (keyCode === DOWN_ARROW) {
            paddleB.y += paddleB.speed;
        }
    }
    // Edge detection
    if (paddleA.y - 39 <= 0) {
        paddleA.y += 5;
    }
    if (paddleA.y + 39 >= 390) {
        paddleA.y -= 5;
    }
    if (paddleB.y - 39 <= 0) {
        paddleB.y += 5;
    }
    if (paddleB.y + 39 >= 390) {
        paddleB.y -= 5;
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
    if (ball.x - 10 < 0) {
        ball.x = 450;
        ball.y = 200;
        ball.xspeed = ball.xspeed * -1;
        ball.yspeed = ball.yspeed * -1;
        game.bScore += 1;
    }
    if (ball.x + 10 > 900) {
        ball.x = 450;
        ball.y = 200;
        ball.xspeed = ball.xspeed * -1;
        ball.yspeed = ball.yspeed * -1;
        game.aScore += 1;
    }
}

function checkCollision() {
    // Paddle A
    if (ball.x - 10 < paddleA.x + 10 &&
        ball.y - 10 > paddleA.y - 45 &&
        ball.y + 10 < paddleA.y + 45) {
        ball.xspeed = ball.xspeed * random(-0.95, -1.05);
        ball.yspeed = ball.yspeed * random(0.95, 1.05);
    }
    // Paddle B
    if (ball.x + 10 > paddleB.x - 10 &&
        ball.y - 10 > paddleB.y - 45 &&
        ball.y + 10 < paddleB.y + 45) {
        ball.xspeed = ball.xspeed * random(-0.95, -1.05);
        ball.yspeed = ball.yspeed * random(0.95, 1.05);
    }
}

function gameInfo() {
    textSize(20);
    text('Player 1 Score: ' + game.aScore, 200, 30);
    text("Player 2 Score: " + game.bScore, 540, 30);
    fill(255);
}

// Adjust and implement the code below so both paddles
// can move at the same time. Rather than one stopping
// the other from moving.
/* 
function keyPressed() {
    if (keyCode == UP)
        player1_up = true;
    else if (keyCode == DOWN)
        player1_up = true;
    if (key == 'w')
        player2_up = true;
    else if (key == 's')
        player2_down = true;
}

function keyReleasd() {
    if (keyCode == UP)
        player1_up = false;
    else if (keyCode == DOWN)
        player1_up = false;
    if (key == 'w')
        player2_up = false;
    else if (key == 's')
        player2_down = false;
}
*/