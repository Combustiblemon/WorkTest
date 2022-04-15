import { Tooltip } from '@mui/material';
import styled from 'styled-components';

import { lightBlue, lightGray, lightGreen, white } from '../../modules/colors';

const statusColor = {
  OFFERS_RECEIVED: lightBlue,
  NO_OFFERS: lightGray,
  COMPLETED: lightGreen,
};

export const Wrapper = styled(Tooltip)<{
  status: 'OFFERS_RECEIVED' | 'NO_OFFERS' | 'COMPLETED';
}>`
  border-radius: 9999px;
  background-color: ${(props) => statusColor[props.status]};

  white-space: nowrap;
  padding: 2px 15px;
  margin-bottom: 15px;

  font-size: 12px;
  font-weight: 400;
  color: ${white};

  cursor: pointer;
`;
