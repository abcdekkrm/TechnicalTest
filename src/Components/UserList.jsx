import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

function UserList() {
  // const colors = [];
  // for (var i = 0; i < 26; i++) {
  //   colors.push(Math.floor(Math.random()*16777215).toString(16));
  // }
  const [users, setUsers] = React.useState([]);
  // const [isFirst, setIsFirst] = React.useState(true);
  useEffect(() => {
    getUsers();
    // console.log(colors);
  });
  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {setUsers(json);});
  }
  const getUser = (id) => {
    console.log(id);
  }
  const handleMouseEnter = (id) => {
    document.getElementById(id+"user").style.backgroundColor = 'gray';
    document.getElementById(id+"user").style.color = 'white';
    document.getElementById(id+"user").style.cursor = 'pointer';
 };
 
  const handleMouseLeave = (id) => {
    document.getElementById(id+"user").style.backgroundColor = null;
    document.getElementById(id+"user").style.color = null;
    document.getElementById(id+"user").style.cursor = null;
  };
  // const randomColors = () => {
  //   for (int = 0; i < 26; i++) {
  //     colors.push(Math.floor(Math.random()*16777215).toString(16));
  //   }
  // }
  // const colours = () ;
  // const getColour = () => colours[Math.floor(Math.random() * colours.length)];
  // function stringToHslColor(name) {

  // }
  return (
    <List sx={{ width: '100%', height: 'calc(100vh - 150px)', borderRadius: '5px', maxWidth: 300, bgcolor: 'background.paper', overflow: 'scroll', marginLeft: '20px' }}>
      {users?.map((user) => (
        // if (user.id !== 1) {
        //   setIsFirst(false);
        // }
        <>
          {(user.id !== 1)? <Divider variant="inset" component="li" />:null}
          <ListItem
            alignItems="flex-start"
            key={user.id+"user"}
            id={user.id+"user"}
            onMouseEnter={() => handleMouseEnter(user.id)}
            onMouseLeave={() => handleMouseLeave(user.id)}
            onClick={() => getUser(user.id)}
          >
            <ListItemAvatar>
              {/* <Avatar sx ={{backgroundColor: red[500]}}>{Array.from(user.username)[0]}</Avatar> */}
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
                    // component="span"
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