gsap.config({ trialWarn: false });
let select = (s) => document.querySelector(s),
  toArray = (s) => gsap.utils.toArray(s),
  mainSVG = select("#mainSVG"),
  colorArray = [
    "fbe46c",
    "fe987b",
    "d569fa",
    "5f88ea",
    "63cdeb",
    "afff8a",
    "fbe46c",
  ],
  allPaths = toArray("path");

colorArray = colorArray.map((x) => (x[0] === "#" ? x : `#${x}`));
const interp = gsap.utils.interpolate(colorArray);

gsap.set("svg", {
  visibility: "visible",
});

let mainTl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power1.inOut",
  },
  repeat: -1,
});

// Per ogni timeline di animazione (C, O, L, U, R)
let cTl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });
// ... (configura tutte le timeline come nel modello fornito)

// Aggiungi tutte le animazioni alla timeline principale
mainTl.add([cTl /* , altre timeline per ogni lettera */]);