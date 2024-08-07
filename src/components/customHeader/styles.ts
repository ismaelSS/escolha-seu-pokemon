import styled from "styled-components";


const CustomHeaderStyle = styled.header`

  width: calc(100% - 40px);
  height: 60px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color: red;

  p{
    font-size:32px;
    color:#fff;
  }

  div{
    display: flex;
    gap: 15px;
  }

`


export default CustomHeaderStyle;
