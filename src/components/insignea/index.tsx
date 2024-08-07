import InsigneaStyle from "./styles";
import { PiHexagonDuotone } from "react-icons/pi";
import Image from "next/image";

interface iInsignea {
  description: string;
  iconFrameColor?: string;
  size?: string;
  techIcon?: any;
  imagePath?: string;
  link:string
}

export default function Insignea({
  description,
  iconFrameColor = '#000',
  size = '6rem',
  techIcon: TechIcon,
  imagePath,
  link
}: iInsignea) {

  const handleRedirect = () => {
    window.open(link, '_blank');
  };
  return (
    <InsigneaStyle $size={size} onClick={handleRedirect}>
      <p className="description">{description}</p>
      <PiHexagonDuotone size={'100%'} className="insigneaFrame" id="insignea" color={iconFrameColor} />

      {
        imagePath ?
        <Image width={70} height={70} src={imagePath} alt='' className="techIcon imageIcon"/>
        :
        <TechIcon size={'70%'} className="techIcon" />
      }

    </InsigneaStyle>
  );
}
