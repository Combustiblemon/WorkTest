import React from 'react';

import ShipIcon from '../../public/icons/ship_icon.svg';
import ShipPhoto from '../../public/ship1.jpg';
import Icon from '../icon/Icon';
import {
  Arrow,
  ShipClass,
  ShipImage,
  ShipInfo,
  ShipName,
  Wrapper,
} from './Fleet.styles';

const Fleet = () => {
  return (
    <Wrapper tooltip="i am a fleet component">
      <ShipImage src={ShipPhoto} width={120} height={100} />
      <ShipInfo>
        <div>
          <Icon src={ShipIcon} size="SMALL" />
          <ShipName>Borealis</ShipName>
        </div>
        <ShipClass>Supply Vessel</ShipClass>
      </ShipInfo>
      <Arrow src="/icons/right_chevron.svg" width={40} height={40} />
    </Wrapper>
  );
};

export default Fleet;
