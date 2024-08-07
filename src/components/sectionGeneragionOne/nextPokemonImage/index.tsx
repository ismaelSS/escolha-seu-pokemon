import { useGenOne } from '@/contexts/genOne.context'
import { NextPokemonImageStyle } from './styles'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { commonAnimationSettings } from '..';

export default function NextPokemonImage(){

  const {setPokemon, nextPokemon} = useGenOne()
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current,
    {
      scale: 0.1,
      filter:'blur(20px)'
    },
    {
      scale: 1,
      x:0,
      filter:'blur(0px)',
      ease:'Power2.out',
      scrollTrigger:{
        ...commonAnimationSettings.secondTrigger
      }
    })

  },[])

  return(
    <NextPokemonImageStyle
      onClick={() => setPokemon()}
      $borderColor={nextPokemon.mainColor}
      ref={imageRef}
    >
      <Image
        className='image'
        src={nextPokemon.imagePath}
        alt={`imagem de ${nextPokemon.name}`}
        width={600} height={600}
      />
    </NextPokemonImageStyle>
  )
};
