import React from "react";
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import UserCard from "../Components/UserCard"

function User() {
  return(<>
    <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
      <Box sx={{ width: '100vw', paddingTop: '85px', paddingBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <UserList />
        <UserCard />
      </Box>
    </div>
  </>);
}

export default User;