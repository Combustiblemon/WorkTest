import { Tooltip, Zoom } from '@mui/material';
import React, { ReactNode } from 'react';

import { Content, Status, Wrapper } from './Card.styles';

export interface CardPropType {
  border?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  shadow?: boolean;
  statusColor?: 'rejected' | 'active' | 'disabled';
  statusSize?: 'big' | 'small';
  tooltip?: string;
  type?: 'primary';
}

const Card = ({
  type = 'primary',
  border,
  children,
  className,
  disabled,
  onClick,
  shadow,
  statusColor = 'disabled',
  statusSize,
  tooltip = ' ',
}: CardPropType) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 600 }}
      title={tooltip}
    >
      <Wrapper
        className={className}
        type={type}
        border={border}
        shadow={shadow}
        disabled={disabled}
        onClick={onClick}
      >
        {statusSize && <Status size={statusSize} color={statusColor} />}
        <Content>{children}</Content>
      </Wrapper>
    </Tooltip>
  );
};

export default Card;
