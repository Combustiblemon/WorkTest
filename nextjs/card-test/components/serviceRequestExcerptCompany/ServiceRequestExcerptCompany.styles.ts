import styled from 'styled-components';

import Card from '../card/Card';

export const Wrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const Content = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-content: flex-start; */
  column-count: 2;

  width: 100%;
  margin: 8px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 8px;
`;

export const Item = styled.div`
  display: flex;
  font-size: 14px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  filter: invert(31%) sepia(0%) saturate(833%) hue-rotate(168deg)
    brightness(40%) contrast(86%);
`;

export const Text = styled.div`
  margin-left: 8px;
  align-self: flex-end;
`;

export const IconContainer = styled.div`
  display: flex;
`;
