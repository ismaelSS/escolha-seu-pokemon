import styled from 'styled-components';

export const PokemonInformationsStyle = styled.div`
  height: calc(30.3% - 10px);
  width: calc(100% - 20px);
  border-radius: 3% 3% 17% 3% / 8% 8% 46% 9%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:5px;
  overflow: hidden;
  align-self: last baseline;

  -webkit-box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;
  -moz-box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;
  box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;

  padding: 10px;

  .status-select{
    display:flex;
    flex-direction: row;
    align-items:center;
    align-self:flex-end;
    justify-content: space-between;
    width:calc(100% - 20px);
    height:100%;
    padding-right: 20px;
    gap:10px;
  }

`


