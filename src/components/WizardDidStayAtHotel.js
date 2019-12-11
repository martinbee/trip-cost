import React, { memo, useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  Button,
} from '@material-ui/core';

const WizardDidStayAtHotel = () => {
  return (
    <>
      <DialogTitle id="didStayAtHotel">Did You Stay At A Hotel?</DialogTitle>
      <DialogContent>
        <Button onClick={() => {}}>Yes</Button>
        <Button onClick={() => {}}>No</Button>
      </DialogContent>
    </>
  );
};

export default memo(WizardDidStayAtHotel);
