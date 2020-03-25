let ball = {
    x: 450,
    y: 200,
    diameter: 20,
    numOf: 10,
    xspeed: 4,
    yspeed: 6
};

function setup() {
    createCanvas(900, 390);
    ellipseMode(CENTER);
}

function draw() {
    background(0);

    fill(255);
    
    // Ball
    while (ball.numOf > 0) {
        ellipse(ball.x, ball.y, ball.diameter);
        ball.numOf--;
    }
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
    //---------- Spawning ----------//

    //---------- Movement ---------//
    /// Horizontal movement
    ball.x += ball.xspeed;
    
    
}