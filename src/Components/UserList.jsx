import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from 'react-responsive';

function UserList() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [users, setUsers] = React.useState([]);
  const [loding, setLoding] = React.useState(true);
  useEffect(() => {
    getUsers();
  });
  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {setLoding(false);setUsers(json);});
  }
  const getUser = (id) => {
    window.location.href = '/users/'+id;
  }
  return (
    <List sx={{ width: '100%', height: isMobile?'100%':'calc(100vh/1.3)', borderRadius: '5px', maxWidth: isMobile?null:300, bgcolor: 'background.paper', overflow: isMobile?null:'scroll', position: 'sticky', top: '70px' }}>
      {loding
        ?
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <CircularProgress color="inherit" />
        </div>
        : null
      }
      {users?.map((user) => (
        <>
          {(user.id !== 1)? <Divider variant="inset" component="li" />:null}
          <ListItem
            alignItems="flex-start"
            key={user.id+"user"}
            id={user.id+"user"}
            onClick={() => getUser(user.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'gray',
                color: 'white',
                cursor: 'pointer',
              }
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
                {Array.from(user.username)[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.username}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                  >
                    {user.email}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </>
      ))}
    </List>
  );
}

export default UserList;