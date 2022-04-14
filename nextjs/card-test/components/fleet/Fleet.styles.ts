import Image from 'next/image';
import styled from 'styled-components';

import { gray3 } from '../../modules/colors';
import Card from '../card/Card';

export const Wrapper = styled(Card)`
  max-height: 80px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 20px;
`;

export const ShipImage = styled(Image)``;

export const Arrow = styled(Image)``;

export const ShipInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
`;
