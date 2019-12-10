import React from 'react';

const Trip = ({
  destinationCity,
  startingCity,
  didFly,
  didStayAtHotel,
  id,
}) => {

  return (
    <div key={id}>
      {destinationCity}
    </div>
  );
};

export default Trip;

// design idea: location name then plane icon if flew, hotel if stayed at, etc. average cost on the right