export class StatsDisplay {
    constructor() {
        this.left = 10;
        this.top = 100 ;
    }

    update(game) {
        if (!game.world.selectedSpecies) return;
    }

    render(game) {
        if (!game.world.selectedSpecies) return;

        const bacteria = game.world.selectedSpecies;

        const {context} = game;

        context.fillStyle = 'black';
        context.font = "10px Arial";
        context.textAlign = 'left';

        context.fillText('Age: ' + bacteria.age, this.left, this.top);
        context.fillText('Lifetime: ' + bacteria.lifetime, this.left, this.top + 12);
        context.fillText('Poisoning: ' + bacteria.poisonConsumed, this.left, this.top + 24);
        context.fillText('Generation: ' + bacteria.generation, this.left, this.top + 36);
    }
}