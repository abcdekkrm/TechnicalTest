import React from "react";
import { useMediaQuery } from 'react-responsive';
import AlbumsList from "../Components/AlbumsList";
import PostList from "../Components/PostList";
import ToDoList from "../Components/ToDoList";
import UserList from "../Components/UserList";
import UserListDrawer from "../Components/UserListDrawer";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return(
    <>
      <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <div style={{ paddingTop: '85px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {isTablet
            ?
            isMobile ? 
            <Box sx={{width: isMobile?'95vw':'60vw', minWidth: isMobile?'90vw':'350px', display: 'flex', gap: '15px', flexDirection: 'column'}}>
              <Typography variant={isMobile?"subtitle1":"h5"} style={{position: 'sticky', top:  '65px', zIndex: 500, backgroundColor: '#E7EAEA', width: '100%'}}>USERS</Typography>
              <UserList />
            </Box>
            :
            <UserListDrawer />
            :
            <UserList />
          }
          {isMobile?null
          :<PostList notHome={false} />
          }
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {isMobile ? null
              :
              <ToDoList notHome={false}/>
            }
            {isMobile
              ?
              // <Box sx={{width: isMobile?'95vw':'60vw', minWidth: isMobile?'90vw':'350px', display: 'flex', gap: '15px', flexDirection: 'column'}}>
              //   <AlbumsList notHome={true} userAlbums={false} albums={true}/>
              // </Box>
              null
              : <AlbumsList notHome={false} userAlbums={false} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;