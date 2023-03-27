import React from "react";
import Box from '@mui/material/Box';
import UserList from "../Components/UserList";
import ToDoList from "../Components/ToDoList";
import { Typography } from "@material-ui/core";



function ToDos() {
  return(
    <>
      <div style={{width: '100vw', minHeight: '100vh', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <Box sx={{ width: '100vw', paddingTop: '85px', paddingBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <UserList />
          <Box sx={{width: '60vw', minWidth: '350px', display: 'flex', gap: '15px', flexDirection: 'column'}}>
            <Typography variant="h5" style={{position: 'sticky', top:  '65px', zIndex: 500, backgroundColor: '#E7EAEA', width: '100%'}}>TODO</Typography>
            <ToDoList notHome={true} toDos={true}/>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ToDos;