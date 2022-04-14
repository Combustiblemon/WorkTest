import Image from 'next/image';
import styled from 'styled-components';

import { black, white } from '../../modules/colors';

const kind = {
  NORMAL: {
    color:
      'invert(63%) sepia(0%) saturate(0%) hue-rotate(138deg) brightness(102%) contrast(89%)',
    backgroundColor: 'white',
    borderColor: black,
  },
  INVERTED: {
    color: white,
    backgroundColor: black,
    borderColor: black,
  },
};

const size = {
  SMALL: 20,
};

export const Wrapper = styled.div<{
  size: 'SMALL';
  kind: 'NORMAL' | 'INVERTED';
}>`
  border-radius: 2px;

  width: ${(props) => size[props.size]}px;
  height: ${(props) => size[props.size]}px;
  background-color: ${(props) => kind[props.kind].backgroundColor};
`;

export const IconImage = styled(Image)<{
  kind: 'NORMAL' | 'INVERTED';
}>`
  filter: ${(props) => kind[props.kind].color};
`;
