import { forwardRef } from "react";
import MainCard from "../mainCard"
import PokemonInformations from "../pokemonInformations"
import { LeftContainerStyle } from "./styles"

const LeftContainer = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <LeftContainerStyle>
      <MainCard ref={ref}/>
      <PokemonInformations ref={ref}/>
    </LeftContainerStyle>
  );
});

LeftContainer.displayName = 'LeftContainer';

export default LeftContainer;

