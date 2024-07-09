import { useGenOne } from "@/contexts/genOne.context";
import PokemonMove2 from "../pokemonMove2";
import { AllPokemonMovesStyle } from "./styles";
import { forwardRef, useEffect, useRef } from "react";
import { commonAnimationSettings } from "..";
import gsap from "gsap";


const AllPokemonMoves = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {initialMoves} = useGenOne().pokemonselected
  const movesRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const moves = movesRef.current!.querySelectorAll('.moves');
    // console.log( movesRef.current!.querySelectorAll('.moves'));

    const tl = gsap.timeline({
      scrollTrigger: {
        //@ts-ignore
        trigger: ref.current,
        ...commonAnimationSettings.thirdTrigger
      }
    });

    moves.forEach(moves => {
      tl.fromTo(moves,
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, ease: 'power2.out'}
      );
    });


  },[])


  return (
    <AllPokemonMovesStyle ref={movesRef}>

      {/* {Object.entries(initialMoves).map(([name, type])=> (
        <PokemonMove2 name={name} type={type} key={name} className="moves"/>
      ))} */}

      {initialMoves.map((move, index) =>
      <PokemonMove2 name={move.name} type={move.type} key={index} className="moves"/>)
      }

    </AllPokemonMovesStyle>
  )

});

AllPokemonMoves.displayName = 'AllPokemonMoves';

export default AllPokemonMoves;
