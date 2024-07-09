import { GiPoisonBottle } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { MdGrass } from "react-icons/md";
import { theme } from "@/constants/theme";
import { tPokemonTypes } from "@/pokeData/pokeData";
import { FaCircleNotch } from "react-icons/fa6";


export interface iPokemonsTypesIcons {
  type: tPokemonTypes,
  size?: number,
  color?:string
}


export default function PokemonsTypesIcons({type, size=30, color}:iPokemonsTypesIcons){

  const typesIcons = {
    fire: <FaFire size={size} color={color ? color :theme.colors[type]}/>,
    water: <IoIosWater size={size} color={color ? color :theme.colors[type]}/>,
    grass: <MdGrass size={size} color={color ? color :theme.colors[type]}/>,
    poison: <GiPoisonBottle size={size} color={color ? color :theme.colors[type]}/>,
    normal: <FaCircleNotch size={size} color={color ? color :theme.colors[type]}/>
  }
  return(
    //@ts-ignore
    typesIcons[type]
  )
}
