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
import CircularProgress from '@mui/material/CircularProgress';

function ToDoList(props) {
  const [toDos, setToDos] = React.useState([]);
  const [loding, setLoding] = React.useState(true);
  useEffect(() => {
    if (props.userToDo) getUserToDos();
    else getToDos();
  });
  async function getToDos() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {setLoding(false);setToDos(json);});
  }
  async function getUserToDos() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}/todos`)
    .then((response) => response.json())
    .then((json) => {setLoding(false);setToDos(json);});
  }
  return(
    <>
      <List sx={{ width: '100%', height: props.toDos?'100%':'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: props.notHome?1000:300, bgcolor: 'background.paper', overflow: props.notHome?null:'scroll', position: props.notHome?null:'sticky', top: props.notHome?null:'70px' }}>
        {loding
          ?
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <CircularProgress color="inherit" />
          </div>
          : null
        }
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
                    {props.userToDo?null
                      : <Owner userId={todo.userId} />
                    }
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

ToDoList.propTypes = {
  userId: PropTypes.number,
  notHome: PropTypes.bool,
  userToDo: PropTypes.bool,
  toDos: PropTypes.bool,
}

export default ToDoList;