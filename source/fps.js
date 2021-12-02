export class FPS {
    
    constructor() {
        this.fps = 0;
        this.frames = 0;
    }

    update(game) {
        this.frames+=1;
        game.events.onTick((e) => this.updateFps());
    }   

    updateFps() {
        this.fps = this.frames;
        this.frames = 0;
    }

    render(game) {
        const {context} = game;

        context.font = '10px sans-serif';
        context.fillText(this.fps, 3, 10);
    } 
}