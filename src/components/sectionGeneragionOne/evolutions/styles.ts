import styled from 'styled-components';

export const EvolutionsStyle = styled.div`
  display:flex;
  flex-direction:column;


  /* height:25%; */
  gap: 5px;
  padding:5px;
  border-radius:5%;
  justify-content:space-between;
  align-items:center;
  background-color:${({ theme }) => theme.colors.rgbabg1};

  /* background: rgba(47,40,82,0.4); */
-webkit-backdrop-filter: blur(4px);
backdrop-filter: blur(4px);
border: 1px solid rgba(47,40,82,0.2);

  color: ${({ theme }) => theme.colors.text1};

  .evolutionName{
    font-size: 14px;
    font-weight: 700
  }

`
