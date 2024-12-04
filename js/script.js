import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js';

const canvas = document.getElementById('webgl-canvas');
if (canvas) {
  console.log('Canvas trovato:', canvas);
} else {
  console.error('Canvas non trovato!');
}
const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  count: 300, // Numero di sfere
  minSize: 0.3, // Dimensione minima delle sfere
  maxSize: 1, // Dimensione massima delle sfere
  gravity: 0.5 // Gravità iniziale
});

// Aggiunge l'evento per il pulsante della gravità
document.getElementById('gravity-btn').addEventListener('click', () => {
  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
  console.log('Gravità cambiata a:', bg.spheres.config.gravity);
});

// Aggiunge l'evento per il pulsante dei colori
document.getElementById('colors-btn').addEventListener('click', () => {
  bg.spheres.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random(),
  ]);
  console.log('Colori cambiati');
});