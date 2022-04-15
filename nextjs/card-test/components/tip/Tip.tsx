import { Tooltip, Zoom } from '@mui/material';
import React from 'react';

import { Icon, Notification, Text, Wrapper } from './Tip.styles';

export interface IconPropsType {
  className?: string;
  theme?: 'LIGHT' | 'DARK';
  icon?: 'MESSAGE' | 'TRAVEL';
  iconColor?: 'BLACK' | 'WHITE';
  message?: boolean;
  onClick?: () => void;
  shadow?: boolean;
  size?: 'sm';
  text?: string;
  tooltip?: string;
}

const icons = {
  MESSAGE: '/icons/mail.svg',
  TRAVEL: '/icons/briefcase.svg',
};

const Tip = ({
  className,
  theme = 'LIGHT',
  icon,
  iconColor = 'BLACK',
  message,
  onClick,
  shadow,
  size = 'sm',
  text,
  tooltip = '',
}: IconPropsType) => {
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
        themes={theme}
        onClick={onClick}
        size={size}
      >
        {message ? <Notification /> : null}
        {icon ? <Icon src={icons[icon]} color={iconColor} /> : null}
        {text ? <Text>{text}</Text> : null}
      </Wrapper>
    </Tooltip>
  );
};

export default Tip;
