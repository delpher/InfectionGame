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

    render(game) {
        const {context} = game;
        context.canvas.width = this.canvasWidth;
        context.canvas.height = this.canvasHeight;

        context.beginPath();
        context.rect(this.left, this.top, this.width, this.height);
        context.stroke();
    }
}