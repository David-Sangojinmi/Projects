var ball = {
    x: 450,
    y: 200,
    diameter: 20,
    opacity: 255,
    numOf: 10,
    xspeed: 4,
    yspeed: 6
};

function setup() {
    createCanvas(900, 390);
    ellipseMode(CENTER);
    background(0);
}

function draw() {
    ball.opacity = random(0, 255);
    fill(255, ball.opacity);

    noStroke();
    ball.x = random(0, width);
    ball.y = random(0, height);
    ball.diameter = random(5, 30);
    spawnBalls();
    
}

function spawnBalls() {
    ellipse(ball.x, ball.y, ball.diameter);
}

function keyPressed() {
    if (key === 'p') {
        clear();
        background(0);
    }
}