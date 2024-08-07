import Image from "next/image";
import { MiniPreviewStyle } from "./style";
import { useGenOne } from "@/contexts/genOne.context";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { commonAnimationSettings } from "..";




export default function MiniPreview() {

  const {previewPath, backGroundPath} = useGenOne().pokemonselected

  const previewRef = useRef(null!)

  useEffect(() => {

    gsap.fromTo(previewRef.current,{
      x:100,
      y:90
    },{
      x:0,
      y:0,
      ease:'power2.out',
      scrollTrigger:{
        ...commonAnimationSettings.secondTrigger
      }

    })

  },[])

  return(
    <MiniPreviewStyle $backgroundPath={backGroundPath} ref={previewRef}>
      <Image
        src={previewPath}
        alt="src" width={50}
        height={50}
        className="pokemonPreview"
      />
    </MiniPreviewStyle>
  )

};
