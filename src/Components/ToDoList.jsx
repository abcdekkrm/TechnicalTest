import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Owner from "./Owner";
import PropTypes from 'prop-types';

function ToDoList(props) {
  const [toDos, setToDos] = React.useState([]);
  useEffect(() => {
    if (props.inUser) getUserToDos();
    else getToDos();
  });
  async function getToDos() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {setToDos(json);});
  }
  async function getUserToDos() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}/todos`)
    .then((response) => response.json())
    .then((json) => {setToDos(json);});
  }
  return(
    <>
      {props.inUser
        ?
        <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: 1000, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: '70px' }}>
          {toDos?.map((todo) => (
            <>
              {(todo.id !== 1)? <Divider variant="inset" component="li" />:null}
              <ListItem
                alignItems="flex-start"
                key={todo.id+"todo"}
                id={todo.id+"todo"}
              >
                <ListItemAvatar>
                  <Avatar aria-label="recipe">
                    <AssignmentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={todo.title}
                  secondary={
                    <React.Fragment>
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
        :
        <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: 300, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: '70px' }}>
          {toDos?.map((todo) => (
            <>
              {(todo.id !== 1)? <Divider variant="inset" component="li" />:null}
              <ListItem
                alignItems="flex-start"
                key={todo.id+"todo"}
                id={todo.id+"todo"}
              >
                <ListItemAvatar>
                  <Avatar aria-label="recipe">
                    <AssignmentIcon />
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
      }
    </>
  );
}

ToDoList.propTypes = {
  userId: PropTypes.number,
  inUser: PropTypes.bool,
}

export default ToDoList;