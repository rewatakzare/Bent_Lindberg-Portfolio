function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();

}
function texts(){
    gsap.to(".worknav1 h1",{
        x:-200,
        scrollTrigger:{
            trigger:".workmain",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        }
    })
        
    
    gsap.to(".worknav2 h1",{
        x:-180,
        scrollTrigger:{
            trigger:".camera",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        }
    })
        
    
    gsap.to(".worknav3 h1",{
        x:-180,
        scrollTrigger:{
            trigger:".noise",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        }
    })
}
  
function images(){
    gsap.from(".workimg1 img", {
        duration: 1,
        scale: 0.9, 
        ease: "power2.inOut",
        scrollTrigger:{
            trigger:".workmain",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        } 
      });
      gsap.from(".workimg2 img", {
        scale: 0.9, 
        ease: "power2.inOut",
        scrollTrigger:{
            trigger:".camera",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        } 
      });
      gsap.from(".workimg3 img", {
        duration: 1,
        scale: 0.9, 
        ease: "power2.inOut",
        scrollTrigger:{
            trigger:".noise",
            start:"top bottom",
            end:"bottom top",
            scrub:0.1,
        } 
      });
    
      gsap.from('.heroimg img', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.inOut',
        transformOrigin: 'center center',
        scrollTrigger:{
            trigger:".homepage",
            start:"top top",
            end:"bottom top",
            scrub:0.1,
        }
      });
}

function texth1(){
    gsap.from(".intro h1",{
        y:120,
        duration: 1.5,
        ease: 'power2.inOut',
    })
    
    gsap.from(".footer h1",{
        y:120,
        scrollTrigger:{
            trigger:".footer",
            start:"top bottom",
            end:"bottom bottom",
            scrub:0.5,
        }
})
}

loco();
texts();  
images();
texth1();