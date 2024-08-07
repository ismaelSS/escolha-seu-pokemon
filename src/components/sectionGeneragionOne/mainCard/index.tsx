'use client';

import { useGenOne } from "@/contexts/genOne.context";
import Image from "next/image";
import { MainCardStyle } from "./styles";
import TypesEvolutions from "../typesEvolutions";
import MiniPreview from "../miniPreview";
import { useEffect, useRef } from "react";
import { commonAnimationSettings } from "..";
import gsap from "gsap";



export default function MainCard() {
  const {imagePath, name} = useGenOne().pokemonselected
  const imageRef = useRef(null!)
  const containerRef =useRef(null!)

useEffect(()=>{
  gsap.fromTo(imageRef.current,{
    scale:2,
  },{
    scale:1,
    ease:'power3.out',
    scrollTrigger:{
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

      <TypesEvolutions/>

      <MiniPreview/>

    </MainCardStyle>

  );
};
