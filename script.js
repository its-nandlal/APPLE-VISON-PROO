function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();

var pgvideo = document.querySelector("#page>video")
gsap.to("#page>video", {
  transform: "translateX(-50%) scale(1.9)",
  scrollTrigger: {
    trigger: `#page>video`,
    scroller: `#main`,
    start: `28% top`,
    end: `bottom top`,
    // markers: true  ,
    // scrub: 1,

  },
  onStart: () => {
    pgvideo.play()
    pgvideo.style.transform = " translateX(-50%) scale(1.9)"
  }
})

gsap.to("#page>video", {
  transform: "translateX(-50%) scale(1.9)",
  duration: 2,
  scrollTrigger: {
    trigger: `#page>video`,
    scroller: `#main`,
    start: `38% top`,
    end: `45% top`,
    // markers: true  ,
    scrub: 1,
  },
  onStart: () => {
    pgvideo.style.transform = " translateX(-50%) scale(1.6)"
  }
})

gsap.to("#page>video", {
  transform: "translateX(-50%) scale(1.6)",
  scrollTrigger: {
    trigger: `#page>video`,
    scroller: `#main`,
    start: `58% top`,
    end: `65% top`,
    // markers: true  ,
    scrub: 1,
  },
  onStart: () => {
    pgvideo.style.transform = " translateX(-50%) scale(1.3)"
  }
})



gsap.to("#page>video", {
  opacity: "0",
  scrollTrigger: {
    trigger: `#page>video`,
    scroller: `#main`,
    start: `70% top`,
    end: `91% top`,
    // markers: true  ,
    pin: true,
    scrub: 1,
  }
})



gsap.to("#page", {
  scrollTrigger: {
    trigger: `#page`,
    scroller: `#main`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
  }
})


gsap.to("#pgbtm", {
  scrollTrigger: {
    trigg3r: `#pgbtm`,
    scroller: `#main`,
    start: `5% top`,
    end: `bottom top`,
    // markers: true ,
  },
  opacity: "0",
})


var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true ,
  }
})

tl1.to("#page1>video", {
  filter: `brightness(0.6)`
}, "ani")

tl1.to("#page1>h1", {
  top: `-10%`,
}, "ani")



gsap.to("#page1>video", {
  opacity: `0`,
  scrollTrigger: {
    trigger: `#page1>h1`,
    scroller: `#main`,
    start: `top 62%`,
    end: `top 62%`,
    // markers: true ,
    scrub: 1,
  }
})



var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true ,
  }
})

tl2.to("#page2>video", {
  filter: `brightness(0.6)`
}, "ni")

tl2.to("#page2>h1", {
  top: `-14%`,
}, "ni")


gsap.to("#page2>video", {
  opacity: `0`,
  scrollTrigger: {
    trigger: `#page2>h1`,
    scroller: `#main`,
    start: `top 62%`,
    end: `top 62%`,
    // markers: true ,
    scrub: 1,
  }
})


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `1% top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true ,
  }
})


tl3.to("#nav", {
  backgroundColor: `#f1f1f1`,
  color: `#000`,
}, "anee")

tl3.to("#main", {
  backgroundColor: `#fff`,
}, "anee")

tl3.to("#nav button", {
  backgroundColor: `#000`,
  color: `#fff`,
}, "anee")


var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page5`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true ,
  }
})

// tl4.to("#page2>video",{
//   filter: `brightness(0.6)`
// },"ni")

tl4.to("#page5>#pg5-txt", {
  top: `-16%`,
})

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg5-txt`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers: true ,
  }
})

tl5.to("#page5>video", {
  filter: `brightness(0.7)`
})


var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg5-txt`,
    start: `bottom -30%`,
    scrub: 1,
    scroller: `#main`,
    // markers: true,
  }
})

tl6.to("#page5>video", {
  width: `93%`
})





var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page7`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true ,
  }
})


tl7.to("#page7>#pg7-txt", {
  top: `-16%`,
})

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg7-txt`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers: true ,
  }
})

tl8.to("#page7>video", {
  filter: `brightness(0.8)`
})


var tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg7-txt`,
    start: `bottom -30%`,
    scrub: 1,
    scroller: `#main`,
    // markers: true,
  }
})

tl9.to("#page7>video", {
  width: `93%`
})



