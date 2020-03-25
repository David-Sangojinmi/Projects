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

function setup() {
    createCanvas(900, 390);
    rectMode(CORNERS);
    ellipseMode(CENTER);
    //background(39, 201, 204);
}

function draw() {
    background(39, 201, 204);

    // Column height generation
    col1.y2 = random(25, 285);
    col2.y1 = 390 - col1.y2 - 80;
    
    // Column generation
    rect(col1.x1, col1.y1, col1.x1+50, col1.y2);
    rect(col2.x1, col2.y1, col2.x1+50, col2.y2);
    
    // Columns moving along the screen
    col1.x1 -= col1.speed;
    col2.x1 -= col2.speed;

    // Column respawning when it hits edge
    if (keyIsPressed === true && key === 'r') {
        col1.x1 = 850;
        col1.x2 = 900;
        col2.x1 = 850;
        col2.x2 = 900;
        rect(col1.x1, col1.y1, col1.x1 + 50, col1.y2);
        rect(col2.x1, col2.y1, col2.x1 + 50, col2.y2);
    }
}