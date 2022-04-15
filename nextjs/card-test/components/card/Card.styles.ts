import styled from 'styled-components';

import {
  gray1,
  gray2,
  gray3,
  gray6,
  lightBlue,
  lightGray,
  lightGreen,
  white,
} from '../../modules/colors';

const cardStyle = {
  primary: {
    backgroundColor: white,
    color: gray1,
    hoverColor: gray6,
    activeColor: gray3,
    border: 'none',
  },
};

const statusStyle = {
  size: {
    big: 8,
    small: 5,
  },
  color: {
    OFFERS_RECEIVED: lightBlue,
    NO_OFFERS: lightGray,
    COMPLETED: lightGreen,
  },
};

export const Wrapper = styled.div<{
  border?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  statusSize: 'big' | 'small';
  statusColor?: 'OFFERS_RECEIVED' | 'NO_OFFERS' | 'COMPLETED';
  kind: 'primary';
}>`
  width: 100%;

  background-color: ${(props) => cardStyle[props.kind].backgroundColor};
  ${(props) =>
    props.shadow && 'box-shadow: 8px 5px 15px -4px rgba(0,0,0,0.30);'}

  border-radius: 8px;
  border-left: ${(props) =>
    props.statusColor
      ? `${statusStyle.size[props.statusSize]}px solid
      ${statusStyle.color[props.statusColor]}`
      : 'none'};

  /* if disabled=true then disable the pointer events
     and change the background color */
  ${(props) =>
    props.disabled &&
    `pointer-events: none;
     background-color: ${gray2};
    `}

  :hover {
    background-color: ${(props) => cardStyle[props.kind].hoverColor};
    /* box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5); */
  }

  :active {
    background-color: ${(props) => cardStyle[props.kind].activeColor};
  }
`;
