'use client';

import { pokemonsGen1, iPokemon } from "@/pokeData/pokeData";
import { createContext, MutableRefObject, ReactNode, useContext, useRef, useState } from "react";

type tGen1ContextProps = {
  children: ReactNode;
};

interface iPokeProviderType {
  pokemonselected: iPokemon;
  nextPokemon: iPokemon;
  setPokemon: () => void;
  mainContainerRef: MutableRefObject<null>
}

const GenOneContext = createContext<iPokeProviderType | undefined>(undefined);

export const GenOneProvider: React.FC<tGen1ContextProps> = ({ children }) => {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const mainContainerRef = useRef(null)

  const setPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const nextpokemonindex = pokemonIndex === 2 ? 0 : pokemonIndex + 1

  const selectedPokemon = pokemonsGen1[pokemonIndex]
  const nextPokemon = pokemonsGen1[nextpokemonindex]

  return (
    <GenOneContext.Provider
    value={{
        pokemonselected: selectedPokemon,
        nextPokemon: nextPokemon,
        setPokemon,
        mainContainerRef:mainContainerRef
      }}>
      {children}
    </GenOneContext.Provider>
  );
};

export const useGenOne = (): iPokeProviderType => {
  const context = useContext(GenOneContext);
  if (context === undefined) {
    throw new Error("useGen1 must be used within a Gen1Provider");
  }
  return context;
};
