import styled from 'styled-components'
import { SiPexels } from 'react-icons/si';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  bottom: 0;
  left: 0;
  right: 0;
  
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    li{
      list-style: none;
      font-size: 18px;
      
      & + li {
        margin: 10px 0 0;
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
  
  margin-bottom: 30px;
  
  @media (min-width: 600px) {
    margin-bottom: 38px;
    
    ul {
      flex-direction: row;
      
      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
  
  
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  background: #2D4B2D;
  border-top: 1px solid #2D4B2D;
`;

export const PexelsLogo = styled(SiPexels)`
  margin-top: 5px;
  fill: #2D4B2D;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
`;

