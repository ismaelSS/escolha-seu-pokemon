import styled from "styled-components";



export const PokemonMove2Styled = styled.div<{ $moveType: string; }>`
  display: flex;
  flex-direction: row;
  align-items:center;
  background-color: ${({ theme, $moveType }) => theme.colors.moves[$moveType]?.first || "transparent"};
  padding-right:8px;
  border-radius: 20px;
  width:110px;
  height:30px;
  gap: 10px;


  -webkit-box-shadow: -5px 3px 2px -2px #2d2d2d;
  -moz-box-shadow: -5px 3px 2px -2px #2d2d2d;
  box-shadow: -5px 3px 2px -2px #2d2d2d;

  .iconContainer{
    background-color: ${({ theme, $moveType }) => theme.colors.moves[$moveType]?.second || "transparent"};;
    border-radius: 42% 25% 54% 46% / 51% 0% 75% 49%;
    height:100%;
    text-align:center;
    align-content:center;
    padding:  0 10px;
    align-content:center;
    color:#fff;
    height:100%;

    box-shadow: -1px 0 2px 2px rgba(0,0,0,0.45) inset;
    -webkit-box-shadow: -1px 0 2px 2px rgba(0,0,0,0.45) inset;
    -moz-box-shadow: -1px 0 2px 2px rgba(0,0,0,0.45) inset;
  };

  .moveName{
    font-size:0.8rem;
    flex-wrap:nowrap;
  }

`
