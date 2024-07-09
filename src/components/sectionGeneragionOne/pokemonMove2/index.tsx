import { tPokemonTypes } from "@/pokeData/pokeData";
import { PokemonMove2Styled } from "./style";
import { IoIosWater } from "react-icons/io";
import PokemonsTypesIcons from "@/components/pokemonsTypesIcons";


interface iPokemonMove2 {
  name: string,
  type: tPokemonTypes
  className: string
}

export default function PokemonMove2({name, type, className}: iPokemonMove2) {
  return(
    <PokemonMove2Styled $moveType={type} className={className}>
      <div className="iconContainer">
      <PokemonsTypesIcons type={type} size={15} color="#fff"/>
      </div>

      <p className="moveName">{name}</p>

      {/* <p>35/35</p> */}

    </PokemonMove2Styled>
  )
}
