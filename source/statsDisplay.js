export class StatsDisplay {
    constructor() {
        this.left = 2;
        this.top = 70 ;
    }

    update(game) {
    }

    render(game) {

        const {context} = game;
        let top = this.top;

        context.fillStyle = 'black';
        context.font = "10px Arial";
        context.textAlign = 'left';

        const generations = game.world.species.map(s => s.generation);

        context.fillText('Species: ' + game.world.species.length, this.left, top);

        if (generations.length)
        context.fillText('Generations: ' + Math.min(...generations) + '-' + Math.max(...generations), this.left, top += 12);

        const bacteria = game.world.selectedSpecies;
        if (!game.world.selectedSpecies) return;
        context.fillText('Age: ' + bacteria.age, this.left, top += 12);
        context.fillText('Lifetime: ' + bacteria.lifetime, this.left, top += 12);
        context.fillText('Poisoning: ' + bacteria.poisonConsumed, this.left, top += 12);
        context.fillText('Generation: ' + bacteria.generation, this.left, top += 12);
    }
}