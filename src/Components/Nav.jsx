import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function DenseAppBar() {
  const handleHome = () => {
    window.location.href = '/';
  }
  const handleAlbums = () => {
    window.location.href = '/albums';
  }
  const handlePosts = () => {
    window.location.href = '/posts';
  }
  const handleToDos = () => {
    window.location.href = '/todos';
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
              onClick={handleToDos}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              ToDos
            </Button>
          </Box>
      </AppBar>
    </Box>
  );
}