function canvas() {
  const canvas = document.querySelector("#page10>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
applevsnimg/0000.jpg
applevsnimg/0001.jpg
applevsnimg/0002.jpg
applevsnimg/0003.jpg
applevsnimg/0004.jpg
applevsnimg/0005.jpg
applevsnimg/0006.jpg
applevsnimg/0007.jpg
applevsnimg/0008.jpg
applevsnimg/0009.jpg
applevsnimg/0010.jpg
applevsnimg/0011.jpg
applevsnimg/0012.jpg
applevsnimg/0013.jpg
applevsnimg/0014.jpg
applevsnimg/0015.jpg
applevsnimg/0016.jpg
applevsnimg/0017.jpg
applevsnimg/0018.jpg
applevsnimg/0019.jpg
applevsnimg/0020.jpg
applevsnimg/0021.jpg
applevsnimg/0022.jpg
applevsnimg/0023.jpg
applevsnimg/0024.jpg
applevsnimg/0025.jpg
applevsnimg/0026.jpg
applevsnimg/0027.jpg
applevsnimg/0028.jpg
applevsnimg/0029.jpg
applevsnimg/0030.jpg
applevsnimg/0031.jpg
applevsnimg/0032.jpg
applevsnimg/0033.jpg
applevsnimg/0034.jpg
applevsnimg/0035.jpg
applevsnimg/0036.jpg
applevsnimg/0037.jpg
applevsnimg/0038.jpg
applevsnimg/0039.jpg
applevsnimg/0040.jpg
applevsnimg/0041.jpg
applevsnimg/0042.jpg
applevsnimg/0043.jpg
applevsnimg/0044.jpg
applevsnimg/0045.jpg
applevsnimg/0046.jpg
applevsnimg/0047.jpg
applevsnimg/0048.jpg
applevsnimg/0049.jpg
applevsnimg/0050.jpg
applevsnimg/0051.jpg
applevsnimg/0052.jpg
applevsnimg/0053.jpg
applevsnimg/0054.jpg
applevsnimg/0055.jpg
applevsnimg/0056.jpg
applevsnimg/0057.jpg
applevsnimg/0058.jpg
applevsnimg/0059.jpg
applevsnimg/0060.jpg
applevsnimg/0061.jpg
applevsnimg/0062.jpg
applevsnimg/0063.jpg
applevsnimg/0064.jpg
applevsnimg/0065.jpg
applevsnimg/0066.jpg
applevsnimg/0067.jpg
applevsnimg/0068.jpg
applevsnimg/0069.jpg
applevsnimg/0070.jpg
applevsnimg/0071.jpg
applevsnimg/0072.jpg
applevsnimg/0073.jpg
applevsnimg/0074.jpg
applevsnimg/0075.jpg
applevsnimg/0076.jpg
applevsnimg/0077.jpg
applevsnimg/0078.jpg
applevsnimg/0079.jpg
applevsnimg/0080.jpg
applevsnimg/0081.jpg
applevsnimg/0082.jpg
applevsnimg/0083.jpg
applevsnimg/0084.jpg
applevsnimg/0085.jpg
applevsnimg/0086.jpg
applevsnimg/0087.jpg
applevsnimg/0088.jpg
applevsnimg/0089.jpg
applevsnimg/0090.jpg
applevsnimg/0091.jpg
applevsnimg/0092.jpg
applevsnimg/0093.jpg
applevsnimg/0094.jpg
applevsnimg/0095.jpg
applevsnimg/0096.jpg
applevsnimg/0097.jpg
applevsnimg/0098.jpg
applevsnimg/0099.jpg
applevsnimg/0100.jpg
applevsnimg/0101.jpg
applevsnimg/0102.jpg
applevsnimg/0103.jpg
applevsnimg/0104.jpg
applevsnimg/0105.jpg
applevsnimg/0106.jpg
applevsnimg/0107.jpg
applevsnimg/0108.jpg
applevsnimg/0109.jpg
applevsnimg/0110.jpg
applevsnimg/0111.jpg
applevsnimg/0112.jpg
applevsnimg/0113.jpg
applevsnimg/0114.jpg
applevsnimg/0115.jpg
applevsnimg/0116.jpg
applevsnimg/0117.jpg
applevsnimg/0118.jpg
applevsnimg/0119.jpg
applevsnimg/0120.jpg
applevsnimg/0121.jpg
applevsnimg/0122.jpg
applevsnimg/0123.jpg
applevsnimg/0124.jpg
applevsnimg/0125.jpg
applevsnimg/0126.jpg
applevsnimg/0127.jpg
applevsnimg/0128.jpg
applevsnimg/0129.jpg
applevsnimg/0130.jpg
applevsnimg/0131.jpg
applevsnimg/0132.jpg
applevsnimg/0133.jpg
applevsnimg/0134.jpg
applevsnimg/0135.jpg
applevsnimg/0136.jpg
applevsnimg/0137.jpg
applevsnimg/0138.jpg
applevsnimg/0139.jpg
applevsnimg/0140.jpg
applevsnimg/0141.jpg
applevsnimg/0142.jpg
applevsnimg/0143.jpg
applevsnimg/0144.jpg
applevsnimg/0145.jpg
applevsnimg/0146.jpg
applevsnimg/0147.jpg
applevsnimg/0148.jpg
applevsnimg/0149.jpg
applevsnimg/0150.jpg
applevsnimg/0151.jpg
applevsnimg/0153.jpg
applevsnimg/0154.jpg
applevsnimg/0155.jpg
applevsnimg/0156.jpg
applevsnimg/0157.jpg
applevsnimg/0158.jpg
applevsnimg/0159.jpg
applevsnimg/0160.jpg
applevsnimg/0161.jpg
applevsnimg/0162.jpg
applevsnimg/0163.jpg
applevsnimg/0164.jpg
applevsnimg/0165.jpg
applevsnimg/0166.jpg
applevsnimg/0167.jpg
applevsnimg/0168.jpg
applevsnimg/0169.jpg
applevsnimg/0170.jpg
applevsnimg/0171.jpg
applevsnimg/0172.jpg
applevsnimg/0173.jpg
applevsnimg/0174.jpg
applevsnimg/0175.jpg
applevsnimg/0176.jpg
applevsnimg/0177.jpg
applevsnimg/0178.jpg
applevsnimg/0179.jpg
applevsnimg/0180.jpg
applevsnimg/0181.jpg
applevsnimg/0182.jpg
applevsnimg/0183.jpg
applevsnimg/0184.jpg
applevsnimg/0185.jpg
applevsnimg/0186.jpg
applevsnimg/0187.jpg
applevsnimg/0188.jpg
applevsnimg/0189.jpg
applevsnimg/0190.jpg
applevsnimg/0191.jpg
applevsnimg/0192.jpg
applevsnimg/0193.jpg
applevsnimg/0194.jpg
applevsnimg/0195.jpg
applevsnimg/0196.jpg
applevsnimg/0197.jpg
applevsnimg/0198.jpg
applevsnimg/0199.jpg
`;
    return data.split("\n")[index];
  }

  const frameCount = 198;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page10>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `400% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page10>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `530% top`,
  });

}
canvas();

