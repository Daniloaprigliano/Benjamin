import { Tween, Easing } from 'https://unpkg.com/@tweenjs/tween.js@23.1.3/dist/tween.esm.js';

const button = document.querySelector(".k-enter");
const stroke = document.querySelector(".k-stroke");

const progress = { value: 1000 };

const tween = new Tween(progress)
  .easing(Easing.Cubic.Out)
  .onUpdate(() => {
    stroke.style.strokeDashoffset = progress.value;
  });

function forward() {
  tween.stop().to({ value: 0 }, 2000).start();
}

function reverse() {
  tween.stop().to({ value: 1000 }, 2000).start();
}

button.addEventListener("mousedown", () => {
  forward();
  button.textContent = "Holding...";
});

button.addEventListener("mouseup", () => {
  reverse();
  button.textContent = "Benjamin Education";
});

function animate(time) {
  tween.update(time);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);