import {Bacteria} from './species/bacteria';
import {Fluid} from './fluid';
import {MathUtils} from './mathUtils';

export class World {

    constructor() {
        this.width = 128;
        this.height = 128;
        this.maxPopulation = 2000;
        this.species = [
            new Bacteria(64, 64, 0)
        ];
        this.fluid = new Fluid();
    }

    update(game) {
        this.fluid.update(game);
        
        for (let s of this.species)
            s.update(game);

        game.events.onClick((e) => this.handleClick(e, game));
    }

    handleClick(e, game) {
      this.species.forEach(s => s.isSelected = false);

      this.selectedSpecies = this.species.filter(s => this.isClicked(s, e, game))[0];
      
       if (this.selectedSpecies) this.selectedSpecies.isSelected = true;
    }

    isClicked(species, e, game) {
      const location = this.toScreen(game, species.x, species.y);
      const dist = MathUtils.dist(location.x, e.x, location.y, e.y);
      return dist <= this.getScaleX(game);
    }

    render(game) {
        this.fluid.render(game);
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

    toGame(game, x, y) {
        const {viewport} = game;
        const scaleX = this.getScaleX(game);
        const scaleY = this.getScaleY(game);
        return {
            x: (x - viewport.left) / scaleX,
            y: (y - viewport.top) / scaleY
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
        if (this.selectedSpecies === species) this.selectedSpecies = null;
    }

    addSubstance(x, y, amount) {
        this.fluid.addSubstance(x, y, amount);
    }

    removeSubstance(substance) {
        this.fluid.removeSubstance(substance);
    }
}