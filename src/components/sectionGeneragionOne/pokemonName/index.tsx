import { useGenOne } from "@/contexts/genOne.context";
import { PokemonNameStyle } from "./styles";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { commonAnimationSettings } from "..";


export default function PokemonName(){
  const {name} = useGenOne().pokemonselected
  const pokemonNameRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {

    gsap.fromTo(pokemonNameRef.current,{
      x: 400,
    },{
      x:0,
      scrollTrigger:{
        ...commonAnimationSettings.secondTrigger
      }
    })

  }, [])


  return(
    <PokemonNameStyle ref={pokemonNameRef}>
      {name.toUpperCase()}
    </PokemonNameStyle>
  )

};
