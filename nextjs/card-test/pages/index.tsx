import type { NextPage } from 'next';

import Fleet from '../components/fleet/Fleet';
import PendingRating from '../components/pendingRating/PendingRating';
import Puppy from '../public/puppy.jpg';
import ShipPhoto from '../public/ship1.jpg';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Fleet image={ShipPhoto} name="Hope" shipType="Supply Vessel" />
      <PendingRating
        image={Puppy}
        supplierName="SP Trading Company LTD"
        shipName="SeaLion"
      />
    </Wrapper>
  );
};

export default Home;
