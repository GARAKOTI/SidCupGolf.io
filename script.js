var lightner = document.querySelector(".cursor");
var blur_cursor = document.querySelector(".blurcursor");

document.addEventListener("mousemove", (data) => {
  lightner.style.left = data.x + "px";
  lightner.style.top = data.y + "px";
  blur_cursor.style.left = data.x - 200 + "px";
  blur_cursor.style.top = data.y - 200 + "px";
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
    markers: true,
    start: "top -50%",
    end: "top -80%",
    scrub: 2,
  },
});
