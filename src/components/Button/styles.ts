import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li{
      list-style: none;
      font-size: 18px;

      & + li {
        margin: 5px 0 0;
      }
      a {
        text-decoration: none;
        color: #2D4B2D;

        &:hover {
          color: #000;
        }
      }
    }
  }
  
  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 10px;
      }
    }
  }
  
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 20px;
  
  
  > button {
    background: #2D4B2D;
    color: white;
    opacity: 0.8;
    
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    
    padding: 13px 40px;
    border-radius: 10px;
 
    cursor: pointer;
    
    & + button {
      margin: 10px 0 0;
    }
  }
  
  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 20px;
    
    > button {
      & + button {
        margin: 0 0 0 10px;
      }
    }
  }
  


`;
