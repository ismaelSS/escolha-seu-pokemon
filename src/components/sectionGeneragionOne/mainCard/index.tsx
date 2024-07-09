'use client';

import { useGenOne } from "@/contexts/genOne.context";
import Image from "next/image";
import { MainCardStyle } from "./styles";
import TypesEvolutions from "../typesEvolutions";
import MiniPreview from "../miniPreview";
import { forwardRef, useEffect, useRef } from "react";
import { commonAnimationSettings } from "..";
import gsap from "gsap";



const MainCard = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {imagePath, name, types} = useGenOne().pokemonselected
  const imageRef = useRef(null!)
  const containerRef =useRef(null!)

useEffect(()=>{
  gsap.fromTo(imageRef.current,{
    scale:2,
  },{
    scale:1,
    ease:'power3.out',
    scrollTrigger:{
      //@ts-ignore
      trigger: ref.current,
      ...commonAnimationSettings.firstTrigger
    }
  });

  gsap.fromTo(containerRef.current,{
    y:30,
    x:35,
    scale:1.1
  },{
    y:0,
    x:0,
    scale:1,
    ease:'power2.inOut',
    scrollTrigger:{
      //@ts-ignore
      trigger:ref.current,
      ...commonAnimationSettings.firstTrigger
    }
  })

},[])


  return (
    <MainCardStyle ref={containerRef}>
      <Image
        src={imagePath}
        width={1280}
        height={720}
        alt= {name}
        className="mainCardImage"
        ref={imageRef}
      />

      <TypesEvolutions ref={ref}/>

      <MiniPreview ref={ref}/>

    </MainCardStyle>

  );
});

MainCard.displayName = 'MainCard';

export default MainCard;
