import React, { useState, useCallback } from "react"
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Button,
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
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
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '90vh' }}
      >
        <Typography style={{ flex: 1 }} variant="h2">
          Your Trips
        </Typography>
        <Paper style={{ flex: 4, flexDirection: 'column', width: '100%', padding: '10px 15px' }}>
          <Button variant="contained" style={{ width: '100%', height: '50px', flexDirection: 'row' }}>
            <AddIcon />
            <Typography>Add a Trip</Typography>
          </Button>
          {renderTrips()}
        </Paper>
      </Grid>
    </Container>
  );
};
