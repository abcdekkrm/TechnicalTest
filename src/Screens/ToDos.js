import React from "react";
import { useMediaQuery } from 'react-responsive';
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import ToDoList from "../Components/ToDoList";
import { Typography } from "@material-ui/core";
import UserListDrawer from "../Components/UserListDrawer";



function ToDos() {
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
          <Box sx={{width: isMobile?'95vw':'60vw', minWidth: isMobile?'90vw':'350px', display: 'flex', gap: '15px', flexDirection: 'column'}}>
            <Typography variant={isMobile?"subtitle1":"h5"} style={{position: 'sticky', top:  '65px', zIndex: 500, backgroundColor: '#E7EAEA', width: '100%'}}>TODO</Typography>
            <ToDoList notHome={true} toDos={true}/>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ToDos;