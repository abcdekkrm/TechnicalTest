import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Owner(props) {
  const [user, setUser] = React.useState('');
  useEffect(() => {
    getUser();
  });
  async function getUser() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
    .then((response) => response.json())
    .then((json) => {setUser(json)});
    // console.log(user);
  }
  return(
    <>
      {/* {user.username
        ?
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="whitesmike"
        >
          {user.username}
        </Typography>
        : null
      } */}
      <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="whitesmike"
        >
          {user.username}
        </Typography>
    </>
  );
}
  
  Owner.propTypes = {
    userId: PropTypes.number,
  }
  
  export default Owner;