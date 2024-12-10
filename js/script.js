import {
  Tween,
  Easing
} from 'https://unpkg.com/@tweenjs/tween.js@23.1.3/dist/tween.esm.js';

let r = null;
const $button = document.querySelector(".k-enter");
const stroke = document.querySelector("polygon.k-stroke");

const progress = {
  value: 1000
};

const tween = new Tween(progress)
  .easing(Easing.Cubic.Out)
  .onUpdate(function () {
    stroke.style.setProperty("stroke-dashoffset", progress.value);
  });

function forward() {
  tween.stop().to({
    value: 2000
  }, 3000).startFromCurrentValues();
}

function reverse() {
  tween.stop().to({
    value: 1000
  }, 3000).startFromCurrentValues();
}

$button.addEventListener("mousedown", function (e) {
  e.preventDefault();
  forward();
  r = window.setTimeout(function () {
    $button.innerHTML = 'Clicked';
  }, 3000);
});

$button.addEventListener("mouseup", function () {
  reverse();
  $button.innerHTML = 'Benjamin Education';
  window.clearTimeout(r);
});

function animate(time) {
  tween.update(time);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);