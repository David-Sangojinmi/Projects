let paddleA = {
    x: 50,
    y: 195,
    up: false,
    down: false,
    speed: 5
};

let paddleB = {
    x: 850,
    y: 195,
    up: false,
    down: false,
    speed: 5,
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
            reset();
        }
    }
}

function reset() {
    game.aScore = 0;
    game.bScore = 0;
    ball.x = 450;
    ball.y = 200;
    ball.xspeed = 3;
    ball.yspeed = 6;
    paddleA.x = 50;
    paddleA.y = 195;
    paddleB.x = 850;
    paddleB.y = 195;
}

function paddleMove() {
    /* Code to make paddles move simultaneously  **Still need to update**
    // Paddle A movement
    if (paddleA.up === true) {
        paddleA.y -= paddleA.speed;
    } else if (paddleA.up === false) {
        paddleA.y -= 0;
    }
    if (paddleA.down === true) {
        paddleA.y += paddleA.speed;
    } else if (paddleA.down === false) {
        paddleA.y += 0;
    }
    // Paddle B movement
    if (paddleB.up === true) {
        paddleB.y -= paddleB.speed;
    } else if (paddleB.up === false) {
        paddleB.y -= 0;
    }
    if (paddleB.down === true) {
        paddleB.y += paddleB.speed;
    } else if (paddleB.down === false) {
        paddleB.y += 0;
    } */
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
    if ((ball.x - 10 < paddleA.x + 10 &&
        ball.x - 10 > paddleA.x) &&
        ball.y - 10 > paddleA.y - 40 &&
        ball.y + 10 < paddleA.y + 40) {
        ball.x += 5;
        ball.xspeed = ball.xspeed * random(-0.95, -1.05);
        ball.yspeed = ball.yspeed * random(0.95, 1.05);
    }
    // Paddle B
    if ((ball.x + 10 > paddleB.x - 10 &&
        ball.x + 10 < paddleB.x) &&
        ball.y - 10 > paddleB.y - 40 &&
        ball.y + 10 < paddleB.y + 40) {
        ball.x -= 5; 
        ball.xspeed = ball.xspeed * random(-0.95, -1.05);
        ball.yspeed = ball.yspeed * random(0.95, 1.05);
    }
}

/* Code for making keys move simultaneously  **Still need to change**
function keyPressed() {
    if (keyCode === UP_ARROW) {
        paddleB.up = true;
    } else if (keyCode === DOWN_ARROW) {
        paddleB.down = true;
    } else if (key === "w") {
        paddleA.up = true;
    } else if (key === "s") {
        paddleA.down = true;
    }
}

function keyReleasd() {
    if (keyCode === UP_ARROW) {
        paddleB.up = false;
    } else if (keyCode === DOWN_ARROW) {
        paddleB.down = false;
    } else if (key === "w") {
        paddleA.up = false;
    } else if (key === "s") {
        paddleA.down = false;
    }
} */

function gameInfo() {
    textSize(20);
    text("Player 1 Score: " + game.aScore, 200, 30);
    text("Player 2 Score: " + game.bScore, 540, 30);
    fill(255);
}