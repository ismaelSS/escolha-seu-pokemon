import { useGenOne } from "@/contexts/genOne.context";
import StatusCell from "../statusCell";
import { AllPokemonStatusStyle } from "./styles";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { commonAnimationSettings } from "../sectionGeneragionOne";


const AllPokemonStatus = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { statusBase } = useGenOne().pokemonselected;
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = statusRef.current!.querySelectorAll('.status-cell');

    const tl = gsap.timeline({
      scrollTrigger: {
        //@ts-ignore
        trigger: ref.current,
        ...commonAnimationSettings.thirdTrigger
      }
    });

    items.forEach(item => {
      tl.fromTo(item,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: 'power2.out'}
      );
    });
  }, []);

  return (
    <AllPokemonStatusStyle ref={statusRef}>
      {Object.entries(statusBase).map(([statusName, value]) => (
        <StatusCell key={statusName} value={value} statusName={statusName.toLowerCase()} className="status-cell"/>
      ))}
    </AllPokemonStatusStyle>
  );
});

AllPokemonStatus.displayName = 'AllPokemonStatus';

export default AllPokemonStatus;
