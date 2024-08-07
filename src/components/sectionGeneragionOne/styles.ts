
import styled from 'styled-components';

export const SectionGeneratioOneStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: blue; */
  transition: background-color 0.3s linear;

  .mainContainer {
  width: 700px;
  height: 528px;
  border-radius: 2%;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index:30;


  background: rgba(145,141,141,0.45);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(145,141,141,0.225);

  -webkit-box-shadow: -12.5px 7.5px 19px -4px #000000;
  -moz-box-shadow: -12.5px 7.5px 19px -4px #000000;
  box-shadow: -12.5px 7.5px 19px -4px #000000;
}
.incompatibleDevice{
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  z-index:50;
  align-self:center;
  display:none
}

@media(max-width: 739px){
  .mainContainer{
    transform:scale(0.95)
  }
}
@media(max-width: 725px){
  .mainContainer{
    transform:scale(0.85)
  }
  .incompatibleDevice{
    display:inline-block
  }
}

@media(max-width: 710px){
  .mainContainer{
    display:hidden
  }
  .incompatibleDevice{
    display:visible
  }

}

`;


