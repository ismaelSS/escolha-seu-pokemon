import Image from "next/image";
import { MiniPreviewStyle } from "./style";
import { useGenOne } from "@/contexts/genOne.context";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { commonAnimationSettings } from "..";




const MiniPreview = forwardRef<HTMLDivElement, {}>((props, ref) => {

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
        //@ts-ignore
        trigger:ref.current,
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

});

MiniPreview.displayName = 'MiniPreview';

export default MiniPreview;
