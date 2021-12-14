class OutputNeuron {
    constructor(owner) {
        this.owner = owner;
    }
}

class MovementNeuron extends OutputNeuron {
    constructor(owner) {
        super(owner);
        this.owner = owner;
        this.speed = 10;
    }

    getDistance(timeDiff) {
        return timeDiff * this.speed
    }

    moveTo(location) {
        this.owner.x = location.x;
        this.owner.y = location.y;
    }

    restrict(world, x, y) {
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x >= world.width - 1) x = world.width - 1;
        if (y >= world.height - 1) y = world.height - 1;
        return {x, y};
    }
}

export class RandomMovementNeuron extends MovementNeuron {

    constructor(owner) {
        super(owner);
        this.direction = Math.random() * 2 * Math.PI;
    }

    activate(game, timeDiff) {
        const {world} = game;
        this.updateDirection();
        const distance = this.getDistance(timeDiff);
        const x = this.owner.x + Math.cos(this.direction) * distance;
        const y = this.owner.y + Math.sin(this.direction) * distance;
        const newLocation = this.restrict(world, x, y);
        this.moveTo(newLocation);
    }

    updateDirection() {
        const changeProb = Math.random();
        if (changeProb > 0.95)
            this.direction = Math.random() * 2 * Math.PI;
        else if (changeProb > 0.5)
            this.direction += (Math.random() - 0.5) * Math.PI * 0.2;
    }
}