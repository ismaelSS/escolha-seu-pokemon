import styled from "styled-components";

const IntroductionStyled = styled.section`
  width: 100%;
  height: 80vh;
  min-height: fit-content;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 10;
  background-color: blue;
  background-image: url('/introductionBackground.jpg');
  overflow: hidden;

  h1 {
    font-size: 4rem;
  }

  .myImage {
    position: absolute;
    right: -2%;
    bottom: 0;
    height: 70vh;
    width: 70vh;
    z-index: 5;
  }

  .backGroundClipPath {
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 0%, 63.7% 0.3%, 43.1% 100%, 0% 100%);
    background-color: white;
    z-index: 10;
  }

  .textsContainer {
    z-index: 10;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }

  .projectInformations {
    width: 100%;
    max-height: 50%;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
    p {
      margin-top: 20px;
    }

    p:first-of-type {
      margin-top: 0;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 25px;
    max-width: 89%;
  }

  .introduction {
    max-width: 65%;
  }

  .motivations {
    max-width: 80%;
  }

  .techs {
    display: flex;
    align-items: center;
    overflow-y: scroll;
    height: 150px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: visible;
    }


    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 1388px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1171px) {
    .techs {
      width: 70%;
    }
  }

  @media (max-width: 1099px) {
    .myImage {
      right: -10%;
    }
  }

  @media (max-width: 1043px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 863px) {
    h1 {
      font-size: 2rem;
    }

    .myImage {
      right: -20%;
    }
  }

  @media (max-width: 672px) {
    .backGroundClipPath {
      clip-path: none;
    }
    .textsContainer {
      width: 100%;
    }
    h1 {
      font-size: 2.8rem;
    }
    .techs {
      width: 90%;
    }
  }

  @media (max-width: 557px) {
    h1 {
      font-size: 2rem;
      max-width: 90%;
    }
  }

  @media (max-width: 402px) {
    .projectInformations {
      /* max-height: 50vh; */


      /* Esconde a barra de rolagem em todos os navegadores */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE e Edge */

      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari e navegadores baseados no WebKit */
      }
    }
  }
`;

export default IntroductionStyled;
