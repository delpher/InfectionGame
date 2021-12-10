export class Timer {
    constructor(interval) {
        this.frameStart = this.tickStart = Date.now();
        this.interval = interval || 100;
    }

    update(game) {
        const now = Date.now();

        if (game.paused) {
            this.frameStart = now;
            this.tickStart = now;
            return;
        }
        
        const frameTime = now - this.frameStart;
        this.frameStart = now;

        game.events.enqueueFrameEvent(frameTime);

        const tickTime = now - this.tickStart;
        if (tickTime >= this.interval) {
            game.events.enqueueTickEvent(tickTime);
            this.tickStart = now;
        }
    }

    render() { }
}