import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import CommentIcon from '@mui/icons-material/Comment';
import Badge from '@mui/material/Badge';

function CommentsBadge(props) {
  const [comments, setComments] = React.useState([]);
  useEffect(() => {
    getComments();
  });
  async function getComments() {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`)
    .then((response) => response.json())
    .then((json) => {setComments(json);});
    console.log(comments);
  }
  return(
    <>
      <Badge badgeContent={comments.length} color="primary">
        <CommentIcon sx={{ fill: '#757576' }}/>
      </Badge>
    </>
  );
}

CommentsBadge.propTypes = {
  postId: PropTypes.number,
}

export default CommentsBadge;