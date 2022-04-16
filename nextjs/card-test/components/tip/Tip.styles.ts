import styled from 'styled-components';

import { black, gray8, orange } from '../../modules/colors';

const theme = {
  LIGHT: {
    color:
      'invert(31%) sepia(0%) saturate(833%) hue-rotate(168deg) brightness(96%) contrast(86%)',
    backgroundColor: gray8,
    borderColor: black,
    border: 'none',
  },
  DARK: {
    color:
      'invert(100%) sepia(100%) saturate(0%) hue-rotate(5deg) brightness(113%) contrast(100%)',
    backgroundColor: black,
    borderColor: black,
    border: 'none',
  },
};

export const iconColors = {
  BLACK:
    'invert(31%) sepia(0%) saturate(833%) hue-rotate(168deg) brightness(96%) contrast(86%)',
  WHITE:
    'invert(100%) sepia(100%) saturate(0%) hue-rotate(5deg) brightness(113%) contrast(100%)',
};

const size = {
  sm: 15,
};

export const Wrapper = styled.div<{
  // theme doesn't pass so themes it is
  themes: 'LIGHT' | 'DARK';
  size: 'sm';
}>`
  margin: 0px 4px;

  position: relative;
  padding: 3px 2px;
  border-radius: 4px;
  height: ${(props) => size[props.size]}px;
  width: ${(props) => size[props.size] + 1}px;
  border: ${(props) => theme[props.themes].border};
  background-color: ${(props) => theme[props.themes].backgroundColor};

  display: flex;
  justify-content: center;

  cursor: pointer;
`;

export const Icon = styled.img<{
  color: 'BLACK' | 'WHITE';
}>`
  width: 17px;
  height: 17px;
  align-self: center;
  filter: ${(props) => iconColors[props.color]};
`;

export const Notification = styled.div`
  position: absolute;
  right: -5px;
  bottom: 14px;

  height: 10px;
  width: 10px;
  background-color: ${orange};
  border-radius: 50%;
`;

export const Text = styled.span`
  font-weight: 300;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;
