import { Zoom } from '@mui/material';
import React from 'react';

import { Wrapper } from './Status.styles';

export interface StatusPropsType {
  color: 'LIGHT_BLUE' | 'LIGHT_GRAY' | 'LIGHT_GREEN';
  text: string;
  tooltip?: string;
}

const Status = ({ color, text, tooltip = '' }: StatusPropsType) => {
  return (
    <Wrapper
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 300 }}
      title={tooltip}
      arrow
      placement="top"
      color={color}
    >
      <span>{text}</span>
    </Wrapper>
  );
};

export default Status;
