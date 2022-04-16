import { Tooltip, Zoom } from '@mui/material';
import React, { ReactNode } from 'react';

import { Wrapper } from './Card.styles';

export interface CardPropType {
  border?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  shadow?: boolean;
  statusColor?: 'LIGHT_BLUE' | 'LIGHT_GRAY' | 'LIGHT_GREEN';
  statusSize?: 'big' | 'small';
  tooltip?: string;
  kind?: 'primary';
}

const Card = ({
  kind = 'primary',
  border,
  children,
  className,
  disabled,
  onClick,
  shadow,
  statusColor,
  statusSize = 'big',
  tooltip = '',
}: CardPropType) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 600 }}
      title={tooltip}
      arrow
      placement="top"
    >
      <Wrapper
        className={className}
        kind={kind}
        border={border}
        shadow={shadow}
        disabled={disabled}
        onClick={onClick}
        statusSize={statusSize}
        statusColor={statusColor}
      >
        {children}
      </Wrapper>
    </Tooltip>
  );
};

export default Card;
