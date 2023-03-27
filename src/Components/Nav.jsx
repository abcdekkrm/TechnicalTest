import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function DenseAppBar() {
  const handleHome = () => {
    window.location.href = '/';
    // console.log('click');
  }
  const handleAlbums = () => {
    window.location.href = '/albums';
    // console.log('click');
  }
  const handlePosts = () => {
    window.location.href = '/posts';
    // console.log('click');
  }
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100vw', zIndex: '50' }}>
      <AppBar position="static" sx={{ height: '65px', bgcolor: 'background.paper', justifyContent: 'center', boxShadow: 'none'}}>
          <Box sx={{ flexGrow: 1, display: { display: 'flex', alignItems: 'center', marginLeft: '5px' } }}>
            <AppsIcon sx={{fill: blue[500]}}/>
            <Button
              onClick={handleHome}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={handleAlbums}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Albums
            </Button>
            <Button
              onClick={handlePosts}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Posts
            </Button>
            <Button
              onClick={handleHome}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              ToDos
            </Button>
          </Box>
      </AppBar>
    </Box>
  );
}