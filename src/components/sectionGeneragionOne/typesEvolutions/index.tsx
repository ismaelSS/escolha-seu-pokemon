import { useEffect, useRef } from "react";
import Evolutions from "../evolutions";
import GenOneTypes from "../genOneTypes";
import { TypesEvolutionsStyle } from "./styles";
import gsap from "gsap";
import { commonAnimationSettings } from "..";


export default function TypesEvolutions() {
  const containerRef = useRef(null!)

  useEffect(()=>{

    gsap.fromTo(containerRef.current,{
      x: -120,
    },{
      x:0,
      ease:'power2.out',
      scrollTrigger:{
        ...commonAnimationSettings.secondTrigger
      }
    })

  }, [])

  return (

    <TypesEvolutionsStyle ref={containerRef}>
      <GenOneTypes/>
      <Evolutions/>
    </TypesEvolutionsStyle>

  );
};
