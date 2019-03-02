import styled, {css} from 'styled-components';
import {FacebookProvider} from 'react-facebook';

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & div {
    display: inline-block;
    max-width: 100%;
  }
`;

export default AppStyled;