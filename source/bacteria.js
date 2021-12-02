export class Bacteria {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lifetime = 0;
        this.maxLifetime = Math.ceil(Math.random() * 10);
        this.breedLifetime = 5;
        this.direction = 90 * (Math.PI / 180);
    }

    update(game) {
        const {world, events} = game;

        this.updatePosition(world);
        this.updateDirection();

        events.onTick(() => this.heartBeat(world));
    }

    updatePosition(world) {
        this.x += Math.sin(this.direction) / 20;
        this.y += Math.cos(this.direction) / 20;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x >= world.width - 1) this.x = world.width - 1;
        if (this.y >= world.height - 1) this.y = world.height - 1;
    }

    updateDirection() {
        const dirChangeChance = Math.random();
        if (dirChangeChance > 0.95)
            this.direction = (Math.random() * 360) * (Math.PI / 180);
        else if (dirChangeChance > 0.5)
            this.direction = this.direction + ((Math.random() - 0.5) * 30) * (Math.PI / 180);
    }

    heartBeat(world) {
        this.lifetime++;
        if (this.lifetime > this.breedLifetime)
        {
            this.breed(world);
        }
        else if (this.lifetime > this.maxLifetime) {
            this.die(world);
        }
    }

    breed(world) {
        const childOne = new Bacteria(this.x, this.y);
        const childTwo = new Bacteria(this.x, this.y);
        world.addSpecies(childOne);
        world.addSpecies(childTwo);
        world.removeSpecies(this);
    }

    die(world) {
        world.addSpecies(new DyingBacteria(this.x, this.y));
        world.removeSpecies(this);
    }
 
    render(game) {
        const {context, world} = game;

        const location = world.toScreen(game, this.x, this.y);

        const scaleX = world.getScaleX(game);
        const scaleY = world.getScaleY(game);

        context.beginPath();
        context.fillStyle = 'black';
        context.ellipse(location.x, location.y, scaleX / 2, scaleY / 2, 0, 0, 2 * Math.PI);
        context.fill();
    }
}

class DyingBacteria {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.remnants = 1;
    }

    update(game) {
        this.remnants -= 0.01;

        if (this.remnants <= 0)
            game.world.removeSpecies(this);
    }

    render(game) {
        const {context, world} = game;

        const location = world.toScreen(game, this.x, this.y);

        const scaleX = world.getScaleX(game);
        const scaleY = world.getScaleY(game);

        context.beginPath();
        context.fillStyle = `rgba(0, 0, 0, ${this.remnants})`;
        context.ellipse(location.x, location.y, scaleX / 2, scaleY / 2, 0, 0, 2 * Math.PI);
        context.fill();
    }
}