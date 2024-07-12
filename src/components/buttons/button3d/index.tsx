import { useGenOne } from "@/contexts/genOne.context";
import { Button3dStyle } from "./styles";
import { MdCatchingPokemon } from "react-icons/md";
import { useRef } from "react";


export default function Button3d () {
  const{playAnimation,pokemonselected } = useGenOne()
  const firstAudioRef = useRef<HTMLAudioElement>(null)
  const secondAudioRef = useRef<HTMLAudioElement>(null)

  const playAudioSequence = () => {
    const firstAudio = firstAudioRef.current;
    const secondAudio = secondAudioRef.current;

    if (firstAudio && secondAudio && pokemonselected.name ==='Charmander') {

      firstAudio.play();
      setTimeout(() => {secondAudio.play()}, 1300)
    }
  };

  const playCompletAnimation = () =>{
    playAnimation()
    playAudioSequence()
  }


  return(
    <Button3dStyle onClick={playCompletAnimation}>
      <MdCatchingPokemon size={30} className="icon"/>
      <audio ref={firstAudioRef} preload="auto" >
        <source src="/sounds/flame-burst-low-101soundboards.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={secondAudioRef} preload="auto" >
        <source src="/sounds/animationStep2.mp3" type="audio/mpeg" />
      </audio>
    </Button3dStyle>
  )
}
