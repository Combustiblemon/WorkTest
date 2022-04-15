import styled from 'styled-components';

import { gray8 } from '../modules/colors';

export const Wrapper = styled.div`
  max-height: 600px;
  width: 420px;
  padding: 100px;

  background-color: ${gray8};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
