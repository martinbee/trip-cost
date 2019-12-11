import React, { memo, useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from '@material-ui/core';
// refactor

const WizardDidFly = ({ incrementStep }) => {
  const [didFly, setDidFly] = useState(null);

  const modifyDidFly = (status) => {
    setDidFly(status);
    if (status === false) incrementStep();
  };

  const renderPrompts = () => {
    if (didFly === null) {
      return (
        <div>
          <Button onClick={() => modifyDidFly(true)}>Yes</Button>
          <Button onClick={() => modifyDidFly(false)}>No</Button>
        </div>
      );
    }

    if (didFly) {
      return (
        <TextField
          autoFocus
          margin="dense"
          id="startCity"
          label="From Where?"
          type="text"
          fullWidth
        />
      );
    }

    return null;
  }

  return (
    <>
      <DialogTitle id="didFly">Did You Fly?</DialogTitle>
      <DialogContent>
        {renderPrompts()}
      </DialogContent>
    </>
  );
};

export default memo(WizardDidFly);
