let container = document.querySelector(".container");
let circle = document.querySelector(".button");
let initX = "50px";
let initXY = "40px";
container.addEventListener("mousemove", (dets) => {
  let rect = container.getBoundingClientRect();
  let x = dets.clientX - rect.left;
  let y = dets.clientY - rect.top;

  console.log(` x:${x} y:${y}`);

  gsap.to(circle, {
    x: x,
    y: y,
    duration: 0.5,
    ease: "power4.out",
  });
});
container.addEventListener("mouseleave", () => {
  gsap.to(circle, {
    x: initX,
    y: initXY,
    duration: 3,
    ease: "power4.out",
  });
});
// ----------------------cursor----------------------------------
let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor ");
let pointer = document.querySelector(".pointer");
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 3,
    ease: "power3.out",
  });
});

pointer.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    width: 60,
    height: 60,
    duration: 0.5,
    opacity: 1,
  });
});

pointer.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    width: 40,
    height: 40,
    duration: 0.5,
    opacity: 1,
  });
});

pointer.addEventListener("mouseenter", () => {
  gsap.to(".cursor h1", {
    display: "block",
    fontSize: 15,
    duration: 0.5,
    opacity: 1,
  });
});

pointer.addEventListener("mouseleave", () => {
  gsap.to(".cursor h1", {
    display: "none",
    duration: 0.5,
    opacity: 1,
  });
});
/* ---------------------arrow------------------- */
let arrow = document.querySelector(".down-arrow");

gsap.to(arrow, {
  y: 45,
  duration: 1,
  delay: 1,
  ease: "power3.out",
  repeat: -1,
  yoyo: 0.5,
});

//  ------------------------Exper Desingner------------------------
let intailPath = "M 10 150 Q 550 150 1090 150";
let finalPath = "M 10 150 Q 550 150 1090 150";
let div1 = document.getElementById("movediv");

div1.addEventListener("mousemove", (dets) => {
  let rect = div1.getBoundingClientRect();
  let x = dets.clientX - rect.left;
  let y = dets.clientY - rect.top;

  intailPath = `M 10 150 Q ${x} ${y} 1090 150`;
  gsap.to("svg path", {
    attr: { d: intailPath },
    duration: 0.5,
    ease: "power3.out",
  });
});

div1.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 2,
    ease: "elastic.out(1.2,0.1)",
  });
});
// ----------typeWritter--------------

// Load the TextPlugin
gsap.registerPlugin(TextPlugin);

let words = ["Shabin Ahmad", "Graphic Designer "];

gsap.to("#typeCursor", {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  ease: "power2.inOut",
});

let tl = gsap.timeline({
  repeat: -1,
});

words.forEach((word) => {
  let tlText = gsap.timeline({
    repeat: 1,
    duration: 0.5,
    yoyo: true,
    repeatDelay: 1, // add a delay to create a pause effect
  });

  tlText.to("#animatedText", {
    duration: 1,
    text: word,
    ease: "none", // Optional: You can specify the easing here
  });

  tl.add(tlText);
});

// -------------------#about-heading=============

gsap.to("#about-heading", {
  x: "75vw", // Move to the full width of the viewport
  duration: 8, // Speed of the slide
  repeat: -1, // Infinite loop
  ease: "linear", // Continuous smooth movement
});
// =================Project===================

var tl0 = gsap.timeline({
  duration: 2,
});
tl0
  .from(".textarea p", {
    opacity: 0,
  })
  .from(".textarea a", {
    opacity: 0,
  })
  .from(".textarea h2", {
    opacity: 0,
  });

var timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers:true,
    start: "50% 50%",
    end: "80% 50%",
    scrub: 1.5,
    pin: true,
  },
});
tl.to(
  "#lineone",
  {
    marginTop: "-120vh",
  },
  "baba"
).to(
  "#linetwo",
  {
    marginTop: "20vh",
  },
  "baba"
);  
