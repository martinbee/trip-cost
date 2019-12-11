import React, { useState, useCallback } from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import LeftIcon from '@material-ui/icons/ArrowLeft';
import RightIcon from '@material-ui/icons/ArrowRight';
import WizardDestination from './WizardDestination';
import WizardDidFly from './WizardDidFly';
import WizardDidStayAtHotel from './WizardDidStayAtHotel';

const wizardStepComponents = [
  WizardDestination,
  WizardDidFly,
  WizardDidStayAtHotel,
];

// determine how to set values and if values should be read from context
// step components should be able to inc
// get rid of steps and handle using enter or button click
const AddTripWizard = ({ isOpen, handleClose }) => {
  const [currentStep, setStep] = useState(0);
  const decrementStep = useCallback(() => setStep(currentStep - 1), [currentStep]);
  const incrementStep = useCallback(() => setStep(currentStep + 1), [currentStep]);

  const StepComponent = wizardStepComponents[currentStep];
  const isPastFirstStep = currentStep > 0;
  const isLastStep = currentStep === wizardStepComponents.length - 1;

  return (
    <Dialog fullWidth open={isOpen} onClose={handleClose} aria-labelledby="Add Trip Wizard">
      <StepComponent incrementStep={incrementStep} decrementStep={decrementStep} />
      <DialogActions>
        <div>
          {isPastFirstStep && (
            <IconButton onClick={decrementStep}>
              <LeftIcon />
            </IconButton>
          )}
          {isLastStep ? <div>Finish</div> : (
            <IconButton onClick={incrementStep}>
              <RightIcon />
            </IconButton>
          )}
        </div>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTripWizard;
