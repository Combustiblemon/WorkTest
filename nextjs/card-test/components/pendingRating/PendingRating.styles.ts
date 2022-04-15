import Image from 'next/image';
import styled from 'styled-components';

import Card from '../card/Card';

export const Wrapper = styled(Card)`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 280px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100px;
  width: 112px;
`;

export const DisplayImage = styled(Image)``;

export const Info = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 170px;
`;

export const Arrow = styled.img`
  width: 40px;
  height: 40px;
  margin: auto;
  margin-left: 0px;
  margin-right: 20px;
`;
