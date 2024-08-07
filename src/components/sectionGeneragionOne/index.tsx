'use client';

import { useGenOne } from "@/contexts/genOne.context";
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";
import { SectionGeneratioOneStyle } from "./styles";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import animations from "../animations";

export const commonAnimationSettings = {
  firstTrigger: {
    trigger: '.sectionGenOne',
    start: '-20% center',
    end: '20% center',
    scrub: true,
    // markers: true,
  },
  secondTrigger: {
    trigger: '.sectionGenOne',
    start: '20% center',
    end: '45% center',
    scrub: true
    // markers: true,
  },
  thirdTrigger: {
    trigger: '.sectionGenOne',
    start: "35% center",
    end: "50% center",
    scrub: true,
    // markers: true
  }
}

export default function SectionGeneratioOne() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  const { mainColor, animation } = useGenOne().pokemonselected;
  const { isActiveAnimation } = useGenOne();

  const [minWidthDisplay, setMinWidthDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setMinWidthDisplay(window.innerWidth <= 710);
      }
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <SectionGeneratioOneStyle
      style={{ backgroundColor: mainColor }}
      className='sectionGenOne'
    >
      <p className="incompatibleDevice">{minWidthDisplay.toString()}</p>
      {
        minWidthDisplay ?
          <p className="incompatibleDevice">Por favor use um dispositivo maior</p>
          :
          <div className="mainContainer">
            <LeftContainer />
            <RightContainer />
            {isActiveAnimation && animations[animation]}
          </div>
      }
    </SectionGeneratioOneStyle>
  );
}
