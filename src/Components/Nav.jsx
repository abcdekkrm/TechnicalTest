import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100vw', zIndex: '50' }}>
      <AppBar position="static" sx={{ height: '70px', bgcolor: 'background.paper', justifyContent: 'center'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="black" component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}