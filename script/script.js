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
