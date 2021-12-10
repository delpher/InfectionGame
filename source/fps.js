export class FPS {
    
    constructor() {
        this.fps = 0;
        this.frames = 0;
    }

    update(game) {
        this.frames+=1;
        game.events.onTick((e) => this.updateFps(e.timeDiff));
    }   

    updateFps(timeDiff) {
        this.fps = Math.ceil((1000 / timeDiff) * this.frames);
        this.frames = 0;
    }

    render(game) {
        const {context} = game;

        context.fillStyle = 'black';
        context.font = '10px sans-serif';
        context.fillText('FPS: ' + this.fps, 3, 10);
    } 
}