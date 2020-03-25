var col1 = {
    x1: 850,
    y1: 0,
    x2: 900,
    y2: 100,
    speed: 3
};

var col2 = {
    x1: 850,
    y1: 180,
    x2: 900,
    y2: 390,
    speed: 3
};

var brd = {
    x: 100,
    y: 100,
    fallSpd: 2,
    points: 0
}
function setup() {
    createCanvas(900, 390);
    rectMode(CORNERS);
    ellipseMode(CENTER);
    //background(39, 201, 204);
}

function draw() {
    background(39, 201, 204);

    column();
    bird();
    score();
}

function bird() {
    // Displaying the bird
    strokeWeight(1.5);
    stroke(0);
    fill(255, 211, 36);
    ellipse(brd.x, brd.y, 40, 35);

    // Controlling the birds movements
    if (brd.y >= 390) {
        brd.y = 100;
    }
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            brd.y -= 4*brd.fallSpd;
        }
    } else {
        brd.y += brd.fallSpd;
    }

}

function column() {
    strokeWeight(2);
    stroke(0);
    fill(54, 209, 52);

    // Column height generation
    col1.y2 = random(25, 285);
    col2.y1 = col1.y2 + 80;

    // Column generation
    rect(col1.x1, col1.y1, col1.x2, col1.y2);
    rect(col2.x1, col2.y1, col2.x2, col2.y2);

    // Columns moving along the screen
    col1.x1 -= col1.speed;
    col1.x2 -= col1.speed;
    col2.x1 -= col2.speed;
    col2.x2 -= col2.speed;

    // Column respawning when it hits edge
    if (col1.x1 <= -50 || col2.x1 <= -50) {
        col1.x1 = 850;
        col1.x2 = 900;
        col2.x1 = 850;
        col2.x2 = 900;
        rect(col1.x1, col1.y1, col1.x2, col1.y2);
        rect(col2.x1, col2.y1, col2.x2, col2.y2);
    }
}

function score() {
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(255);
    stroke(255, 200);
    text('Score: ' + brd.points, 450, 30);
}