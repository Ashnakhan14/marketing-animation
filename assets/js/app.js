function page1animation (){
    var tl = gsap.timeline();
tl.from(".header-logo , .header-btn ,.header-nav li", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    stagger: 0.15
});
tl.from(".banner-heading ,.banner-content p ,.banner-btn", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    stagger:0.2
});
tl.from(".banner-img", {
    x: 100,
    opacity: 0,
    duration: 0.5,
} ,"-=0.3");
tl.from(".brand-imgs img", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger:0.2
});
}

page1animation ()

var tl2 = gsap.timeline({
    scrollTrigger:{
        // markers:true,
        trigger:".serivces",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:0.3

    }
});

tl2.from(".section-content", {
    x: -100,
    opacity:0,
});

var tl3 = gsap.timeline({
    scrollTrigger:{
        // markers:true,
        trigger:".serivces-card",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2

    }
});

tl3.from(".card-1", {
    x: -50,
    duration:1,
    opacity:0,

},"anim");

tl3.from(".card-2", {
    x: 50,
    duration:1,
    opacity:0,

},"anim");

tl3.from(".card-3", {
    x: -50,
    duration:1,
    opacity:0,

},"anim2");

tl3.from(".card-4", {
    x: 50,
    duration:1,
    opacity:0,

},"anim2");

gsap.from(".contact-us", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact-sec",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    //   markers: true,
    }
  });
  

gsap.from(".case-study", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#case-sec",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    //   markers: true,
    }
  });
  
gsap.from(".footer", {
    x:-100,
    opacity:0,
    scrollTrigger: {
      trigger: "#footer-sec",
      scroller: "body",
      start: "top 50%",
      end: "top 50%",
      scrub: 2,
    //   markers: true,
    }
  });
  
var cursor = document.querySelector(".cursor");
var body = document.querySelector("body");

body.addEventListener("mousemove", function(dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 1,
    ease: "circ.out",
  });
});
