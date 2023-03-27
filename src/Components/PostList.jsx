import React, {useEffect} from "react";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CommentIcon from '@mui/icons-material/Comment';
import PostComments from "./PostComments";
import UserHeader from "./UserHeader";
import CommentsBadge from "./CommentsBadge";
import { Button } from "@mui/material";
// import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

function PostList(props) {
  // const [users, setUsers] = React.useState([]);
  const [loding, setLoding] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [expandIndex, setExpandIndex] = React.useState(-1);

  // const [isFirst, setIsFirst] = React.useState(true);
  useEffect(() => {
    // getUsers();
    if (props.noyHome) getUserPosts();
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
    // console.log(id);
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
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
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
            // const user = users[post.userId - 1];
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
                    // id={post.id+"expand"}
                    // expand={expanded}
                    expand={post.id === expandIndex}
                    onClick={() => handleExpandClick(post.id)}
                    // aria-expanded={expanded}
                    aria-expanded={post.id === expandIndex}
                    aria-label="show more"
                  >
                    {/* <CommentIcon /> */}
                    <CommentsBadge postId={post.id} />
                  </ExpandMore>
                </CardActions>
                <Collapse id={post.id+"collapse"} in={post.id === expandIndex} timeout="auto" unmountOnExit>
                  <PostComments postId={post.id} />
                </Collapse>
              </Card>
              {/* {props.noyHome
                ?
                <Card
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
                      // id={post.id+"expand"}
                      // expand={expanded}
                      expand={post.id === expandIndex}
                      onClick={() => handleExpandClick(post.id)}
                      // aria-expanded={expanded}
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
                :
                <Card
                  sx={{ 
                    maxWidth: 400,
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
                      // id={post.id+"expand"}
                      // expand={expanded}
                      expand={post.id === expandIndex}
                      onClick={() => handleExpandClick(post.id)}
                      // aria-expanded={expanded}
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
              } */}
            </>);
          }
        )}
      </div>
    </>
  );
}

PostList.propTypes = {
  userId: PropTypes.number,
  noyHome: PropTypes.bool,
}

export default PostList;