var lightner = document.querySelector(".cursor");
var blur_cursor = document.querySelector(".blurcursor");
const downArrow = document.getElementById("arrow");

downArrow.addEventListener("click", () => {
  const page2 = document.querySelector(".page2");
  page2.scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("mousemove", (data) => {
  lightner.style.left = data.x + "px";
  lightner.style.top = data.y + "px";
  blur_cursor.style.left = data.x - 200 + "px";
  blur_cursor.style.top = data.y - 200 + "px";
});

var h4All = document.querySelectorAll("#nav h4");
h4All.forEach(function (elem) {
  elem.addEventListener("mouseenter", () => {
    lightner.style.scale = 3;
    lightner.style.border = "1px solid #ffff";
    lightner.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    lightner.style.scale = 1;
    lightner.style.border = "1px solid #95c11e";
    lightner.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  // It will only work if there is page 2 present

  backgroundColor: "#000",
  duration: 0.5,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.to(".about-us img, .about-us-in ", {
  y: 90,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    //markers: true,
    start: "top 50%",
    end: "top 35%",
    scrub: 1,
  },
});
gsap.to(".card ", {
  scale: 0.8,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    //markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.to("#colon1 ", {
  y: -60,
  x: -60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    //markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 3,
  },
});

gsap.to("#colon2", {
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    //markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.to(".page4 h1", {
  y: -60,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    //markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
