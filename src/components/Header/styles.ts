import styled from 'styled-components';
import { SiPexels } from 'react-icons/si';

export const Container = styled.div`
  display: flex;
  background: #2D4B2D;
  padding: 10px 10px;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
`;

export const PexelLogo = styled(SiPexels)`
  width: 680px;
  height: 38px;
  cursor: pointer;
  
`;

export const Button = styled.button`
  //margin-left: 100px;
  //margin-bottom: 1px;
  //padding: 40px;
  ///*position: absolute;*/
  //align-items: center;
  //font-size: large;
  //border-radius:3px;
  //font-weight: bolder;
  //border: none;
  //cursor:pointer;
  //width: 250px;

`;

export const SearchForm = styled.form`
  padding-left: 6px;
  max-width: 360px;
  width: 90%;
 
  input {
    background: #2D4B2D;
    outline: 0;
    border-radius: 6px;
    padding: 12px 12px;
    width: 100%;
    font-size: 20px;
    &:focus {
      width: 318px;
    }
    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;

export const ButtonsHeader = styled.div`

`;

