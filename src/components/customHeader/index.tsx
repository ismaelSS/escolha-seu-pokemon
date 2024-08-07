import { contacts } from "@/fakeData/projectData";
import SocialMidiaContact from "../socialMidiaContact";
import CustomHeaderStyle from "./styles";
import { archivo_Black } from "@/app/fonts";


export default function CustomHeader() {
  return(
    <CustomHeaderStyle>

      <p className={archivo_Black.className}>IsmaelSS</p>

      <div>
        {
        contacts.map((contact, index) =>
          <SocialMidiaContact
            icon={contact.icon}
            link={contact.link}
            description={contact.description}
            size={contact.size}
            key={index}
          />
        )}
      </div>

    </CustomHeaderStyle>
  )
}
