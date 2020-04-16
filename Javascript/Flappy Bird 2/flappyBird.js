var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// Draw images
ctx.drawImage(imageName, 100, 150, 50, 50);

// Generating pipes
var pipe = [];
pipe[0] = {
    x: cvs.clientWidth,
    y: 0
}

function draw() {
    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + const);
        pipe[i].x--;
        if (pipe[i].x == cvs.width - 188) {
            pipe.push(
                x: cvs.width,
                y: Math.floor(Math.random() * pN.height) - pN.height
            );
        }
    }
    ctx.drawImage(bg, 0, 0);  // Draw background

    ctx.drawImage(pipeNorth, pX, pY);  // Top pipe
    ctx.drawImage(pipeSouth, pX, pY + ###)  // Bottom pipe
    ctx.drawImage(fg, 0, cvs.height - fg.height);  // Foreground
    ctx.drawImage(bird, bX, bY);  // Draw bird

    bY += gravity;
    requestAnimationFrame(draw);

}

draw();