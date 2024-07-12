'use client';
import React, { useEffect, useRef, useState } from "react";
import Lottie from 'react-lottie';
import fireWalkerAnimation from '../../../../public/svg/Animation - fireWalker.json';
import fireExplosionAnimation from '../../../../public/svg/Animation - fireExplosion.json';
import { FireAnimationStyle } from "./style";



export default function FireAnimation() {
  const [isFirstAnimation, setIsFirstAnimation] = useState(true)



  const defaultOptions = (data:any) =>  {
    return{
      loop: false,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    };

    setTimeout(() => {
      setIsFirstAnimation(false);
    }, 1100);



  return(
    <FireAnimationStyle>

      {

        isFirstAnimation ?
          <Lottie options={defaultOptions(fireExplosionAnimation)} height={"100%"} width={400}/>
        :
          <Lottie options={defaultOptions(fireWalkerAnimation)} height={'100%'} width={'100%'}/>

      }

    </FireAnimationStyle>
  )
}
