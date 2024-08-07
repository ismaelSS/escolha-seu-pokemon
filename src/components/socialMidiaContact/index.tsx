import { iContacts } from "@/fakeData/projectData";
import SocialMidiaContactStyle from "./styles";
import Link from "next/link";


export default function SocialMidiaContact ({icon:Icon, description, link, size}:iContacts) {

  // const handleRedirect = () => {
  //   window.open(link, '_blank');
  // };

  return (
    <SocialMidiaContactStyle $size={size}>
      <Link href={link} target="_blank">
      <div className="socialMidiaContainer">
      <Icon className="socialMidiaIcon"/>
      <p className="socialMidiaDescription">{description}</p>
      </div>
      </Link>
    </SocialMidiaContactStyle>
  )
}
