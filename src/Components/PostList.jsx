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

function PostList() {
  // const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [expandIndex, setExpandIndex] = React.useState(-1);

  // const [isFirst, setIsFirst] = React.useState(true);
  useEffect(() => {
    // getUsers();
    getPosts();
  });
  // async function getUsers() {
  //   await fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((json) => {setUsers(json);});
  // }
  async function getPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {setPosts(json);});
  }
//   const handleMouseEnter = (id) => {
//     // document.getElementById(id+"user").style.backgroundColor = 'gray';
//     // document.getElementById(id+"user").style.color = 'white';
//     document.getElementById(id+"post").style.cursor = 'pointer';
//  };
 
//   const handleMouseLeave = (id) => {
//     // document.getElementById(id+"user").style.backgroundColor = null;
//     // document.getElementById(id+"user").style.color = null;
//     document.getElementById(id+"post").style.cursor = null;
//   };
  // function getUser(id) {
  //   let name = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then((response) => response.json())
  //   .then((json) => {return json['name']});
  //   console.log(name);
  //   return id;
  // }
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
    // setExpanded(!expanded);
    // document.getElementById(id+"expand").expand = !document.getElementById(id+"expand").expand;
    // document.getElementById(id+"expand").ariaExpanded = !document.getElementById(id+"expand").ariaExpanded;
    // document.getElementById(id+"collapse").in = !document.getElementById(id+"collapse").in;
    // console.log(document.getElementById(id+"collapse"));
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
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {posts?.map(
          (post) => {
            // const user = users[post.userId - 1];
            return (
            <>
              <Card
                sx={{ 
                  maxWidth: 400,
                  '&:hover': {
                    cursor: 'pointer',
                  }
                }}
                key={post.id+"post"}
                id={post.id+"post"}
                // onMouseEnter={() => handleMouseEnter(post.id)}
                // onMouseLeave={() => handleMouseLeave(post.id)}
              >
                {/* <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {Array.from(user.username)[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  // titleTypographyProps={{variant:'h6' }}
                  title={post.title}
                  subheader={user.username}
                /> */}
                <UserHeader postTitle={post.title} userId={post.userId} inPost={false}/>
                {/* <CardMedia
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Paella dish"
                /> */}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" onClick={() => handleLike(post.id)}>
                    <FavoriteIcon id={post.id+"like"}/>
                  </IconButton>
                  <Button onClick={() => handleViewPost(post.id)}>View Post</Button>
                  {/* <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton> */}
                  {/* <Badge badgeContent={4} color="primary">
                    <CommentIcon sx={{ fill: '#757576' }}/>
                  </Badge> */}
                  {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore> */}
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
            </>);
          }
        )}
      </div>
    </>
  );
}

export default PostList;