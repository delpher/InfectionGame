export class Events {

    constructor() {
        this.queue = [];
    }

    initialize() {
        window.addEventListener('resize', (e) => this.onWindowResize(e));
        this.enqueueResizeEvent(window.innerWidth, window.innerHeight);
    }

    onWindowResize(e) {
        this.enqueueResizeEvent(e.target.innerWidth, e.target.innerHeight);
    }

    enqueueResizeEvent(newWidth, newHeight) {
        this.queue.push(
            { type: 'resize', width: newWidth, height: newHeight }
        );
    }

    enqueueTickEvent(time) {
        this.queue.push(
            { type: 'tick', time: time }
        );
    }

    onResize(callback) {
        this.invoke('resize', callback);
    }

    onTick(callback) {
        this.invoke('tick', callback);
    }

    invoke(eventType, handler) {
        const events = this.queue.filter(e => e.type === eventType);
        for (let event of events)
            handler(event);
    }

    clear() {
        this.queue = [];
    }
}