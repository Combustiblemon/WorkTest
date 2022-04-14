import styled from 'styled-components';

import { gray3 } from '../../modules/colors';

export const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
`;

const kind = {
  MAIN: {
    fontSize: 20,
    color: gray3,
    fontWeight: 500,
  },

  SECONDARY: {
    fontSize: 20,
    color: gray3,
    fontWeight: 500,
  },
};

export const TextContent = styled.span<{
  kind: 'MAIN' | 'SECONDARY';
}>`
  font-size: ${(props) => kind[props.kind].fontSize}px;
  color: ${(props) => kind[props.kind].color};
  font-weight: ${(props) => kind[props.kind].fontWeight};
`;
