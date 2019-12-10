import React, { useState, useCallback } from "react"
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Button,
} from "@material-ui/core";
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import SiteMetadata from '../components/SiteMetadata';
import Header from '../components/Header';
// design idea: location name then plane icon if flew, hotel if stayed at, etc. average cost on the right

const TripsContainer = styled(Paper)`
  margin-top: 20px; 
  flex: 4; 
  flex-direction: column; 
  width: 100%; 
  padding: 10px 15px;
`;

const AddTripButton = styled(Button)`
  width: 100%; 
  height: 50px; 
  flexDirection: row; 
`;

const Trip = ({ trip }) => <li>{trip.location}</li>;

export default () => {
  const [trips, setTrips] = useState([]);

  const addTrip = useCallback(location => setTrips(trips.concat({ location })), [trips]);
  const triggerAddTripFlow = useCallback(() => console.log('add trip'), []);
  const renderTrips = useCallback(() => trips.map(trip => (
    <Trip key={trip.location} trip={trip} />
  )), [trips]);

  return (
    <>
      <SiteMetadata pageTitle={'Your Trips'} />
      <Header />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          style={{ height: '90vh' }}
        >
          <TripsContainer>
            <AddTripButton variant="contained">
              <AddIcon />
              <Typography>Add a Trip</Typography>
            </AddTripButton>
            {renderTrips()}
          </TripsContainer>
        </Grid>
      </Container>
    </>
  );
};

// modal flow
// where to
// did you fly
// from where
// did you get a hotel
// store { destinationCity, didFly, startCity, didStayAtHotel, id, userId } if edit, it will have an id already and should be update instead