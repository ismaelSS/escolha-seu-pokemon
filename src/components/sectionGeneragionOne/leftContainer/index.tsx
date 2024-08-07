import MainCard from "../mainCard"
import PokemonInformations from "../pokemonInformations"
import { LeftContainerStyle } from "./styles"

export default function LeftContainer(){
  return (
    <LeftContainerStyle>
      <MainCard/>
      <PokemonInformations/>
    </LeftContainerStyle>
  );
};

