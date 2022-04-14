import Image from 'next/image';
import styled from 'styled-components';

import { gray3 } from '../../modules/colors';
import Card from '../card/Card';

export const Wrapper = styled(Card)`
  max-height: 100px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 20px;
`;

export const ShipImage = styled(Image)``;

export const Arrow = styled(Image)``;

export const ShipInfo = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ShipName = styled.span`
  font-size: 20px;
  color: ${gray3};
  font-weight: 500;
`;

export const ShipClass = styled.span`
  font-size: 16px;
  color: ${gray3};
  font-weight: 500;
`;
