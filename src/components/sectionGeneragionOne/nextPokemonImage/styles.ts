import styled from 'styled-components';

export const NextPokemonImageStyle = styled.div<{ $borderColor?: string; }>`
  height: 217px;
  width: 217px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  border: 5px solid;
  overflow:hidden;
  border-color:${props => props.$borderColor ?  props.$borderColor : '#fff'};

  right: 10px;
  bottom: 10px;

  cursor:pointer;

  transition: border-color 0.3s linear;


  &:hover{
    scale: 1.05;
  }


  .image{
    object-fit:cover;
    height:100%;
    width:100%;
  }
  &:hover{
    scale: 1.05;
  }
`


