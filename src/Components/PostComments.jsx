import React, {useEffect} from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

function PostComments(props) {
  const [comments, setComments] = React.useState([]);
  useEffect(() => {
    getComments();
  });
  function getComments() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`)
    .then((response) => response.json())
    .then((json) => {setComments(json);});
  }
  return (
    <>
      <CardContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {comments?.map((comment) => {
            return(
              <>
                {(comment.id !== 1)?<Divider variant="inset" component="li" />:null}
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                      {Array.from(comment.email)[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {comment.email}
                        </Typography>
                        <Typography
                          // component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {comment.body}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </>
            );
          })}
        </List>
      </CardContent>
    </>
  );
}

PostComments.propTypes = {
  postId: PropTypes.number,
}

export default PostComments;