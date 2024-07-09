import styled from 'styled-components';

export const NextPokemonBasicInformationsStyle = styled.div<{ $bgColor?: string; }>`
height: calc(80% - 20px);
width: calc(100% - 20px);
padding:10px;
border-radius: 10px;
overflow:hidden;
background-color: ${props => props.$bgColor ?  props.$bgColor : '#fff'};
transition: background-color 0.3s linear;

display:flex;
flex-direction:column;
align-items:center;
text-align:center;
gap: 10px;

.informations{
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%
};

.nextPokemonName{
  font-family: "Archivo Black", sans-serif;
  color:#fff;
  font-size: 24px;
  align-self:center
};

.statusTypes{
  display:flex;
  gap:10px;

  flex-direction:column
};

.types{
  display:flex;

  gap:5px;
}
`
