import type { NextPage } from 'next';

import Card from '../components/card/Card';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
};

export default Home;
