const FPS = 30; // Frames per second
const FRICTION = 0.7; // Friction coefficient
const SHIP_SIZE = 30;
const SHIP_THRUST = 5; // Acceleration
const TURN_SPEED = 360;

/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

var ship = {
    x: canv.width / 2,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI,
    rot: 0,
    thrusting: false,
    thrust: {
        x: 0,
        y: 0
    }
}

// Setup event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Setup game loop
setInterval(update, 1000 / FPS);

function keyDown(/** @type {KeyboardEvent} */ ev) {
    switch (ev.keyCode) {
        case 37:  // Left arrow to rotate
            ship.rot = TURN_SPEED / 180 * Math.PI / FPS;
            break;
        case 38:  // Up arrow to thrust
            ship.thrusting = true;
            break;
        case 39:  // Right arrow to rotate
            ship.rot = -TURN_SPEED / 180 * Math.PI / FPS;
            break;
    }
}

function keyUp(/** @type {KeyboardEvent} */ ev) {
    switch (ev.keyCode) {
        case 37: // Stop rotating left
            ship.rot = 0;
            break;
        case 38: // Stop forward thrust
            ship.thrusting = false;
            break;
        case 39: // Stop rotating right
            ship.rot = 0;
            break;
    }
}

function update() {
    // Draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // Ship thrusting
    if (ship.thrusting) {
        ship.thrust.x += SHIP_THRUST * Math.cos(ship.a) / FPS;
        ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a) / FPS;
    } else {
        ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
        ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
    }

    // Draw the ship
    ctx.strokeStyle = "white";
    ctx.lineWidth = SHIP_SIZE / 20;
    ctx.beginPath();
    ctx.moveTo(  // Ship nose
        ship.x + (4 / 3) * ship.r * Math.cos(ship.a),
        ship.y - (4 / 3) * ship.r * Math.sin(ship.a)
    );
    ctx.lineTo(  // Rear left
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
    );
    ctx.lineTo(  // Rear left
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.stroke();

    // Rotate the ship
    ship.a += ship.rot;

    // Move the ship
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;

    // Center dot
    ctx.fillStyle = "red";
    ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);

}