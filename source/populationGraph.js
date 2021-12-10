export class PopulationGraph {
    constructor() {
        this.points = [];
        this.maxPoints = 100;
        this.width = 200;
        this.height = 40;
        this.top = 15;
        this.left = 3;
    }

    update(game) {
        const {events} = game;
        events.onFrame(() => this.updateGraph(game.world));
    }

    updateGraph(world) {
        this.points.push(world.species.length);
        if (this.points.length > this.maxPoints)
            this.points.shift();
    }

    render(game) {
        const {context} = game;

        const maxValue = Math.max(...this.points);
        const minValue = Math.min(...this.points);
        const avgValue = this.points.reduce((a, b) => a + b, 0) / this.points.length;
        const vScale = this.height / (maxValue - minValue);
        const hScale = this.width / this.maxPoints;
        const bottom = this.top + this.height;

        context.font = '8px sans-serif';
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillText(maxValue, this.left + 1, this.top + 10);
        context.fillText(minValue, this.left + 1, bottom - 2);
        context.fillText(Math.ceil(avgValue), this.left + 1, this.top + this.height / 2 + 4);

        context.beginPath();
        for (let i = 0; i < this.points.length; i++)
        {
            context.moveTo(this.left + i * hScale, bottom);
            context.lineTo(this.left + i * hScale, bottom - (this.points[i] - minValue) * vScale);
        }
        context.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        context.stroke();
    }
}