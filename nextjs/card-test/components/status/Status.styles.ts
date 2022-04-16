import { Tooltip } from '@mui/material';
import styled from 'styled-components';

import { lightBlue, lightGray, lightGreen, white } from '../../modules/colors';

const statusColor = {
  LIGHT_BLUE: lightBlue,
  LIGHT_GRAY: lightGray,
  LIGHT_GREEN: lightGreen,
};

export const Wrapper = styled(Tooltip)<{
  // more modular
  color: 'LIGHT_BLUE' | 'LIGHT_GRAY' | 'LIGHT_GREEN';
}>`
  border-radius: 9999px;
  background-color: ${(props) => statusColor[props.color]};

  white-space: nowrap;
  padding: 2px 15px;
  margin-bottom: 15px;

  font-size: 12px;
  font-weight: 400;
  color: ${white};

  cursor: pointer;
`;
