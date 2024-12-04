import { Spheres1Background } from './spheres1.cdn.min.js';

const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
    count: 300,
    minSize: 0.3,
    maxSize: 1,
    gravity: 0.5,
    friction: 0.99,
    maxVelocity: 0.2,
    colors: [0x00ff00, 0xff0000, 0x0000ff],
});

document.getElementById('gravity-btn').addEventListener('click', () => {
    bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 0.5 : 0;
});

document.getElementById('colors-btn').addEventListener('click', () => {
    bg.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
    ]);
});