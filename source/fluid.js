import {Substance} from './substance';
import {MathUtils} from './mathUtils';

export class Fluid {
    constructor() {
        this.substances = [];
    }

    update(game) {
        for (let substance of this.substances)
            substance.update(game);
    }

    render(game) {
        const {context, viewport} = game;
        context.save();
        
        let clipRect = new Path2D();
        clipRect.rect(viewport.left, viewport.top, viewport.width, viewport.height);
        context.clip(clipRect);

        for (let substance of this.substances)
            substance.render(game);

        context.restore();
    }

    addSubstance(x, y, amount) {
        this.substances.push(new Substance(x, y, amount));
    }

    removeSubstance(substance) {
        this.substances = this.substances.filter((s) => s !== substance);
    }

    consumeSubstancesAt(game, x, y) {
        return this.substances
            .map(s => this.consumeSubstanceAt(game, s, x, y))
            .reduce((a, b) => a + b, 0);
    }

    consumeSubstanceAt(game, substance, x, y) {
        const amount = this.getConcentration(substance, x, y);
        substance.subtract(game, amount);
        return amount;
    }

    getConcentration(substance, x, y) {
        if (substance.area <= 0) return 0;
        const  dist = MathUtils.dist(x, substance.x, y, substance.y);
        if (dist > substance.area) return 0;
        return substance.concentration;
    }

    getTotalConcentration(x, y) {
        return this.substances
            .map(s => this.getConcentration(s, x, y))
            .reduce((a, b) => a + b, 0);
    }
}