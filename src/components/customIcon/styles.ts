import styled from "styled-components";


const CustonIconStyle = styled.div`
  display:inline-block;
  width:70%;
  height:70%;
  position: relative;

  .image{
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export default CustonIconStyle;
