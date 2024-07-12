import { useGenOne } from '@/contexts/genOne.context';
import PokemonName from '../pokemonName';
import { PokemonInformationsStyle } from './styles';
import AllPokemonStatus from '@/components/allPokemonStatus';
import Button3d from '@/components/buttons/button3d';
import AllPokemonMoves from '../allpokemonMoves';
import { forwardRef, useEffect, useRef } from 'react';
import { commonAnimationSettings } from '..';
import gsap from 'gsap';


export default function PokemonInformations(){
  const { secondaryColor } = useGenOne().pokemonselected;
  const containerRef = useRef<HTMLDivElement>(null);
  const valorInicialRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (containerRef.current instanceof HTMLDivElement && valorInicialRef.current === undefined) {
      valorInicialRef.current = containerRef.current.offsetWidth;

      gsap.fromTo(containerRef.current, {
        width: 50
      }, {
        width: valorInicialRef.current - 20,
        scrollTrigger: {
          ...commonAnimationSettings.secondTrigger
        }
      });

    }
  }, []);

  return (
    <PokemonInformationsStyle style={{ backgroundColor: secondaryColor }} ref={containerRef}>
      <PokemonName/>
      <AllPokemonMoves/>
      <div className='status-select'>
        <AllPokemonStatus/>
        <Button3d />
      </div>
    </PokemonInformationsStyle>
  );
};
