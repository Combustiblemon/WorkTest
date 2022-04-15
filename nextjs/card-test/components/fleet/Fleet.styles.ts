import Image from 'next/image';
import styled from 'styled-components';

import { gray7 } from '../../modules/colors';
import Card from '../card/Card';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 112px;
`;

export const ShipInfo = styled.div`
  width: 100%;
  margin: 8px;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ShipImage = styled(Image)``;

export const Arrow = styled.img`
  width: 40px;
  height: 40px;
  margin: auto;
  margin-left: 0px;
  margin-right: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const EmptyIcon = styled.div`
  width: 30px;
  height: 30px;
`;

export const NameText = styled.div`
  font-size: 20px;
  color: ${gray7};
  font-weight: 400;
  align-self: flex-end;
  margin-left: 10px;
`;
