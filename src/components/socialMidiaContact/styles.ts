import styled from "styled-components";

interface SocialMidiaContactStyleProps {
  $size: 1 | 2;
}

const SocialMidiaContactStyle = styled.div<SocialMidiaContactStyleProps>`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 2rem;
  justify-content: flex-start;
  overflow: hidden;
  transition: width 0.2s ease-out;
  gap: 2px;
  cursor: pointer;

  .socialMidiaContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-end; /* Corrigido de 'end' para 'flex-end' */
    gap: 0.3rem;

    .socialMidiaIcon {
      font-size: 2rem;
      flex-shrink: 0;
      font-weight: 800;
    }

    .socialMidiaDescription {
      font-size: 1.5rem;
      font-weight: 500;
      flex: 3;
    }
  }

  &:hover {
    width: ${props => props.$size === 1 ? '9rem' : '13rem'};
  }
`;

export default SocialMidiaContactStyle;
