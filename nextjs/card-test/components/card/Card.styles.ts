import { green, red } from '@mui/material/colors';
import styled from 'styled-components';

import { black, gray1, gray2, gray3, gray6, white } from '../../modules/colors';

const cardStyle = {
  primary: {
    backgroundColor: white,
    color: gray1,
    hoverColor: gray6,
    activeColor: gray3,
    border: 'none',
  },
};

export const Wrapper = styled.div<{
  border?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  type: 'primary';
}>`
  width: 100%;

  background-color: ${(props) => cardStyle[props.type].backgroundColor};
  ${(props) =>
    props.shadow && 'box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);'}

  border-radius: 8px;

  /* if disabled=true then disable the pointer events
     and change the background color */
  ${(props) =>
    props.disabled &&
    `pointer-events: none;
     background-color: ${gray2};
    `}

  :hover {
    background-color: ${(props) => cardStyle[props.type].hoverColor};
  }

  :active {
    background-color: ${(props) => cardStyle[props.type].activeColor};
  }
`;

const statusStyle = {
  size: {
    big: 10,
    small: 5,
  },
  color: {
    rejected: red,
    active: green,
    disabled: black,
  },
};

export const Status = styled.div<{
  // i don't like these being union types but
  // typescript is weird
  size: 'big' | 'small';
  color: 'rejected' | 'active' | 'disabled';
}>`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: ${(props) => `${statusStyle.size[props.size]}px`};
  background-color: ${(props) => `${statusStyle.color[props.color]}`};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
