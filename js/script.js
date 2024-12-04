import { Spheres1Background } from './spheres1.cdn.min.js';

console.log('Modulo Spheres1Background caricato:', Spheres1Background);

const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
    count: 300,
    minSize: 0.3,
    maxSize: 1,
    gravity: 0.5,
    friction: 0.99,
    maxVelocity: 0.2,
    colors: [0x00ff00, 0xff0000, 0x0000ff],
});

console.log('Background inizializzato:', bg);

document.getElementById('gravity-btn').addEventListener('click', () => {
    bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 0.5 : 0;
    console.log('Gravità cambiata:', bg.spheres.config.gravity);
});
const canvas = document.getElementById('webgl-canvas');
const ctx = canvas.getContext('2d');

if (ctx) {
    console.log('Canvas funzionante');
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
} else {
    console.error('Canvas non inizializzato');
}

document.getElementById('colors-btn').addEventListener('click', () => {
    bg.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
    ]);
    console.log('Colori cambiati');
});