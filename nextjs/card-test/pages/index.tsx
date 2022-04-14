import type { NextPage } from 'next';

import Fleet from '../components/fleet/Fleet';
import ShipPhoto from '../public/ship1.jpg';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Fleet
        shipPhotoSrc={ShipPhoto}
        shipName="Hope"
        shipType="Supply Vessel"
      />
    </Wrapper>
  );
};

export default Home;
