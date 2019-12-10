import React from 'react';
import styled from 'styled-components';
import { 
  Card,
  IconButton,
  Typography,
} from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import EditIcon from '@material-ui/icons/Edit';

const TripContainer = styled(Card)`
  margin-top: 10px;
  display: flex;
  padding: 5px 5px 5px 10px;
  flex-direction: column;
`;

const DestinationAndIconsContainer = styled.div`
  align-items: center;
  display: flex;
`;

const TripText = styled(Typography)`
  flex: 3;
`;

const IconsWrapper = styled.div`
  flex: 1; 
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PriceText = styled(Typography)`
  flex: 1;
`;

const Trip = ({
  destinationCity,
  startingCity,
  didFly,
  didStayAtHotel,
  id,
}) => {

  return (
    <TripContainer>
      <DestinationAndIconsContainer>
        <TripText variant="h6">{destinationCity}</TripText>
        <IconsWrapper>
          {didFly && <FlightIcon style={{ margin: '12px' }} />}
          {didStayAtHotel && <HotelIcon style={{ margin: '12px' }} />}
          <IconButton>
            <EditIcon />
          </IconButton>
        </IconsWrapper>
      </DestinationAndIconsContainer>
      <PriceText>$0</PriceText>
    </TripContainer>
  );
};

export default Trip;

// design idea: location name then plane icon if flew, hotel if stc. averageer