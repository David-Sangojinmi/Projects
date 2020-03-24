let paddleA = {
  x: 50,
  y: 200,
  speed: 5
};

let paddleB = {
  x: 50,
  y: 450,
  speed: 5
};

function setup() {
  createCanvas(500, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);

  //Call the paddles
  rect(paddleA.x, paddleA.y, 20, 50);
  move();
}

//function padA() {
//let x = paddleA.x;
//let y = paddleA.y;

//rect(paddleA.x, paddleA.y, 20, 50);

function move() {
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      paddleA.y -= paddleA.speed;
    }
  }
}
//}

function padB() {}
