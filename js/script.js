import { Tween, Easing } from "https://unpkg.com/@tweenjs/tween.js@23.1.3/dist/tween.esm.js";

let r = null;
const button = document.querySelector(".k-enter");
const stroke = document.querySelector("polygon.k-stroke");

const progress = {
  value: 1000,
};

const tween = new Tween(progress)
  .easing(Easing.Cubic.Out)
  .onUpdate(() => {
    stroke.style.setProperty("stroke-dashoffset", progress.value);
  });

function forward() {
  tween.stop().to({ value: 2000 }, 3000).startFromCurrentValues();
}

function reverse() {
  tween.stop().to({ value: 1000 }, 3000).startFromCurrentValues();
}

button.addEventListener("mousedown", (e) => {
  e.preventDefault();
  e.stopPropagation();
  forward();
  r = setTimeout(() => {
    button.innerHTML = "Clicked";
  }, 3000);
});

button.addEventListener("mouseup", () => {
  reverse();
  button.innerHTML = "Benjamin Education";
  clearTimeout(r);
});

function animate(time) {
  tween.update(time);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);