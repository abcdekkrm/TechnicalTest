import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostComments from "./PostComments";
import UserHeader from "./UserHeader";
import CommentsBadge from "./CommentsBadge";
import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

function PostList(props) {
  // const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const [loding, setLoding] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [expandIndex, setExpandIndex] = React.useState(-1);

  useEffect(() => {
    if (props.userPosts) getUserPosts();
    else getPosts();
  });
  async function getUserPosts() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}/posts`)
    .then((response) => response.json())
    .then((json) => {setLoding(false);setPosts(json);});
  }
  async function getPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {setLoding(false);setPosts(json);});
  }
  const handleLike = (id) => {
    if(document.getElementById(id+"like").style.fill !== 'red') {
      document.getElementById(id+"like").style.fill = 'red';
    } else {
      document.getElementById(id+"like").style.fill = null;
    }
  }
  const handleViewPost = (id) => {
    window.location.href = '/posts/'+id;
  }
  const handleExpandClick = (id) => {
    if (expandIndex === id) {
      setExpandIndex(-1);
    } else {
      setExpandIndex(id);
    }
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return(
    <>
      {loding
        ?
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <CircularProgress color="inherit" />
        </div>
        : null
      }
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {posts?.map(
          (post) => {
            return (
            <>
              <Card
                sx={{ 
                  maxWidth: props.notHome?null:400,
                }}
                key={post.id+"post"}
                id={post.id+"post"}
              >
                <UserHeader postTitle={post.title} userId={post.userId} inPost={false}/>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" onClick={() => handleLike(post.id)}>
                    <FavoriteIcon id={post.id+"like"}/>
                  </IconButton>
                  <Button onClick={() => handleViewPost(post.id)}>
                    View Post
                  </Button>
                  <ExpandMore
                    expand={post.id === expandIndex}
                    onClick={() => handleExpandClick(post.id)}
                    aria-expanded={post.id === expandIndex}
                    aria-label="show more"
                  >
                    <CommentsBadge postId={post.id} />
                  </ExpandMore>
                </CardActions>
                <Collapse id={post.id+"collapse"} in={post.id === expandIndex} timeout="auto" unmountOnExit>
                  <PostComments postId={post.id} />
                </Collapse>
              </Card>
            </>);
          }
        )}
      </div>
    </>
  );
}

PostList.propTypes = {
  userId: PropTypes.number,
  notHome: PropTypes.bool,
  userPosts: PropTypes.bool,
}

export default PostList;