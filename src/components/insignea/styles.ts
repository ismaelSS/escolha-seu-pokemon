import styled from "styled-components";

const InsigneaStyle = styled.div<{ $size: string; }>`
  height: ${({ $size }) => $size};
  width:${({ $size }) => $size};
  position: relative;
  margin-top: 10px;
  cursor:pointer;
  overflow:visible;

  .insigneaFrame {
    transform: scaleY(1.1);
  }

  .techIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  };

  .imageIcon {
    height: 60%;
    width: 60%
  }

  .description {
    position: absolute;
    z-index: -1;
    top: 0;
    transform: scale(0.2);
    opacity: 0;
    transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
    padding: 5px, 0, 5px, 0;
    background-color: #c2c2c2;
    border-radius: 5%;
    width: 100%;
    text-align: center;
  }

  &:hover {
    .description {
      transform: scale(1);
      top: -30px;
      opacity: 1;
      z-index:20
    }
  }
`

export default InsigneaStyle;
