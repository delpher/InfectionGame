import {Viewport} from './viewport';
import {Events} from './events';
import {FPS} from './fps';
import {World} from './world';
import {Timer} from './timer';
import {Probe} from './probe';
import {StatsDisplay} from './statsDisplay';
import {PopulationGraph} from './populationGraph';

export class Game {

    constructor(canvas) {
        this.events = new Events();
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.viewport = new Viewport();
        this.world = new World();
        this.timer = new Timer();
        this.fps = new FPS();
        this.probe = new Probe();
        this.populationGraph = new PopulationGraph();
        this.statsDisplay = new StatsDisplay();
        this.paused = false;
    }

    initialize() {
        this.events.initialize(this.canvas);
        this.nextFrame();
    }

    run() {
        this.update();
        this.render();
        this.nextFrame();
    }

    update() {
        this.events.onTogglePause(() => this.paused = !this.paused);
        this.viewport.update(this);
        this.timer.update(this);
        this.fps.update(this);
        this.world.update(this);
        this.populationGraph.update(this);
        this.probe.update(this);
        this.statsDisplay.update(this);
        this.events.clear();
    }

    render() {
        this.viewport.render(this);
        this.timer.render(this);
        this.world.render(this);
        this.fps.render(this);
        this.populationGraph.render(this);
        this.probe.render(this);
        this.statsDisplay.render(this);
    }

    nextFrame() {
        window.requestAnimationFrame(() => this.run());
    }
}