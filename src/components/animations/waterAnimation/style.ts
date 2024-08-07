import styled from "styled-components";

export const WaterAnimationStyle = styled.div `
  pointer-events:none;
  position:absolute;
  z-index: 10;

  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:flex-end;

  .splashsContainer{
    width: 100%;
    height:100%;
    display:flex;
    justify-content: space-between
  };

  .firstSplash{
    /* position:absolute; */
  };

  .secondSplash{
    /* position:absolute; */
    transform: scaleX(-1);
  }
`
