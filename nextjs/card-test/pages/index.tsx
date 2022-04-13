import type { NextPage } from 'next';

import Card from '../components/card/Card';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Card tooltip="forsenE" shadow statusSize="big">
        GFM Bajs
      </Card>
    </Wrapper>
  );
};

export default Home;
