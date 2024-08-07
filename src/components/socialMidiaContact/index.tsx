import { iContacts } from "@/fakeData/projectData";
import SocialMidiaContactStyle from "./styles";


export default function SocialMidiaContact ({icon:Icon, description, link, size}:iContacts) {

  const handleRedirect = () => {
    window.open(link, '_blank');
  };

  return (
    <SocialMidiaContactStyle $size={size} onClick={handleRedirect} >
      <div className="socialMidiaContainer">
      <Icon className="socialMidiaIcon"/>
      <p className="socialMidiaDescription">{description}</p>
      </div>
    </SocialMidiaContactStyle>
  )
}
