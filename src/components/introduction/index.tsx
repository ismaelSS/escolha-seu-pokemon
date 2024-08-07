import { techStack } from "@/fakeData/projectData";
import Insignea from "../insignea";
import IntroductionStyled from "./styles";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import { archivo_Black } from "@/app/fonts";



export default function Introduction() {
  return (

    <IntroductionStyled>
      <div className='backGroundClipPath' />



      <div className="textsContainer">
        <h1 className={archivo_Black.className} >Escolha seu pokemon</h1>
        <div className="projectInformations">
        <p className="introdution">
          Bem-vindo! Este projeto foi desenvolvido com o objetivo de colocar em pratica e demonstrar
          minhas habilidades em desenvolvimento web, especialmente em animações e interações dinâmicas.
          Utilizando o framework Next.js.
        </p>
        <p className="motivations">
          Minha principal motivação para este projeto foi a busca constante por aprendizado e aprimoramento
          técnico. Sempre fui fascinado pela forma como animações bem implementadas podem transformar a
          navegação em um site, tornando-a mais envolvente e intuitiva.
        </p>
        </div>

        <div className="techs">
          <div>

          <Insignea description="next.js" techIcon={TbBrandNextjs} link="https://nextjs.org" />

          {techStack.map((tech, index) =>
            <Insignea link={tech.link} key={index} imagePath={tech.imagePath} techIcon={tech.icon} description={tech.name} iconFrameColor={tech.color} size='4.5rem' />)
          }
          </div>
        </div>
      </div>

      <Image className="myImage" width={600} height={600} src='/ismael_mestre_pokemon.png' alt='desenho de ismael como treinador pokemon' />

    </IntroductionStyled>


  )
}
