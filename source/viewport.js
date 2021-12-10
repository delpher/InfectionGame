export class Viewport {

    update(game) {
        game.events.onResize((e) => this.resize(e));
    }

    resize(e) {
        this.canvasWidth = e.width;
        this.canvasHeight = e.height;

        const minDim = Math.min(e.width, e.height);

        this.width = minDim;
        this.height = minDim;
        
        this.left = this.canvasWidth / 2 - this.width / 2;
        this.top = this.canvasHeight / 2 - this.height / 2;
    }

    contains(x, y) {
        return x >= this.left && 
            x <= this.left + this.width &&
            y >= this.top &&
            y <= this.top + this.height;
    }

    render(game) {
        const {context} = game;
        context.canvas.width = this.canvasWidth;
        context.canvas.height = this.canvasHeight;

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        context.beginPath();
        context.rect(this.left, this.top, this.width, this.height);
        context.stroke();
    }
}