"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


if(window.matchMedia('(min-width:930px)').matches){

    gsap.from (".img",{
        rotation: -30,
        x : -300,
        duration: 0.5, 
        ease: "power 4"
    })
    
    gsap.from (".acc__block--txt",{
    
        x : 300,
        duration: 0.5, 
        ease: "power 4"
    })

}

/* demander au prof de l'aide

var tm = gsap.timeline();

tm.from(".proj--tfa",{scale :-0.1, opacity: 0, duration: 0.5, ease: "power 4", stagger : 3 }) 

  .from(".proj--data", {scale :-0.1, opacity: 0, duration: 0.5, ease: "power 4", stagger : 3})

  .from(".proj--rux", {scale :-0.1, opacity: 0, duration: 0.5, ease: "power 4", stagger : 3})

  .from(".proj--iolce", {scale :-0.1, opacity: 0, duration: 0.5, ease: "power 4", stagger : 3})
  
  .from(".proj--hello", {scale :-0.1, opacity: 0, duration: 0.5, ease: "power 4", stagger : 3});
*/