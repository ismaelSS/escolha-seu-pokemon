import styled from "styled-components";

export const PokemonMoveStyle = styled.div`
  z-index: 2;
  width: fit-content;
  height: fit-content;
  position: relative;

  &:after {
    content: '';
    background: black;
    position: absolute;
    left: -4px;
    top: 0;
    width: calc(100% + 8px);
    height: 100%;
    z-index: -1;
  }

  &:before {
    content: '';
    background: black;
    position: absolute;
    left: 0;
    top: -4px;
    width: 100%;
    height: calc(100% + 8px);
    z-index: -1;
  }

  .moveContent{
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size: 15px;
    font-family: 'Press Start 2P', cursive;
    width: 100px;
    height: 30px;
    background: #2963D6;
    border: 0px;
    position: relative;
    box-shadow:
    inset -3px 3px 0px 0px rgba(44,151,89, 0.5),
    inset 3px -3px 0px 0px rgba(44,180,44, 0.5);
  }
`;
