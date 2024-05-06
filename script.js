window.addEventListener("wheel", function(val) {
    if(val.deltaY>0) {
        gsap.to(".container", {
            transform: "translateX(-200%)",
            ease: "none",
            duration:3,
            repeat: -1
        })
        gsap.to(".container img", {
            rotate: 180
        })
    }if(val.deltaY<0) {
        gsap.to(".container", {
            transform: "translateX(0%)",
            ease: "none",
            duration:3,
            repeat: -1
        })

        gsap.to(".container img", {
            rotate: 0
        })
    }
})









