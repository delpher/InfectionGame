import {Game} from './game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('viewport');
    const game = new Game(canvas);
    game.initialize();
});