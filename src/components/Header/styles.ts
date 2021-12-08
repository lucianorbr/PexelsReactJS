import styled from 'styled-components';
import { SiPexels } from 'react-icons/si';
import {BurgerSVG} from "./IconSVG";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  background: #2D4B2D;
  //padding: 11px 16px;
  width: 100%;
  height: 150px;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 110px;
`

export const Burger = styled(BurgerSVG)`
  width: 42px;
  height: 42px;
  cursor: pointer;
  padding-right: 5px;
`;

export const PexelLogo = styled(SiPexels)`
  fill: white;
  width: 85px;
  height: 85px;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 10px ;
`;

export const Button = styled.button`
  background: white;
  color: #2D4B2D;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding: 13px 30px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1px;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 95%;
    font-size: 22px;
`;

export const ButtonsHeader = styled.div`

`;

