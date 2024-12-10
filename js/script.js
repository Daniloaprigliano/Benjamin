document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".k-enter");
  const stroke = document.querySelector("polygon.k-stroke");

  const progress = {
    value: 1000,
  };

  const tween = new TWEEN.Tween(progress)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => {
      stroke.style.setProperty("stroke-dashoffset", progress.value);
    });

  function forward() {
    tween.stop().to({ value: 2000 }, 3000).start();
  }

  function reverse() {
    tween.stop().to({ value: 1000 }, 3000).start();
  }

  button.addEventListener("mousedown", (e) => {
    e.preventDefault();
    forward();
    button.innerHTML = "Holding...";
  });

  button.addEventListener("mouseup", () => {
    reverse();
    button.innerHTML = "Benjamin Education";
  });

  function animate(time) {
    TWEEN.update(time);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});