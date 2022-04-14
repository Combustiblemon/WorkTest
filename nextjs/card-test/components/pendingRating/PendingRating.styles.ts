import Image from 'next/image';
import styled from 'styled-components';

import Card from '../card/Card';

export const Wrapper = styled(Card)`
  padding-right: 20px;
  max-height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const DisplayImage = styled(Image)``;

export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 170px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Arrow = styled(Image)``;

export const ImageContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`;
