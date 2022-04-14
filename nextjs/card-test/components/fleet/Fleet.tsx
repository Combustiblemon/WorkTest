import { StaticImageData } from 'next/image';
import React from 'react';

import ShipIcon from '../../public/icons/ship_icon.svg';
import Text from '../text/Text';
import { Arrow, Content, ShipImage, ShipInfo, Wrapper } from './Fleet.styles';

export interface FleetPropsType {
  tooltip?: string;
  shipPhotoSrc: string | StaticImageData;
  shipName: string;
  shipType: string;
}

const Fleet = ({
  tooltip,
  shipPhotoSrc,
  shipName,
  shipType,
}: FleetPropsType) => {
  return (
    <Wrapper tooltip={tooltip}>
      <Content>
        <ShipImage src={shipPhotoSrc} width={120} height={80} />
        <ShipInfo>
          <Text iconSrc={ShipIcon}>{shipName}</Text>
          <Text kind="SECONDARY">{shipType}</Text>
        </ShipInfo>
      </Content>
      <Arrow src="/icons/right_chevron.svg" width={40} height={40} />
    </Wrapper>
  );
};

export default Fleet;
