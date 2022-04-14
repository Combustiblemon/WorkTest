import styled from 'styled-components';

import { gray3 } from '../../modules/colors';

export const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const kind = {
  MAIN: {
    fontSize: 20,
    color: gray3,
    fontWeight: 500,
  },

  SECONDARY: {
    fontSize: 16,
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
  align-self: flex-end;
`;

export const EmptyIcon = styled.div`
  width: 30px;
  height: 30px;
`;
