export class Events {

    constructor() {
        this.queue = [];
    }

    initialize(canvas) {
        window.addEventListener('resize', (e) => this.onWindowResize(e));
        window.addEventListener('keypress', (e) => this.onWindowKeypress(e));
        canvas.addEventListener('click', (e) => this.onMouseClick(e));
        canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.enqueueResizeEvent(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) {
        this.enqueueMouseMoveEvent(e);
    }

    onWindowResize(e) {
        this.enqueueResizeEvent(e.target.innerWidth, e.target.innerHeight);
    }

    onWindowKeypress(e) {
        if (e.code === 'Space')
            this.enqueueTogglePauseEvent();
    }

    onMouseClick(e) {
        this.enqueueMouseClickEvent(e);
    }

    enqueueTogglePauseEvent() {
        this.queue.push({type: 'pause'});
    }

    enqueueResizeEvent(newWidth, newHeight) {
        this.queue.push(
            { type: 'resize', width: newWidth, height: newHeight }
        );
    }

    enqueueTickEvent(timeDiff) {
        this.queue.push(
            { type: 'tick', timeDiff: timeDiff }
        );
    }

    enqueueFrameEvent(timeDiff) {
        this.queue.push(
            {type: 'frame', timeDiff: timeDiff}
        );
    }

    enqueueMouseClickEvent(e) {
        this.queue.push({type: 'click', x : e.clientX, y: e.clientY});
    }

    enqueueMouseMoveEvent(e) {
        this.queue.push({type: 'move', x: e.clientX, y: e.clientY});
    }

    onResize(callback) {
        this.invoke('resize', callback);
    }

    onTick(callback) {
        this.invoke('tick', callback);
    }

    onFrame(callback) {
        this.invoke('frame', callback);
    }

    onTogglePause(callback) {
        this.invoke('pause', callback);
    }

    onClick(callback) {
      this.invoke('click', callback);
    }

    onMove(callback) {
        this.invoke('move', callback);
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