"use client";

import PokemonsTypesIcons from "@/components/pokemonsTypesIcons";
import { GenOneTypesStyle } from "./styles";
import { useGenOne } from "@/contexts/genOne.context";


export default function GenOneTypes () {
  const {types} = useGenOne().pokemonselected;

  return (
    <GenOneTypesStyle>
      {types.map((type, index) => <PokemonsTypesIcons type={type} key={index}/>)}
    </GenOneTypesStyle>
  )


}
