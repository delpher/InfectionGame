export class Timer {
    constructor(interval) {
        this.startTime = Date.now();
        this.interval = interval || 1000;
    }

    update(game) {
        const timeDiff = Date.now() - this.startTime;

        if (timeDiff >= this.interval) {
            game.events.enqueueTickEvent();
            this.startTime = Date.now();
        }
    }

    render() { }
}