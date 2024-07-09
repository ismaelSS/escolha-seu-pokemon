import React, { forwardRef } from 'react';
import NextPokemonImage from "../nextPokemonImage";
import NextPokemonBasicInformations from "../nextPokemonInformation";
import { RightContainerStyle } from "./styles";

const RightContainer = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <RightContainerStyle>
      <NextPokemonBasicInformations ref={ref}/>
      <NextPokemonImage ref={ref} />
    </RightContainerStyle>
  );
});

RightContainer.displayName = 'RightContainer';

export default RightContainer;
