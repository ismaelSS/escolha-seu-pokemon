import styled from "styled-components";


const ProjectTitleStyled = styled.div`

  h1{
    font-size: 4rem;
  }

  @media(max-width:1388px){
    h1{
      font-size: 3rem;
      color:blue
    }
  }

  @media(max-width:1043px){
    h1{
      font-size: 2.5rem;
      color:red
    }
  }

  @media(max-width:863px){
    h1{
      font-size: 2rem;
      color:red
    }
  }



`

export default ProjectTitleStyled;
