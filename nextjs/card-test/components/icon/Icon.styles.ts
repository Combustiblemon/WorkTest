import Image from 'next/image';
import styled from 'styled-components';

import { black } from '../../modules/colors';

const kind = {
  NORMAL: {
    color:
      'invert(31%) sepia(0%) saturate(833%) hue-rotate(168deg) brightness(96%) contrast(86%)',
    backgroundColor: 'white',
    borderColor: black,
  },
  INVERTED: {
    color:
      'invert(100%) sepia(100%) saturate(0%) hue-rotate(5deg) brightness(113%) contrast(100%)',
    backgroundColor: black,
    borderColor: black,
  },
};

const size = {
  SMALL: 30,
};

export const Wrapper = styled.div<{
  size: 'SMALL';
  kind: 'NORMAL' | 'INVERTED';
}>`
  border-radius: 2px;
  align-self: center;

  width: ${(props) => size[props.size]}px;
  min-width: ${(props) => size[props.size]}px;
  height: ${(props) => size[props.size]}px;
  background-color: ${(props) => kind[props.kind].backgroundColor};
`;

export const IconImage = styled(Image)<{
  kind: 'NORMAL' | 'INVERTED';
}>`
  filter: ${(props) => kind[props.kind].color};
`;
