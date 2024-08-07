import React, { useEffect, useRef } from 'react';
import { useGenOne } from '@/contexts/genOne.context';
import { NextPokemonBasicInformationsStyle } from './styles';
import NextPokemonStatus from '../nextPokemonStatus';
import PokemonsTypesIcons from '@/components/pokemonsTypesIcons';
import gsap from 'gsap';
import { commonAnimationSettings } from '..';
import dynamic from 'next/dynamic';
const StatsChart = dynamic(() => import("../statsChart"), { ssr: false })

export default function NextPokemonBasicInformations() {
  const { secondaryColor, name, types } = useGenOne().nextPokemon;
  const nextPokemonInformationsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const informationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    if (nextPokemonInformationsRef.current) {
      gsap.fromTo(nextPokemonInformationsRef.current, {
        x: -200,
        opacity: 0.5
      },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            ...commonAnimationSettings.firstTrigger
          },
        }
      );

      gsap.fromTo(titleRef.current, {
        y: -30,
        opacity: 0.5,
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          ...commonAnimationSettings.secondTrigger
        },
      });
      gsap.fromTo(informationsRef.current, {
        y: 300,
        opacity: 0.1,
      }, {
        y: 0,
        opacity: 1,
        ease: 'Power2.out',
        scrollTrigger: {
          ...commonAnimationSettings.secondTrigger
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
};
