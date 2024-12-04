import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js';

const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  count: 300,
  minSize: 0.3,
  maxSize: 1,
  gravity: 0.5
});

document.getElementById('gravity-btn').addEventListener('click', () => {
  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
  console.log('Gravità cambiata a:', bg.spheres.config.gravity);
});

document.getElementById('colors-btn').addEventListener('click', () => {
  bg.spheres.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random(),
  ]);
  console.log('Colori cambiati');
});
const canvas = document.getElementById('webgl-canvas');
if (!canvas) {
    console.error("Canvas non trovato. Assicurati che l'elemento con ID 'webgl-canvas' esista.");
}
const bg = Spheres1Background(canvas, {
  count: 300,
  minSize: 0.3,
  maxSize: 1,
  gravity: 0.5
});

console.log('Background inizializzato:', bg);

document.getElementById('gravity-btn').addEventListener('click', () => {
  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
  console.log('Gravità cambiata a:', bg.spheres.config.gravity);
});

document.getElementById('colors-btn').addEventListener('click', () => {
  bg.spheres.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random(),
  ]);
  console.log('Colori cambiati');
});