console.log("Hi")

// Initialize Lenis
function lenisScroll() {


    const lenis = new Lenis();
    lenis.on('scroll', () => {
        riveInstance.drawFrame()
    })

// Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

lenisScroll()

let tl = gsap.timeline({
    ease: "elastic.out(1,0.75)",
})
tl.from("#heroTop h1", {
    y: 300,
    duration: 0.8,
    delay: 0.5
}, "a")
tl.from("#middleLeft h1", {
    y: 300,
    duration: 0.8,
    delay: 0.5
}, "a")
tl.from("#imageBox", {
    height: "0%",
    ease: "elastic.out(1,0.75)",
})
tl.from("#heroBottom", {
    height: "0",
    ease: "elastic.out(1,0.75)",

})


let workTl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#workContainer",
            start: "top 90%",
            end: "bottom 20% ",
            ease: "power4.out",
            // markers:true,
            scrub: 1,
        }

    })
workTl.from(".bigHeading",{
    y:200
})
workTl.from("#pinterestBento", {
    opacity: 0,
    x: -200
}, "work")
workTl.from("#messroomBento", {
    x: 200,
    opacity: 0,
}, "work")

workTl.from("#gem", {
    opacity: 0,
    y: 250
}, "work")
workTl.from("#crawler", {
    opacity: 0,
    y: 200
}, "work")

workTl.from("#hardware", {
    opacity: 0,
    x: 200
}, "work")
workTl.from("#canvas", {
    y: 200
})






let skillTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#skillsSectionContainer",
        start: "top top",
        end: "bottom -10%",
        ease: "elastic.out(1,0.75)",

        // markers: true,
        scrub: 1,
        pin: true,
    }
})
// skillTl.from("#skillSection",{
//     duration:1.5,
//     opacity:0,
//     // backgroundImage: 'url("./images/lightbeams.jpg")'
//
// })
skillTl.from("#skillHeading", {
    scale: 0.5,
    opacity:0
},"aa")

skillTl.from("#skillSection img", {
    // y:() => gsap.utils.random(50, 70, true),
    // x:()=> gsap.utils.random(50, 70, true),
    scale: 2,
    opacity: 0,
    duration: 0.5,
    // stagger:0.05,
    stagger: {
        amount:1,
        // each: 0.5,
        from: "random"
    },
    // stagger:0.5,
    // scrollTrigger: {
    //     trigger: "#skillsSectionContainer",
    //     start: "top top",
    //     end: "bottom -10%",
    //     ease: "power4.out",
    //     scrub: 1,
    // }
},"aa")
let endTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#EmailMeSection",
        start: "10% top",
        end: "20% middle ",
        ease: "power4.out",
        // markers:true,
        scrub: 1,
    }
})
endTl.to("#EmailMeSection", {
    rotate: "-10deg",
    x: "-10vw",
    duration:0.5,

})
endTl.from("#rotateText", {
    delay: 1,
    y: -250,
})