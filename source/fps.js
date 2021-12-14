export class FPS {
    
    constructor() {
        this.fps = 0;
    }

    update(game) {
        game.events.onFrame((e) => this.updateFps(e.timeDiff));
    }   

    updateFps(timeDiff) {
        this.fps = Math.round(1 / timeDiff);
    }

    render(game) {
        const {context} = game;

        context.fillStyle = 'black';
        context.font = '10px sans-serif';
        context.fillText('FPS: ' + this.fps, 3, 10);
    } 
}