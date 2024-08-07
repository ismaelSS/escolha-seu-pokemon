'use client';
import React, { useState } from "react";
import Lottie from 'react-lottie';
import waterSplashAnimation from '../../../../public/svg/Animation - waterSplash.json';
import waterWalkerAnimation from '../../../../public/svg/Animation - waterWalker.json';
import { WaterAnimationStyle } from "./style";



export default function WaterAnimation() {
  const [isFirstStage, setIsFirstStage] = useState(true)


  //@ts-ignore
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
      setIsFirstStage(false);
    }, 1000)

  return(
    <WaterAnimationStyle>

      {

        isFirstStage === true ?
          <div className='splashsContainer'>
            <div className='firstSplash'>
              <Lottie options={defaultOptions(waterSplashAnimation)} height={400} width={'100%'}/>
            </div>

            <div className='secondSplash'>
              <Lottie options={defaultOptions(waterSplashAnimation)} height={400} width={'100%'}/>
            </div>

          </div>
        :
          <Lottie options={defaultOptions(waterWalkerAnimation)} height={'100%'} width={'90%'}/>

      }

    </WaterAnimationStyle>
  )
}
