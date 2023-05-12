gsap.registerPlugin(ScrollTrigger);

//animation call to action //
gsap.from(".arrow", {
  repeat: -1,
  yoyo: true,
  y: "-35%",
  duration: 1,
});
gsap.from(".scroll-down", {
  repeat: -1,
  yoyo: true,
  opacity: "100%",
  duration: 1,
});

//spritesheet test javascript//
let Timer;

function Scrolling() {
  clearTimeout(Timer);
  document.body.classList.add("is-scrolling");
  Timer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
}

window.addEventListener("scroll", Scrolling);

//animation-chapitre 1

let chapitre1 = document.querySelector("div#voiture");
gsap.to(chapitre1, {
  scrollTrigger: {
    pin: true,
    scrub: true,

    start: "top top",
    end: "bottom 40%",
    trigger: chapitre1,
  },
});

//animation voiture

gsap.to(".car", {
  scrollTrigger: {
    trigger: ".car",
    start: "50% 75%",
    end: "50% 25%",
    scrub: 1,
  },
  x: "50vw",
  duration: 2,
});

//animation-chapitre 2

let chapitre2 = document.querySelector("div#mongolfiert");
gsap.to(chapitre2, {
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom 40%",
    trigger: chapitre2,
  },
});

//animation mongolfiert

gsap.to(".m1", {
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
  },
  scrollTrigger: {
    trigger: ".m1",
    start: "50% 75%",
    end: "50% 25%",
    scrub: 1,
  },
  x: "50vw",
  duration: 2,
});

//animation nuage-1

gsap.from(".nuage-1", {
  repeat: -1,
  x: "10%",
  duration: 4,
  ease: "back",
  yoyo: true,
});

gsap.from(".nuage-1", {
  repeat: -1,
  y: "-5%",
  duration: 7,
  ease: "back",
  yoyo: true,
});

//animation nuage-2

gsap.from(".nuage-2", {
  repeat: -1,
  x: "-7%",
  duration: 6,
  ease: "back",
  yoyo: true,
});

gsap.from(".nuage-2", {
  repeat: -1,
  y: "4%",
  duration: 5,
  ease: "back",
  yoyo: true,
});

//animation nuage-3

gsap.from(".nuage-3", {
  repeat: -1,
  x: "-15%",
  duration: 9,
  ease: "slow",
  yoyo: true,
});

gsap.from(".nuage-3", {
  repeat: -1,
  y: "6%",
  duration: 5,
  ease: "circ",
  yoyo: true,
});

//animation-chapitre 3

let chapitre3 = document.querySelector("div#mongolfiert-plui");
gsap.to(chapitre2, {
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom 40%",
    trigger: chapitre3,
  },
});

//animation-chapitre 4

let chapitre4 = document.querySelector("div#bateau");
gsap.to(chapitre2, {
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom 40%",
    trigger: chapitre4,
  },
});

//animation-chapitre 5

let chapitre5 = document.querySelector("div#sous-marin");
gsap.to(chapitre2, {
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom 40%",
    trigger: chapitre5,
  },
});

//animation-chapitre 6

let chapitre6 = document.querySelector("div#fusee");
gsap.to(chapitre2, {
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom 40%",
    trigger: chapitre6,
  },
});

//animation timeline des planetes

gsap.from(".planet-1", {
  repeat: -1,
  y: "14%",
  duration: 5,
  ease: "circ",
  yoyo: true,
});

gsap.from(".planet-2", {
  repeat: -1,
  y: "25%",
  duration: 6,
  ease: "circ",
  yoyo: true,
});
