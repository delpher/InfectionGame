class MovementNeuron {
    constructor() {
        this.speed = 10;
    }

    getDistance(timeDiff) {
        return (timeDiff / 1000) * this.speed
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

    constructor() {
        super();
        this.direction = Math.random() * 2 * Math.PI;
    }

    nextPosition(world, bacteria, timeDiff) {
        this.updateDirection();
        const distance = this.getDistance(timeDiff);
        let x = bacteria.x + Math.cos(this.direction) * distance;
        let y = bacteria.y + Math.sin(this.direction) * distance;
        return this.restrict(world, x, y);
    }

    updateDirection() {
        const changeProb = Math.random();
        
        if (changeProb > 0.95)
            this.direction = Math.random() * 2 * Math.PI;
        else if (changeProb > 0.5)
            this.direction += (Math.random() - 0.5) * Math.PI * 0.2;
    }
}

export class LeftMovementNeuron extends MovementNeuron {

    constructor() {
        super();
    }

    nextPosition(world, bacteria, timeDiff) {
        const distance = this.getDistance(timeDiff);
        return this.restrict(world, bacteria.x - distance, bacteria.y);
    }
}