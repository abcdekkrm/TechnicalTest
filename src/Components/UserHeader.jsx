import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function UserHeader(props) {
  const [user, setUser] = React.useState('');
  useEffect(() => {
    getUser();
  });
  async function getUser() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
    .then((response) => response.json())
    .then((json) => {setUser(json);});
  }
  const handleClosePost = () => {
    window.location.href = '/';
  }
  const handleViewUser = () => {
    window.location.href = `/users/${props.userId}`;
  }
  return(
    <>
      {props.inPost
        ?
        <CardHeader
          avatar={
            <div onClick={handleViewUser}>
              <Avatar sx={{ bgcolor: red[500], '&:hover': {cursor: 'pointer'} }} aria-label="user">
                {user.username?Array.from(user.username)[0]:null}
              </Avatar>
            </div>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClosePost}>
              <CloseIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant:'h6'}}
          title={user.username}
          subheader={props.postTitle}
        />
        :
        <CardHeader
          avatar={
            <div onClick={handleViewUser}>
              <Avatar sx={{ bgcolor: red[500], '&:hover': {cursor: 'pointer'} }} aria-label="user">
                {user.username?Array.from(user.username)[0]:null}
              </Avatar>
            </div>
          }
          title={props.postTitle}
          subheader={user.username}
        />
      }
    </>
  );
}

UserHeader.propTypes = {
  postTitle: PropTypes.string,
  userId: PropTypes.number,
  inPost: PropTypes.bool,
}

export default UserHeader;