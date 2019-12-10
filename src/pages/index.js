import React, { useState, useCallback } from "react"
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Button,
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import Header from '../components/Header';
// design idea: location name then plane icon if flew, hotel if stayed at, etc. average cost on the right

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
      <Header />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          style={{ height: '90vh' }}
        >
          <Paper style={{ marginTop: '20px', flex: 4, flexDirection: 'column', width: '100%', padding: '10px 15px' }}>
            <Button variant="contained" style={{ width: '100%', height: '50px', flexDirection: 'row' }}>
              <AddIcon />
              <Typography>Add a Trip</Typography>
            </Button>
            {renderTrips()}
          </Paper>
        </Grid>
      </Container>
    </>
  );
};
