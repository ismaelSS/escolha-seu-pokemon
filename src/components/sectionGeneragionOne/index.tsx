'use client'

import { useGenOne } from "@/contexts/genOne.context";
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";
import { SectionGeneratioOneStyle } from "./styles";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


export const commonAnimationSettings = {
  firstTrigger: {
    start: '-20% center',
    end: '20% center',
    scrub: true,
    // markers: true,
  },
  secondTrigger:{
    start:'20% center',
    end:'45% center',
    scrub:true
    // markers:true,
  },
  thirdTrigger:{
    start: "35% center",
    end: "50% center",
    scrub: true,
    // markers: true
  }

}

export default function SectionGeneratioOne() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  const {mainColor} = useGenOne().pokemonselected
  const mainContainerRef = useRef(null!)


  // useEffect(()=>{

  //   gsap.fromTo(mainContainerRef.current,{
  //     y:0
  //   },{
  //     y:'10vh',
  //     scrollTrigger:{
  //       trigger:mainContainerRef.current,
  //       start:"5% center",
  //       end:"60% center",
  //       scrub:true,
  //       markers:true
  //     }
  //   })

  // },[])



  return(
      <SectionGeneratioOneStyle
        style={{backgroundColor:mainColor}}
        //@ts-ignore
        ref={mainContainerRef}
      >
        <div className="mainContainer">
        <LeftContainer ref={mainContainerRef}/>
        <RightContainer  ref={mainContainerRef}/>
        </div>
      </SectionGeneratioOneStyle>

  )
}
