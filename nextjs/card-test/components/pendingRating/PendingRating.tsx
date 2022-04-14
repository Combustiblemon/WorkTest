import { StaticImageData } from 'next/image';
import React from 'react';

import PersonIcon from '../../public/icons/person_icon.svg';
import ShipIcon from '../../public/icons/ship_icon.svg';
import Text from '../text/Text';
import {
  Arrow,
  Content,
  DisplayImage,
  ImageContainer,
  Info,
  Wrapper,
} from './PendingRating.styles';

export interface PendingRatingPropsType {
  onClick?: () => void;
  image: string | StaticImageData;
  supplierName: string;
  shipName: string;
}

const PendingRating = ({
  image,
  onClick,
  supplierName,
  shipName,
}: PendingRatingPropsType) => {
  return (
    <Wrapper onClick={onClick}>
      <Content>
        <ImageContainer>
          <DisplayImage src={image} layout="fill" objectFit="contain" />
        </ImageContainer>
        <Info>
          <Text iconSrc={PersonIcon}>{supplierName}</Text>
          <Text iconSrc={ShipIcon}>{shipName}</Text>
        </Info>
      </Content>
      <Arrow src="/icons/right_chevron.svg" width={40} height={40} />
    </Wrapper>
  );
};

export default PendingRating;
