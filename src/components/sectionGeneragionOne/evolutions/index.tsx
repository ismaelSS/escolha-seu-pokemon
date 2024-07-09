"use client";

import { useGenOne } from "@/contexts/genOne.context"
import { EvolutionsStyle } from "./styles"
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Evolutions() {
  const {evolutions} = useGenOne().pokemonselected
  return(
    <EvolutionsStyle>
      {evolutions.map((evolution, index) => (
        <>
        <p key={index + 'p'} className="evolutionName"> {evolution}</p>
        {index < evolutions.length - 1 && <FaLongArrowAltDown />}
        </>
      )
      )}

    </EvolutionsStyle>
  )
}
