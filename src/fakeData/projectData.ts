import { IconType } from "react-icons";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoBing } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";



export interface itechStack {
  name:string,
  color: string,
  icon?:IconType,
  imagePath?: string,
  link:string
}

export interface iContacts {
  icon: IconType,
  description: string,
  link: string,
  size: 1|2
}


export const techStack:itechStack[] = [
  {
    name: 'SC',
    icon: SiStyledcomponents,
    color: '#AE06CB',
    link:'https://styled-components.com'
  },
  {
    name: 'RIcons',
    icon: FaReact,
    color: '#E91E63',
    link:'https://react-icons.github.io/react-icons/'
  },
  {
    name:'gsap',
    color:'#68A811',
    imagePath: '/icons/gsap-logo.png',
    link:'https://gsap.com'
  },
  {
    name:'lottie',
    color:'#00DEB2',
    imagePath: '/icons/lottie-logo.png',
    link:'https://lottiefiles.com'
  },
  {
    name:'apex',
    color:'#98CBDD',
    imagePath: '/icons/apexcharts-logo.png',
    link:'https://apexcharts.com'
  },
  {
    name:'bing ia',
    color: '#5C63AE',
    icon: BiLogoBing,
    link: 'https://www.bing.com/images/create?cc=br'

  }
]


export const contacts:iContacts[] = [
  {
    icon: FaWhatsapp,
    description: '83996377512',
    link: 'https://wa.me/+55996377512',
    size:2
  },
  {
    icon: AiOutlineLinkedin,
    description: 'Ismaelssantos',
    link: 'https://www.linkedin.com/in/ismaelssantos/',
    size:2
  },
  {
    icon: FaGithub,
    description: 'IsmaelSS',
    link: 'https://github.com/ismaelSS',
    size:1
  },

]
