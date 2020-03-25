let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    numOf: 0,
    xspeed: 4,
    yspeed: 6
};

function setup() {
    createCanvas(900, 390);
    ellipseMode(CENTER);
}

function draw() {
    background(0);

    // Ball
    ellipse(ball.x, ball.y, ball.diameter);
    // Movements
    ballMove();
    // Game info display
    // gameInfo();
    // Resetting the game score
    /* if (keyIsPressed === true) {
        if (key === "p") {
            game.score = 0;
        }
    } */
}

function ballMove() {
    //---------- Arrays ----------//

    //---------- Movement ---------//
    /// Horizontal movement
    ball.x -= ball.xspeed;
    if (
        ball.x - 10 < paddleA.x + 10 &&
        ball.y + 10 < paddleA.y + 35 &&
        ball.y - 10 > paddleA.y - 35
    ) {
        ball.xspeed = ball.xspeed * -1;
    }
    if (ball.x + 10 >= 890) {
        ball.xspeed = ball.xspeed * -1;
    }
    /// Vertical movement
    ball.y -= ball.yspeed;
    if (ball.y - 10 <= 10) {
        ball.yspeed = ball.yspeed * -1;
    }
    if (ball.y + 10 >= 380) {
        ball.yspeed = ball.yspeed * -1;
    }
    //------------ Resetting -----------//
    if (ball.x + 10 < paddleA.x - 10) {
        ball.x = 450;
        ball.y = 200;
        game.score += 1;
    }
}