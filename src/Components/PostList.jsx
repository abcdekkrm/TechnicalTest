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
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import PostComments from "./PostComments";
// import Badge from '@mui/material/Badge';

function PostList() {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [expandIndex, setExpandIndex] = React.useState(-1);

  // const [isFirst, setIsFirst] = React.useState(true);
  useEffect(() => {
    getUsers();
    getPosts();
  });
  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {setPosts(json);});
  }
  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {setUsers(json);});
  }
  const handleMouseEnter = (id) => {
    // document.getElementById(id+"user").style.backgroundColor = 'gray';
    // document.getElementById(id+"user").style.color = 'white';
    document.getElementById(id+"post").style.cursor = 'pointer';
 };
 
  const handleMouseLeave = (id) => {
    // document.getElementById(id+"user").style.backgroundColor = null;
    // document.getElementById(id+"user").style.color = null;
    document.getElementById(id+"post").style.cursor = null;
  };
  // function getUser(id) {
  //   let name = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then((response) => response.json())
  //   .then((json) => {return json['name']});
  //   console.log(name);
  //   return id;
  // }

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
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return(
    <>
      {/* <List sx={{ width: '100%', borderRadius: '5px', maxWidth: '500px', bgcolor: 'background.paper', overflow: 'scroll', marginLeft: '20px' }}>
        {posts?.map((post) => {
          // if (user.id !== 1) {
          //   setIsFirst(false);
          // }
          // const [user, setUser] = React.useState('');
          // function getUser(id) {
          //   // let name = null;
          //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          //   .then((response) => response.json())
          //   .then((json) => {setUser(json['name'])});
          // }
          return (
            <>
              {(post.id !== 1)? <Divider variant="inset" component="li" />:null}
              <ListItem
                alignItems="flex-start"
                key={post.id+"post"}
                id={post.id+"post"}
                sx={{width: '500px'}}
                // onMouseEnter={() => handleMouseEnter(user.id)}
                // onMouseLeave={() => handleMouseLeave(user.id)}
                // onClick={() => getUser(user.id)}
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{fontSize: '18px'}} 
                  primary={post.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {getUser(post.userId)}
                      </Typography>
                      <Typography
                        // component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {post.body}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </>
          );
        })}
      </List> */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {posts?.map(
          (post) => {
            const user = users[post.userId - 1];
            return (
            <>
              <Card
                sx={{ maxWidth: 400 }}
                key={post.id+"post"}
                id={post.id+"post"}
                onMouseEnter={() => handleMouseEnter(post.id)}
                onMouseLeave={() => handleMouseLeave(post.id)}
              >
                <CardHeader
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
                />
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
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
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
                    <CommentIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse id={post.id+"collapse"} in={post.id === expandIndex} timeout="auto" unmountOnExit>
                  <PostComments postId={post.id} />
                  {/* <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent> */}
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