import React from 'react';

import Status from '../status/Status';
import Tip from '../tip/Tip';
import {
  Content,
  ExtraInfo,
  Icon,
  IconContainer,
  Item,
  ItemContainer,
  ShipInfo,
  Text,
  Wrapper,
} from './ServiceRequestExcerptCompany.styles';

const statusColor = {
  OFFERS_RECEIVED: 'LIGHT_BLUE' as const,
  NO_OFFERS: 'LIGHT_GRAY' as const,
  COMPLETED: 'LIGHT_GREEN' as const,
};

const statusMessage = {
  OFFERS_RECEIVED: 'Offers Received',
  NO_OFFERS: 'No Offers',
  COMPLETED: 'Completed',
};

export interface ServiceRequestExcerptCompanyPropsType {
  status: 'OFFERS_RECEIVED' | 'NO_OFFERS' | 'COMPLETED';
  arrival: string;
  className?: string;
  departure: string;
  equipments: string;
  hasNewMessage?: boolean;
  hasNotification?: boolean;
  shipName: string;
  onClick?: () => void;
  port: string;
  totalOffers: number;
  travellingSuppliersAllowed?: boolean;
  uniqueId: string;
}

const ServiceRequestExcerptCompany = ({
  status,
  arrival,
  className,
  departure,
  equipments,
  hasNewMessage,
  hasNotification,
  shipName,
  onClick,
  port,
  totalOffers,
  travellingSuppliersAllowed,
  uniqueId,
}: ServiceRequestExcerptCompanyPropsType) => {
  return (
    <Wrapper
      className={className}
      shadow
      statusSize="big"
      statusColor={statusColor[status]}
      onClick={onClick}
    >
      <Content>
        <ShipInfo>
          <Item>
            <Icon src="/icons/cog.svg" />
            <Text>{equipments}</Text>
          </Item>
          <Item>
            <Icon src="/icons/ship_icon.svg" />
            <Text>{shipName}</Text>
          </Item>
        </ShipInfo>
        <ItemContainer>
          <Item>
            <Icon src="/icons/old_key.svg" />
            <Text>{uniqueId}</Text>
          </Item>
          <Item>
            <Icon src="/icons/anchor.svg" />
            <Text>{`${arrival} - ${departure} | ${port}`}</Text>
          </Item>
        </ItemContainer>
      </Content>
      <ExtraInfo>
        <Status
          color={statusColor[status]}
          text={statusMessage[status]}
          tooltip="hello"
        />
        <IconContainer>
          {hasNewMessage ? <Tip icon="MESSAGE" message /> : null}
          {travellingSuppliersAllowed ? <Tip icon="TRAVEL" /> : null}
          {totalOffers ? (
            <Tip text={totalOffers.toString()} message={hasNotification} />
          ) : null}
        </IconContainer>
      </ExtraInfo>
    </Wrapper>
  );
};

export default ServiceRequestExcerptCompany;
