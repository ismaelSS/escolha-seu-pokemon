import { PokemonMoveStyle } from "./styles";
import { IoIosWater } from "react-icons/io";



export default function PokemonMove() {
  return(
    <PokemonMoveStyle>
      <div className="moveContent">
      <IoIosWater size={20} className="icon"/>
      <p className="texts">tacle</p>
      <p className="texts">30/35</p>
      </div>
    </PokemonMoveStyle>

  )
}
