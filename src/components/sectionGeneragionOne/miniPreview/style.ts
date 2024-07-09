import styled from "styled-components";


export const MiniPreviewStyle = styled.div<{ $backgroundPath: string; }>`
  height:80px;
  width: 100px;
  border-radius: 5%;
  /* border:2px solid #0f0; */
  /* background-color: green; */

  position: absolute;
  bottom:10px;
  right:10px;

  background-image: ${({ $backgroundPath }) => `url(${$backgroundPath})`};
  background-size:cover;
  background-position:center;
  box-shadow:  0 0 8px 2px #222 inset;
  /* left:20px; */
  /* z-index:10; */
  /* bottom: 10; */

  .pokemonPreview{
    height: 50px;
    width: 50px;
    position: relative;
    top: 20px;
    left: 30px;
  }
`
