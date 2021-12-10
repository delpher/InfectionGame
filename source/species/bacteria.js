import {RandomMovementNeuron, LeftMovementNeuron} from './neurons';

export class Bacteria {

    constructor(x, y, generation) {
        this.x = x;
        this.y = y;
        this.age = 0;
        this.isSelected = false;
        this.lifetime = 1 + Math.ceil(Math.random() * 10);
        this.reproductionAge = 5;
        this.movementNeuron = new RandomMovementNeuron();
        this.poisonConsumed = 0;
        this.maxPoisoning = 6;
        this.generation = generation;
    }

    update(game) {
        const {world, events} = game;

        events.onFrame((e) => { 
            this.updatePosition(world, e.timeDiff); 
            this.consumeSubstance(game);
        });

        events.onTick((e) => this.heartbeat(game, e.timeDiff));
    }

    heartbeat(game, timeDiff) {
        this.updateAge(game.world);
    }
    
    updatePosition(world, timeDiff) {
        const {x, y} = this.movementNeuron.nextPosition(world, this, timeDiff);
        this.x = x;
        this.y = y;
    }

    updateAge(world) {
        this.age += 1;
        if (this.age >= this.lifetime) {
            this.die(world);
        } else if (this.age >= this.reproductionAge) {
            this.reproduce(world);
        }
    }

    consumeSubstance(game) {
        const amount = game.world.fluid.consumeSubstancesAt(game, this.x, this.y);
        this.poisonConsumed += amount;
    }

    reproduce(world) {
        if (world.species.length > world.maxPopulation) return;
        if (this.poisonConsumed > this.maxPoisoning) return;
        const offspring1 = new Bacteria(this.x, this.y, this.generation + 1);
        const offspring2 = new Bacteria(this.x, this.y, this.generation + 1);
        world.addSpecies(offspring1);
        world.addSpecies(offspring2);
        world.removeSpecies(this);
    }

    die(world) {
        world.addSubstance(this.x, this.y, 20);
        world.removeSpecies(this);
    }
 
    render(game) {
        const {context, world} = game;

        const location = world.toScreen(game, this.x, this.y);

        const scale = world.getScaleX(game);

        context.beginPath();
        context.fillStyle = 'black';
        if (this.isSelected) context.fillStyle = 'cyan';
        context.arc(location.x, location.y, scale / 2, 0, 2 * Math.PI);
        context.fill();
    }
}