import {Bacteria} from './bacteria';
export class World {

    constructor() {
        this.width = 128;
        this.height = 128;
        this.species = [
            new Bacteria(0, 0)
        ];
    }

    update(game) {
        for (let s of this.species)
            s.update(game);
    }  

    render(game) {
        for (let s of this.species)
            s.render(game);
    }

    toScreen(game, x, y) {
        const {viewport} = game;
        const scaleX = this.getScaleX(game);
        const scaleY = this.getScaleY(game);
        return {
            x: x * scaleX + viewport.left + scaleX / 2,
            y: y * scaleY + viewport.top + scaleY / 2
        }
    }

    getScaleX(game) {
        const {viewport} = game;
        return viewport.width / this.width;
    }

    getScaleY(game) {
        const {viewport} = game;
        return viewport.height / this.height;
    }

    addSpecies(species) {
        this.species.push(species);
    }

    removeSpecies(species) {
        this.species = this.species.filter(s => s !== species);
    }
}