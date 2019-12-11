// config object
// {
//   tabIcon,
//   componentToRender,
//   title,
// }
// map over, apply id, pass in func to move between this screen and previous

      // <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      // <DialogContent>
      //   <DialogContentText>
      //     To subscribe to this website, please enter your email address here. We will send updates
      //     occasionally.
      //   </DialogContentText>
      //   <TextField
      //      autoFocus
      //      margin="dense"
      //      id="name"
      //      label="Email Address"
      //      type="email"
      //      fullWidth
      //    />
      //   </DialogContent>
import React, { useState, useCallback } from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import LeftIcon from '@material-ui/icons/ArrowLeft';
import RightIcon from '@material-ui/icons/ArrowRight';

const AddTripWizard = ({ isOpen, handleClose }) => {
  const [currentStep, setStep] = useState(0);
  const decrementStep = useCallback(() => setStep(currentStep - 1), [currentStep]);
  const incrementStep = useCallback(() => setStep(currentStep + 1), [currentStep]);

  return (
    <Dialog style={{ width: '100%' }} open={isOpen} onClose={handleClose} aria-labelledby="Add Trip Wizard">
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
      <DialogContent>
        {currentStep}
      </DialogContent>
      <div>
        {currentStep}
        {currentStep > 0 && (
          <IconButton onClick={decrementStep}>
            <LeftIcon />
          </IconButton>
        )}
        <IconButton onClick={incrementStep}>
          <RightIcon />
        </IconButton>
      </div>
    </Dialog>
  );
}

export default AddTripWizard;
