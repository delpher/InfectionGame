import {RandomMovementNeuron, LeftMovementNeuron} from './neurons';

class BrainFactory {

    constructor() {
        this.inputs = [
            HighInput
        ];

        this.middles = [];

        this.outputs = [
            RandomMovementNeuron
        ];
    }

    make(genome, world, owner) {
        const brain = new Brain();
        brain.addInput(new (this.inputs[0])(world));
        brain.addOutput(new (this.outputs[0])(owner));
    }
}

class 

class Brain {
    constructor() {
        this.inputs = [];
        this.outputs = [];
        this.middles = [];
    }

    addInput(neuron) {
        this.inputs.push(neuron);
    }

    addOutput(neuron) {
        this.outputs.push(neuron);
    }

    addLink(link) {
        this.links.push(link);
    }
}