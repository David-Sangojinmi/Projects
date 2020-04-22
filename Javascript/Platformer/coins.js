export default class Coin {
    constructor() {
        this.coin = new Image();
        this.coin.src = "images/coin.png";
        this.coinX = 600;
        this.coinY = 460;
    }

    displayCoins(ctx) {
        ctx.drawImage(this.coin, this.coinX, this.coinY);
    }

    scrollLeft(ctx) {
        this.coinX += 5;
    }

    scrollRight(ctx) {
        this.coinX -= 5;
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
