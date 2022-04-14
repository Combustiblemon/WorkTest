import React from 'react';

import Icon from '../icon/Icon';
import { TextContent, Wrapper } from './Text.styles';

export interface TextPropsType {
  children: string;
  kind?: 'MAIN' | 'SECONDARY';
  iconSrc?: string;
  iconKind?: 'NORMAL' | 'INVERTED';
  iconSize?: 'SMALL';
  iconTooltip?: string;
}

const Text = ({
  children,
  kind = 'MAIN',
  iconSrc = '',
  iconKind = 'NORMAL',
  iconSize = 'SMALL',
  iconTooltip,
}: TextPropsType) => {
  return (
    <Wrapper>
      <Icon
        src={iconSrc}
        kind={iconKind}
        size={iconSize}
        tooltip={iconTooltip}
      />
      <TextContent kind={kind}>{children}</TextContent>
    </Wrapper>
  );
};

export default Text;
