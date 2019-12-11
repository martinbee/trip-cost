import React, { memo } from 'react';
import {
  DialogTitle,
  DialogContent,
  TextField,
} from '@material-ui/core';

const WizardDestination = () => {
  return (
    <>
      <DialogTitle id="destinationCity">Where To?</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="destinationCity"
          label="Destination City"
          type="text"
          fullWidth
        />
      </DialogContent>
    </>
  );
};

export default memo(WizardDestination);
