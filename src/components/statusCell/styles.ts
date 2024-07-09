import styled from 'styled-components';

export const StatusCellStyle = styled.div`
  display:flex;
  flex-direction: column;
  padding:3px 10px;
  border-radius:5px;
  align-items: center;
  gap: 20;
  height:fit-content;


  background: rgba(47,40,82,0.4);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  border: 1px solid rgba(47,40,82,0.2);

  .status{
    font-size: 1.1rem;
  };

  .line{
    border-top: 1px black solid;
    width:100%;
    align-self:center
  };
`
