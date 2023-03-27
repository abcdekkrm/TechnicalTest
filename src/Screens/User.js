import React from "react";
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import UserCard from "../Components/UserCard"
import { useMediaQuery } from 'react-responsive';
import UserListDrawer from "../Components/UserListDrawer";

function User() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  return(<>
    <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
      <Box sx={{ width: '100vw', paddingTop: '85px', paddingBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {isTablet
          ?
          <UserListDrawer />
          :
          <UserList />
        }
        <UserCard />
      </Box>
    </div>
  </>);
}

export default User;