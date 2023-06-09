import React from "react";
import { useMediaQuery } from 'react-responsive';
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import PostList from "../Components/PostList";
import UserListDrawer from "../Components/UserListDrawer";


function Posts() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  return(
    <>
      <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <Box sx={{ width: '100vw', paddingTop: '85px', paddingBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {isTablet
            ?
            isMobile ? null
            :
            <UserListDrawer />
            :
            <UserList />
          }
          <Box sx={{width: isMobile?'95vw':'60vw', minWidth: isMobile?'90vw':'350px'}}>
            <PostList notHome={true} userPosts={false} Posts={true}/>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Posts;