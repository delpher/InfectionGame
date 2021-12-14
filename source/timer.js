export class Timer {
    constructor(interval) {
        this.frameStart = this.tickStart = Date.now();
        this.interval = interval || 0.1;
        this.ticks = 0;
    }

    update(game) {
        const now = Date.now();

        if (game.paused) {
            this.frameStart = now;
            this.tickStart = now;
            return;
        }
        
        const frameTime = (now - this.frameStart) / 1000;
        this.frameStart = now;
        game.events.enqueueFrameEvent(frameTime);

        const tickTime = (now - this.tickStart) / 1000;
        if (tickTime >= this.interval) {
            game.events.enqueueTickEvent(tickTime);
            this.tickStart = now;
            this.ticks++;
        }
    }

    render() { }
}