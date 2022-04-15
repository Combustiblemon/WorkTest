import { Zoom } from '@mui/material';
import React from 'react';

import { Wrapper } from './Status.styles';

export interface StatusPropsType {
  status: 'OFFERS_RECEIVED' | 'NO_OFFERS' | 'COMPLETED';
}

const statusMessage = {
  OFFERS_RECEIVED: 'Offers Received',
  NO_OFFERS: 'No Offers',
  COMPLETED: 'Completed',
};

const Status = ({ status }: StatusPropsType) => {
  return (
    <Wrapper
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 300 }}
      title={statusMessage[status]}
      arrow
      placement="top"
      status={status}
    >
      <span>{statusMessage[status]}</span>
      {/* <Wrapper status={status}>{statusMessage[status]}</Wrapper> */}
    </Wrapper>
  );
};

export default Status;