var tl110 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page9`,
    start: `-180% top`,
    scrub: 1,
    scroller: `#main`,
    // markers: true,
  }
})

tl110.to("#main", {
  backgroundColor: `#F5F5F7`
})

gsap.to("#page11", {
  scrollTrigger: {
    trigger: `#page11`,
    scroller: `#main`,
    start: `top top`,
    end: `15% top`,
    pin: true,
    // markers: true,
  }
})

gsap.to("#page12", {
  scrollTrigger: {
    trigger: `#page12`,
    scroller: `#main`,
    start: `top top`,
    end: `15% top`,
    pin: true,
    // markers: true,
  }
})





var tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page14`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true,
  }
})


tl11.to("#page14>#pg14-txt", {
  top: `-16%`,
})

var tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg14-txt`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers: true ,
  }
})

tl12.to("#pg14-vid", {
  filter: `brightness(0.9)`
})


var tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: `#pg14-txt`,
    start: `-10% top`,
    scrub: 1,
    scroller: `#main`,
    // markers: true,
  }
})

tl13.to("#pg14-vid", {
  width: `90vw`
})

gsap.to("#page18", {
  scrollTrigger: {
    trigger: `#page18`,
    start: `top top`,
    end: `5% top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true,
  }
})

var tl17 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page20`,
    start: `top top`,
    end: `3% top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
    // markers: true,
  }
})

tl17.to("#nav",{
  backgroundColor: `#000`,
  color: `#fff`
},"aooo")

tl17.to("#main",{
  backgroundColor: `#000`,
},"aooo")

tl17.to("#nav>button",{
  backgroundColor: `#fff`,
  color: `#000`
},"aooo")


var tl18 = gsap.timeline({
  scrollTrigger:{
    trigger: `#pg20-txt-box`,
    scroller: `#main`,
    start: `23% top`,
    end: `30% top`,
    scrub: 1,
    // markers: true,
  }
})

tl18.to("#pg20-txt-box",{
  paddingTop: `15%`
},"oreo")



function canvas1() {
  const canvas = document.querySelector("#page21>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
.//Apple vision canvas images/Vision00001.png
.//Apple vision canvas images/Vision00002.png
.//Apple vision canvas images/Vision00003.png
.//Apple vision canvas images/Vision00004.png
.//Apple vision canvas images/Vision00005.png
.//Apple vision canvas images/Vision00006.png
.//Apple vision canvas images/Vision00007.png
.//Apple vision canvas images/Vision00008.png
.//Apple vision canvas images/Vision00009.png
.//Apple vision canvas images/Vision00010.png
.//Apple vision canvas images/Vision00011.png
.//Apple vision canvas images/Vision00012.png
.//Apple vision canvas images/Vision00013.png
.//Apple vision canvas images/Vision00014.png
.//Apple vision canvas images/Vision00015.png
.//Apple vision canvas images/Vision00016.png
.//Apple vision canvas images/Vision00017.png
.//Apple vision canvas images/Vision00018.png
.//Apple vision canvas images/Vision00019.png
.//Apple vision canvas images/Vision00020.png
.//Apple vision canvas images/Vision00021.png
.//Apple vision canvas images/Vision00022.png
.//Apple vision canvas images/Vision00023.png
.//Apple vision canvas images/Vision00024.png
.//Apple vision canvas images/Vision00025.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 25;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page21`,
      //   set start end according to preference
      start: `-10% top`,
      end: `110% top`,
      scroller: `#main`,
      // markers: true,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page21",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `80% top`,
  });
}
canvas1();

