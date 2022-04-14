import { StaticImageData } from 'next/image';
import React from 'react';

import ShipIcon from '../../public/icons/ship_icon.svg';
import Text from '../text/Text';
import {
  Arrow,
  Content,
  ImageContainer,
  ShipImage,
  ShipInfo,
  Wrapper,
} from './Fleet.styles';

export interface FleetPropsType {
  onClick?: () => void;
  className?: string;
  image: string | StaticImageData;
  name: string;
  shipType: string;
}

const Fleet = ({
  className,
  image,
  name,
  shipType,
  onClick,
}: FleetPropsType) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Content>
        <ImageContainer>
          <ShipImage src={image} layout="fill" objectFit="contain" />
        </ImageContainer>
        <ShipInfo>
          <Text iconSrc={ShipIcon}>{name}</Text>
          <Text kind="SECONDARY">{shipType}</Text>
        </ShipInfo>
      </Content>
      <Arrow src="/icons/right_chevron.svg" width={40} height={40} />
    </Wrapper>
  );
};

export default Fleet;
