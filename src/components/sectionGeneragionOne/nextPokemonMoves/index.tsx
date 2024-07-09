import { useGenOne } from "@/contexts/genOne.context";
import { NextPokemonMovesStyle } from "./style";
import PokemonMove2 from "../pokemonMove2";



export default function NextPokemonMoves() {
  const {initialMoves} = useGenOne().nextPokemon
  return (
    <NextPokemonMovesStyle>
      {initialMoves.map((move, index) => <PokemonMove2 name={move.name} type={move.type} key={index}/>)}
    </NextPokemonMovesStyle>
  )
}
