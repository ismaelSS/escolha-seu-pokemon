import { useGenOne } from "@/contexts/genOne.context";
import { PokemonNameStyle } from "./styles";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { commonAnimationSettings } from "..";


const PokemonName = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {name} = useGenOne().pokemonselected
  const pokemonNameRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {

    gsap.fromTo(pokemonNameRef.current,{
      x: 400,
    },{
      x:0,
      scrollTrigger:{
        //@ts-ignore
        trigger:ref.current,
        ...commonAnimationSettings.secondTrigger
      }
    })

  }, [])


  return(
    <PokemonNameStyle ref={pokemonNameRef}>
      {name.toUpperCase()}
    </PokemonNameStyle>
  )

});

PokemonName.displayName = 'PokemonName';

export default PokemonName;
