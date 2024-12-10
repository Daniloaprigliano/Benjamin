import { Tween, Easing } from "https://unpkg.com/@tweenjs/tween.js@23.1.3/dist/tween.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".k-enter");
  const stroke = document.querySelector("polygon.k-stroke");

  // Stato iniziale dell'animazione
  const progress = {
    value: 1000,
  };

  // Creazione del Tween per animare il poligono
  const tween = new Tween(progress)
    .easing(Easing.Cubic.Out)
    .onUpdate(() => {
      stroke.style.setProperty("stroke-dashoffset", progress.value);
    });

  // Funzione per iniziare l'animazione in avanti
  function forward() {
    tween.stop().to({ value: 0 }, 3000).start(); // Valore `0` per completare il disegno
  }

  // Funzione per ripristinare l'animazione
  function reverse() {
    tween.stop().to({ value: 1000 }, 3000).start(); // Torna al valore iniziale
  }

  // Eventi sul pulsante
  button.addEventListener("mousedown", (e) => {
    e.preventDefault();
    forward();
    button.innerHTML = "Holding...";
  });

  button.addEventListener("mouseup", () => {
    reverse();
    button.innerHTML = "Benjamin Education";
  });

  // Funzione per aggiornare e gestire il loop delle animazioni
  function animate(time) {
    tween.update(time);
    requestAnimationFrame(animate);
  }

  // Avvio dell'animazione
  requestAnimationFrame(animate);
});