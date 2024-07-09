import { useGenOne } from '@/contexts/genOne.context';
import PokemonName from '../pokemonName';
import { PokemonInformationsStyle } from './styles';
import AllPokemonStatus from '@/components/allPokemonStatus';
import Button3d from '@/components/buttons/button3d';
import AllPokemonMoves from '../allpokemonMoves';
import { forwardRef, useEffect, useRef } from 'react';
import { commonAnimationSettings } from '..';
import gsap from 'gsap';

const PokemonInformations = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
          //@ts-ignore
          trigger: ref.current,
          ...commonAnimationSettings.secondTrigger
        }
      });

    }
  }, []);

  return (
    <PokemonInformationsStyle style={{ backgroundColor: secondaryColor }} ref={containerRef}>
      <PokemonName ref={ref}/>
      <AllPokemonMoves ref={ref}/>
      <div className='status-select'>
        <AllPokemonStatus ref={ref}/>
        <Button3d />
      </div>
    </PokemonInformationsStyle>
  );
});

PokemonInformations.displayName = 'PokemonInformations';

export default PokemonInformations;
