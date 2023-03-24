import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Owner from "./Owner";

function ToDoList() {
  const [toDos, setToDos] = React.useState([]);
  useEffect(() => {
    getToDos();
  });
  async function getToDos() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {setToDos(json);});
  }
  return(
    <>
      <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: 300, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: '70px' }}>
        {toDos?.map((todo) => (
          // if (todo.id !== 1) {
          //   setIsFirst(false);
          // }
          <>
            {(todo.id !== 1)? <Divider variant="inset" component="li" />:null}
            <ListItem
              alignItems="flex-start"
              key={todo.id+"todo"}
              id={todo.id+"todo"}
              // onMouseEnter={() => handleMouseEnter(todo.id)}
              // onMouseLeave={() => handleMouseLeave(todo.id)}
              // onClick={() => gettodo(todo.id)}
            >
              <ListItemAvatar>
                {/* <Avatar sx ={{backgroundColor: red[500]}}>{Array.from(todo.todoname)[0]}</Avatar> */}
                <Avatar aria-label="recipe">
                  {/* {Array.from(todo.todoname)[0]} */}
                  <PendingActionsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={todo.title}
                secondary={
                  <React.Fragment>
                    <Owner userId={todo.userId} />
                    {todo.completed
                      ?
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="#0152F0"
                      >
                        {'\n- done'}
                      </Typography>
                      :
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="#F03513"
                      >
                        {'\n- not done'}
                      </Typography>
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}

export default ToDoList;