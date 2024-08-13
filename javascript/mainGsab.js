let headerTL = gsap.timeline();

headerTL.from(".gsap-a", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2, // Stagger each element by 0.2 seconds
});

// Additional animation for #imgMove, if needed
headerTL.from(
  "#imgMove",
  {
    y: 30,
    opacity: 0,
    duration: 1,
  },
  "-=0.5"
);

// =======home===========

headerTL.from("#home h2", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
headerTL.from(".arrow-div", {
  x: 40,
  opacity: 0,
  duration: .5,
});
headerTL.from(".icon-div a", {
  y: 40,
  x: 10,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
 