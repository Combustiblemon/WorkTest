import { Tooltip, Zoom } from '@mui/material';
import React from 'react';

import { IconImage, Wrapper } from './Icon.styles';

export interface IconPropsType {
  src: string;
  size: 'SMALL';
  kind?: 'NORMAL' | 'INVERTED';
  tooltip?: string;
}

const Icon = ({ src, size, kind = 'NORMAL', tooltip = '' }: IconPropsType) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 600 }}
      title={tooltip}
      arrow
      placement="top"
    >
      <Wrapper size={size} kind={kind}>
        <IconImage src={src} width={30} height={30} kind={kind} />
      </Wrapper>
    </Tooltip>
  );
};

export default Icon;
