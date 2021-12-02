import {Viewport} from './viewport';
import {Events} from './events';
import {FPS} from './fps';
import {World} from './world';
import {Timer} from './timer';

export class Game {

    constructor(canvas) {
        this.events = new Events();
        this.context = canvas.getContext('2d');
        this.viewport = new Viewport();
        this.world = new World();
        this.timer = new Timer();
        this.fps = new FPS();
    }

    initialize() {
        this.events.initialize();
        this.nextFrame();
    }

    run() {
        this.update();
        this.render();
        this.nextFrame();
    }

    update() {
        this.timer.update(this);
        this.viewport.update(this);
        this.fps.update(this);
        this.world.update(this);
        this.events.clear();
    }

    render() {
        this.timer.render(this);
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.viewport.render(this);
        this.world.render(this);
        this.fps.render(this);
    }

    nextFrame() {
        window.requestAnimationFrame(() => this.run());
    }
}