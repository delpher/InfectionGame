export class Substance {

    constructor(x, y, amount) {
        this.x = x;
        this.y = y;
        this.area = 0.5;
        this.spreadRate = 10;
        this.dissolveRate = 10;
        this.amount = amount;
        this.minAmount = 0.01;
        this.concentrationFactor = this.amount / this.area;
        this.concentration = 1;
    }

    update(game) {
        game.events.onFrame((e) => this.spread(game, e.timeDiff));
    }

    spread(game, timeDiff) {
        if (this.amount <= this.minAmount) {
            game.world.removeSubstance(this);
            return;
        }
        
        this.area += this.spreadRate * timeDiff;
        this.amount -= this.dissolveRate * timeDiff;
        this.concentration = this.amount / this.area / this.concentrationFactor;
    }

    subtract(game, amount) {
        this.amount -= amount;
        this.concentration = this.amount / this.area / this.concentrationFactor;

        if (this.amount <= this.minAmount) {
            game.world.removeSubstance(this);
            return;
        }
    }

    render(game) {
        const {context, world} = game;

        const {x, y} = world.toScreen(game, this.x, this.y);
        const radius = world.getScaleX(game) * this.area;

        const alpha = this.concentration;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 0, 0, ${alpha})`;
        context.fill();
    }
}