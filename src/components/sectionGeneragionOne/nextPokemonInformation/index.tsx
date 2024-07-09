import React, { forwardRef, useEffect, useRef } from 'react';
import { useGenOne } from '@/contexts/genOne.context';
import { NextPokemonBasicInformationsStyle } from './styles';
import NextPokemonStatus from '../nextPokemonStatus';
import PokemonsTypesIcons from '@/components/pokemonsTypesIcons';
import StatsChart from '../statsChart';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { commonAnimationSettings } from '..';

const NextPokemonBasicInformations = forwardRef<HTMLDivElement>((props, ref) => {
  const { secondaryColor, name, types } = useGenOne().nextPokemon;
  const nextPokemonInformationsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const informationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    if (ref && ref.current && nextPokemonInformationsRef.current) {
        gsap.fromTo(nextPokemonInformationsRef.current, {
          x: -200,
          opacity: 0.5
        },
        {
          x:0,
          opacity: 1,
          scrollTrigger: {
            //@ts-ignore
            trigger: ref.current,
            ...commonAnimationSettings.firstTrigger
          },
        }
      );

    gsap.fromTo(titleRef.current,{
      y:-30,
      opacity: 0.5,
    },{
      y:0,
      opacity:1,
      scrollTrigger:{
        //@ts-ignore
        trigger: ref.current,
        ...commonAnimationSettings.secondTrigger
      },
    });
    gsap.fromTo(informationsRef.current,{
      y:300,
      opacity: 0.1,
    },{
      y:0,
      opacity:1,
      ease:'Power2.out',
      scrollTrigger:{
        //@ts-ignore
        trigger:ref.current,
        start:'20% center',
        end:'45% center',
        markers:true,
        scrub:true,
      },
    })
    }
  }, []);

  return (
    <NextPokemonBasicInformationsStyle $bgColor={secondaryColor} ref={nextPokemonInformationsRef}>
      <h4 className="nextPokemonName" ref={titleRef}>{name.toUpperCase()}</h4>
      <div className="informations" ref={informationsRef}>
        <div className="statusTypes">
          <NextPokemonStatus />
          <div className="types">
            {types.map((type, index) => (
              <PokemonsTypesIcons type={type} key={index} />
            ))}
          </div>
        </div>
        <StatsChart />
      </div>
    </NextPokemonBasicInformationsStyle>
  );
});

NextPokemonBasicInformations.displayName = 'NextPokemonBasicInformations';

export default NextPokemonBasicInformations;
