export default class gameStats {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.healthBar = new Image();
        this.pause = new Image();
        this.healthBar.src = "images/healthbar.png";
        this.pause.src = "images/pause.png";
        this.hp = 140;
    }

    display(ctx) {
        // Health bar
        ctx.fillStyle = "#29de00";
        ctx.fillRect(628, 25, this.hp, 19);
        ctx.drawImage(this.healthBar, 600, 17);
        if (this.hp <= 0) {
            this.hp = 0;
        }
        // Points

        // Game pause button
        ctx.drawImage(this.pause, 17, 17);

        // Maybe inventory

    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
