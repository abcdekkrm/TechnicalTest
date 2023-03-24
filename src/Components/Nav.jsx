import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import { Button } from '@mui/material';

export default function DenseAppBar() {
  const handleHome = () => {
    window.location.href = '/';
    // console.log('click');
  }
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100vw', zIndex: '50' }}>
      <AppBar position="static" sx={{ height: '65px', bgcolor: 'background.paper', justifyContent: 'center', boxShadow: 'none'}}>
        {/* <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            id="home-button"
            variant="h6" color="black"
            component="div"
            onClick={handleHome()}
            // onMouseEnter={handleMouseEnter()}
            // onMouseLeave={handleMouseLeave()}
          >
            Home
          </Typography> */}
          {/* <Button onClick={handleHome()}>Home</Button> */}
        {/* </Toolbar> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            {/* <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} >
              <AppsIcon />
            </IconButton> */}
            <AppsIcon sx={{fill: 'black'}}/>
            <Button
              onClick={handleHome}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Home
            </Button>
          </Box>
      </AppBar>
    </Box>
  );
}