
import styled from 'styled-components';

export const SectionGeneratioOneStyle = styled.div`
  height: 100vh;
  width: 100vw;
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


  background: rgba(145,141,141,0.45);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(145,141,141,0.225);

  -webkit-box-shadow: -12.5px 7.5px 19px -4px #000000;
  -moz-box-shadow: -12.5px 7.5px 19px -4px #000000;
  box-shadow: -12.5px 7.5px 19px -4px #000000;
}
`;


