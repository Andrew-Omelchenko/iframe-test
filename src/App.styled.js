import styled, {css} from 'styled-components';
import {FacebookProvider} from 'react-facebook';

const AppStyled = styled.div`
`;

AppStyled.Block = styled.div`
  display: block; // div is already a block, added only for consistency
`;

AppStyled.Flex = styled.div`
  display: flex;
`;

export default AppStyled;