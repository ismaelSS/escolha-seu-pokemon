import styled from 'styled-components';

export const MainCardStyle = styled.div`
  width: 100%;
  height: calc(64% + 10px);
  border-radius: 2% 27% 2% 2%;
  overflow: hidden;
  position:relative;

  -webkit-box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;
  -moz-box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;
  box-shadow: -7px 4.5px 12.5px -4.5px #2d2d2d;

  .mainCardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
