import styled from "styled-components";

export const Button3dStyle = styled.button`
	position: relative;
  display: inline-block;
  cursor:pointer;
  font-size: 22px;
  color: white;
  flex:1;
  margin-bottom: 5px;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.colors.bg1};
  box-shadow:
    0 0 0 1px #26176F inset,
    0 0 0 2px #26176F inset,
    0 3px 0 0 #473D79,
    0 3px 0 1px rgba(0, 0, 0, 0.4),
    0 3px 3px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    top: 5px;
    box-shadow:
      0 0 0 1px #26176F inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgba(0, 0, 0, 0.4);
  }

  .icon {
    position: relative;
    top: 3px; /* Ajuste este valor conforme necessário */
  }

`
