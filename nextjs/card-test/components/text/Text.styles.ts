import styled from 'styled-components';

import { gray7 } from '../../modules/colors';

const kind = {
  MAIN: {
    fontSize: 20,
    color: gray7,
    fontWeight: 400,
  },

  SECONDARY: {
    fontSize: 16,
    color: gray7,
    fontWeight: 400,
  },
};

export const Wrapper = styled.div`
  display: flex;
`;

export const EmptyIcon = styled.div`
  width: 30px;
  height: 30px;
`;

export const TextContent = styled.div<{
  kind: 'MAIN' | 'SECONDARY';
}>`
  font-size: ${(props) => kind[props.kind].fontSize}px;
  color: ${(props) => kind[props.kind].color};
  font-weight: ${(props) => kind[props.kind].fontWeight};
  align-self: flex-end;
  margin-left: 10px;
`;
