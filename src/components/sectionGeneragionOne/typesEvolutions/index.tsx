import { forwardRef, useEffect, useRef } from "react";
import Evolutions from "../evolutions";
import GenOneTypes from "../genOneTypes";
import { TypesEvolutionsStyle } from "./styles";
import gsap from "gsap";
import { commonAnimationSettings } from "..";


const TypesEvolutions = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const containerRef = useRef(null!)

  useEffect(()=>{

    gsap.fromTo(containerRef.current,{
      x: -120,
    },{
      x:0,
      ease:'power2.out',
      scrollTrigger:{
        //@ts-ignore
        trigger: ref.current,
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
});

TypesEvolutions.displayName = 'TypesEvolutions';

export default TypesEvolutions;
