import React, { forwardRef } from 'react';
import NextPokemonImage from "../nextPokemonImage";
import NextPokemonBasicInformations from "../nextPokemonInformation";
import { RightContainerStyle } from "./styles";

export default function RightContainer(){
  return (
    <RightContainerStyle>
      <NextPokemonBasicInformations/>
      <NextPokemonImage/>
    </RightContainerStyle>
  );
};
