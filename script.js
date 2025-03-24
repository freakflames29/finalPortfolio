console.log("Hi")

window.addEventListener("DOMContentLoaded", function () {

    window.scrollTo(0, 0);

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
        ease: "power3.out",
    })
    //
    //
    // tl.to("#loader h1", {
    //     x: "-190vw",
    //     duration: 6,
    //     // delay:1,
    //     // ease:"elastic.out(1,0.5)",
    // })
    // tl.to("#loader", {
    //     height: 0,
    //     duration: 0.8
    // })
// tl.to("#load2", {
//     delay: 0.5,
//     x: "-150vw",
//     duration: 1,
//     ease: "power2.out",
// }, "load")
// tl.to("#load3", {
//     delay: 0.5,
//     x: "100vw",
//     duration: 1,
//     ease: "power2.out",
// }, "load")
//
//
// tl.to("#loader", {
//     height: 0,
//     duration: 0.8, // Add duration for smooth animation
//     ease: "power2.inOut"
// }, "+=0.2")


    tl.from("#loader h1", {
        y: 400,
        delay:0.5,
        visibility:"visible",
        // display: "visible",
// ease: "elastic.in(1,1)",
        stagger: {
            each: 0.5,


            start: "random",
            repeat: 1,
            yoyo: true
        }
    })
    // tl.to("#wel", {
    //     x: "-110vw",
    //     duration: 4
    // }, "we")
    // tl.to("#go", {
    //     x: "110vw",
    //     duration: 4
    // }, "we")
    tl.to("#loader", {
        height: 0,
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
    }, "box")

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
    workTl.from(".bigHeading", {
        y: 200
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

    let cvTl = gsap.timeline({
        // duration:12
        ease: "sine.out",
        scrollTrigger: {
            trigger:"#mysection_right",
            // start:"top 50%",
            // end:"bottom 60%",
            // markers:true,
            // // scrub:1,

        }
    })

    cvTl.to("#right1 .scrollSkill",{
        y:"-60vh",
        repeat:-1,
        duration:10,
        yoyo:true
    },"cv")
    cvTl.to("#right2",{
        y:"10vh",
        repeat:-1,
        duration:10,
        yoyo:true
    },"cv")

     cvTl.to("#right3 .scrollSkill",{
        y:"-60vh",
        repeat:-1,
        duration:10,
        yoyo:true
    },"cv")
    cvTl.to("#right4",{
        y:"60vh",
        repeat:-1,
        duration:10,
        yoyo:true
    },"cv")



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
        opacity: 0
    }, "aa")

    skillTl.from("#skillSection img", {
        // y:() => gsap.utils.random(50, 70, true),
        // x:()=> gsap.utils.random(50, 70, true),
        scale: 2,
        opacity: 0,
        duration: 0.5,
        // stagger:0.05,
        stagger: {
            amount: 1,
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
    }, "aa")
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
        duration: 0.5,

    })
    endTl.from("#rotateText", {
        delay: 1,
        y: -250,
    })
})