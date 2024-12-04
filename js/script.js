import { Spheres1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.5/build/backgrounds/spheres1.cdn.min.js';

// Initialize the spheres background
const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  count: 300, // Number of spheres
  minSize: 0.3, // Minimum sphere size
  maxSize: 1, // Maximum sphere size
  gravity: 0.5, // Initial gravity
  friction: 0.99, // Friction for motion
  maxVelocity: 0.2, // Maximum velocity of spheres
  colors: [0xff0000, 0x00ff00, 0x0000ff] // Initial colors
});

// Gravity toggle button
document.getElementById('gravity-btn').addEventListener('click', () => {
  bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 0.5 : 0;
  console.log('Gravity toggled:', bg.spheres.config.gravity);
});

// Random colors button
document.getElementById('colors-btn').addEventListener('click', () => {
  const randomColors = [
    Math.random() * 0xffffff,
    Math.random() * 0xffffff,
    Math.random() * 0xffffff
  ];
  bg.spheres.setColors(randomColors);
  console.log('Colors changed:', randomColors);
});

// Modifica i colori delle sfere
const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
  colors: [0x888888, 0xaaaaaa, 0xcccccc], // Colori più neutri
});
