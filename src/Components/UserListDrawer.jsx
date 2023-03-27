import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import UserList from "./UserList";

function UserListDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (action) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(action);
  };
  return(
    <>
      <div>
        <React.Fragment key="left">
          <Button onClick={toggleDrawer(true)} variant="contained" startIcon={<PersonIcon /> } sx={{position: 'sticky', top: '70px', fontSize: '10px'}} >
            USERS LIST
          </Button>
          <Drawer
          anchor='left'
          open={state}
          onClose={toggleDrawer(false)}
        >
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'start'}}>
            <Typography variant="subtitle1" sx={{marginBottom: '-15px', marginTop: '20px', marginLeft: '15px'}}>USERS</Typography>
            <UserList />
          </Box>
        </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}

export default UserListDrawer;