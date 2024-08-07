import { useGenOne } from "@/contexts/genOne.context";
import PokemonMove2 from "../pokemonMove2";
import { AllPokemonMovesStyle } from "./styles";
import { useEffect, useRef } from "react";
import { commonAnimationSettings } from "..";
import gsap from "gsap";


export default function AllPokemonMoves () {
  const {initialMoves} = useGenOne().pokemonselected
  const movesRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const moves = movesRef.current!.querySelectorAll('.moves');

    const tl = gsap.timeline({
      scrollTrigger: {
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

      {initialMoves.map((move, index) =>
      <PokemonMove2 name={move.name} type={move.type} key={index} className="moves"/>)
      }

    </AllPokemonMovesStyle>
  )

};
