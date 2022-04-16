import styled from 'styled-components';

import { gray7 } from '../../modules/colors';
import Card from '../card/Card';

export const Wrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  height: 66px;
  color: ${gray7};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 8px;
`;

export const ShipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
  width: 100%;
  max-width: 50%;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
`;

export const Item = styled.div`
  display: flex;
  font-size: 14px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 8px;
  width: 10%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  filter: invert(31%) sepia(0%) saturate(833%) hue-rotate(168deg)
    brightness(40%) contrast(86%);
`;

export const Text = styled.div`
  margin-left: 8px;
  align-self: center;
`;

export const IconContainer = styled.div`
  display: flex;
`;
