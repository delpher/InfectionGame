export class Probe {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.location = {x:0, y:0};
        this.enabled = false;
    }

    update(game) {
        if (!this.enabled) return;
        
        this.concentration = this.getConcentration(game).toFixed(4);
        game.events.onMove(e => {
            if (!game.viewport.contains(e.x, e.y)) return;
            this.x = e.x;
            this.y = e.y;
            this.location = game.world.toGame(game, this.x, this.y);
        });
    }

    render(game) {
        if (!this.enabled) return;

        const {context} = game;
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillText(this.concentration, this.x + 2, this.y - 2);
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(this.x, this.y - 5);
        context.lineTo(this.x, this.y + 5);
        context.moveTo(this.x - 5, this.y);
        context.lineTo(this.x + 5, this.y);
        context.stroke();
    }

    getConcentration(game) {
        const {x,y} = this.location;
        return game.world.fluid.getTotalConcentration(x, y);
    }
}