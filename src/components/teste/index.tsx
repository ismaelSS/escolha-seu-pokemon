'use client';
import React, { useEffect, useRef } from "react";
import { TesteStyle } from "./style";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Teste() {
  gsap.registerPlugin( ScrollTrigger);



  const divAnimada = useRef(null!)
  const containerAnimacao = useRef(null!)

  useEffect(() => {

      // Animação com scrollTrigger
      gsap.to(divAnimada.current,{
        // y: -200,
        rotate: 180,
        // duration: 2,
        // ease: "bounce.out",
        scrollTrigger: {
          trigger: containerAnimacao.current,
          start: 'top center',
          end: 'bottom center',
          // markers: true,
          scrub:true,

        },
      });
    }

   , []);



  return (
    <TesteStyle>
      <div style={{ height: '50vh', backgroundColor:'#ff0', width: '100vw'}} ref={containerAnimacao}/>


      <div className="animado" ref={divAnimada}/>



    </TesteStyle>
  );
}
