import React from "react";
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import AlbumsList from "../Components/AlbumsList";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from 'react-responsive';
import UserListDrawer from "../Components/UserListDrawer";

function Albums() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return(
    <>
      <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <Box sx={{ width: '100vw', paddingTop: '85px', paddingBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: isMobile?'center':null }}>
          {isTablet
            ?
            isMobile ? null
            :
            <UserListDrawer />
            :
            <UserList />
          }
          <Box sx={{width: isMobile?'95vw':'60vw', minWidth: isMobile?'90vw':'350px', display: 'flex', gap: '15px', flexDirection: 'column'}}>
            <Typography variant={isMobile?"subtitle1":"h5"} style={{position: 'sticky', top:  '65px', zIndex: 500, backgroundColor: '#E7EAEA', width: '100%'}}>ALBUMS</Typography>
            <AlbumsList notHome={true} userAlbums={false} albums={true}/>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Albums;