var pg22vid = document.querySelector("#pg22-vid-box>video")

gsap.to("#page22", {
  scrollTrigger: {
    trigger: `#page22`,
    scroller: `#main`,
    start: `-55% top`,
    end: `bottom top`,
    // markers: true,
  },
  onStart: () => {
    pg22vid.play()
  }
})


var tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page23`,
    scroller: `#main`,
    start: `top top`,
    scrub: 2,
    // markers: true,
    pin: true,
  }
})

tl14.to("#page23>#off", {
  opacity: 0
})

var se1 = document.querySelector("#se-img1");
var se2 = document.querySelector("#se-img2");
var se3 = document.querySelector("#se-img3");
var se4 = document.querySelector("#se-img4");
var se5 = document.querySelector("#se-img5");
var senrelod = document.querySelector(".senrelod");




gsap.to("#page24", {
  scrollTrigger: {
    trigger: `#page24`,
    scroller: `#main`,
    start: `top top`,
    end: `bottom top`,
    scrub: 1,
    // markers: true,
    pin: true,
  },
  onStart: () => {
    function sencee (){
      setTimeout(function () {
        se1.style.opacity = "0"
      }, 2000)
    
      setTimeout(function () {
        se2.style.opacity = "0"
      }, 4000)
    
      setTimeout(function () {
        se3.style.opacity = "0"
      }, 6000)
    
      setTimeout(function () {
        se4.style.opacity = "0"
      }, 8000)
  
      setTimeout(function () {
        se5.style.opacity = "1"
      }, 1000)

      senrelod.addEventListener("click",function(){
        console.log("st");

      setTimeout(function () {
        se1.style.opacity = "1"
      }, 500)
      
      setTimeout(function () {
        se2.style.opacity = "1"
      }, 700)

      setTimeout(function () {
        se3.style.opacity = "1"
      }, 1000)

      setTimeout(function () {
        se4.style.opacity = "1"
      }, 1300)


        setTimeout(function () {
          se1.style.opacity = "0"
        }, 2000)
      
        setTimeout(function () {
          se2.style.opacity = "0"
        }, 4000)
      
        setTimeout(function () {
          se3.style.opacity = "0"
        }, 6000)
      
        setTimeout(function () {
          se4.style.opacity = "0"
        }, 8000)
    
        setTimeout(function () {
          se5.style.opacity = "1"
        }, 10000)
      })

    }
    sencee();

  }
})


var tl15 = gsap.timeline({
  scrollTrigger:{
    trigger: `#page25`,
    scroller: `#main`,
    start: `-90% top`,
    end: `bottom top`,
    scrub: 3,
    // markers: true,
  }
})

tl15.to("#page25>img",{
  opacity: 1
})

var tl16 = gsap.timeline({
  scrollTrigger:{
    trigger: `#page27`,
    scroller: `#main`,
    start: `top top`,
    end: `1% top`,
    scrub: 1,
    pin: true,
    // markers: true,
  }
})

tl16.to("#nav",{
  backgroundColor: `#fff`,
  color: `#000`
},"alisha")

tl16.to("#nav>button",{
  backgroundColor: `#000`,
  color: `#fff`
},"alisha")

tl16.to("#main",{
  backgroundColor: `#fff`,
},"alisha")