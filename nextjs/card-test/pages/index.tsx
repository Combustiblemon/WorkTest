import type { NextPage } from 'next';

import Fleet from '../components/fleet/Fleet';
import PendingRating from '../components/pendingRating/PendingRating';
import ServiceRequestExcerptCompany from '../components/serviceRequestExcerptCompany/ServiceRequestExcerptCompany';
import Tip from '../components/tip/Tip';
import ShipIcon from '../public/icons/ship_icon.svg';
import Puppy from '../public/puppy.jpg';
import ShipPhoto from '../public/ship1.jpg';
import { Wrapper } from '../styles/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      {/* <Fleet image={ShipPhoto} name="Hope" shipType="Supply Vessel" />
      <PendingRating
        image={Puppy}
        supplierName="SP Trading Company LTD"
        shipName="SeaLion"
      /> */}
      {/* <Tip icon="MESSAGE" text="hello" message /> */}
      <ServiceRequestExcerptCompany
        status="COMPLETED"
        arrival="29 Jan"
        departure="1 Feb"
        port="New York & New Jersey"
        shipName="SeaLion"
        equipments="Bow Thruster"
        uniqueId="123456"
        totalOffers={2}
        travellingSuppliersAllowed
      />
      <ServiceRequestExcerptCompany
        status="NO_OFFERS"
        arrival="18 Feb"
        departure="25 Feb"
        port="Los Angeles"
        shipName="Hope"
        equipments="Pressure & Temperature Calibrators"
        uniqueId="654321"
        totalOffers={0}
        travellingSuppliersAllowed
      />
      <ServiceRequestExcerptCompany
        status="OFFERS_RECEIVED"
        arrival="25 Mar"
        departure="31 Mar"
        port="Pireus"
        shipName="Hope"
        equipments="Underwater Hull and Appendices"
        uniqueId="hello i am ID"
        totalOffers={1}
        travellingSuppliersAllowed
        hasNewMessage
      />
    </Wrapper>
  );
};

export default Home;
