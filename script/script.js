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
  x: "100%",
  scrollTrigger: {
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: true,
    start: "top 25%",
    end: "bottom 75%",
    trigger: ".car",
  },
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
