import Image from "next/image";
import React from "react";
import CustonIconStyle from "./styles";

interface CustomIconProps {
  src: string;
  className?:string;
}

const CustomIcon: React.FC<CustomIconProps> = ({className, src }) => {
  return (
    <CustonIconStyle className={className}>
      <Image width={70} height={70} alt='' src={src} />
    </CustonIconStyle>
  );
};

export default CustomIcon;
