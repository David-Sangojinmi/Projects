let gameBegin = true;
let gameActive = false;
let gameFinish = false;

function setup() {
    createCanvas(600, 700);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0);

    // Gameplay loop
    gameLoop();
}

function gameStart() {
    // Screen for the start of the game
    rect(67, 67, 67, 67);

    if (keyIsPressed === true) {
        if (keyCode === ENTER) {
            gameBegin = false;
            gameActive = true;
        }
    }
}

function gamePlay() {
    // Screen for when the game is active
    // Maybe include different stages
    rect(456, 456, 67, 67);

    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            gameBegin = true;
            gameActive = false;
        }
    }
}

function gameEnd() {
    // Screen for when the game has finished


}

function gameLoop() {
    if (gameBegin === true) {
        gameStart();
    }
    if (gameActive === true) {
        gamePlay();
    }
    if (gameFinish === true) {
        gameEnd();
    }
}