import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/menu';

const Header = ({ pageTitle }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: '5px' }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flex: 1 }}>
          Your Trips
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
