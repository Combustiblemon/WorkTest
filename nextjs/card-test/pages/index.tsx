import type { NextPage } from 'next';

import Fleet from '../components/fleet/Fleet';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Fleet />
    </Wrapper>
  );
};

export default Home;
