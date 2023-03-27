import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import PostComments from './PostComments';
// import UserHeader from "./UserHeader";
import CircularProgress from '@mui/material/CircularProgress';

import { Box } from "@mui/material";
import AlbumsList from "./AlbumsList";
import ToDoList from "./ToDoList";
import PostList from "./PostList";


export default function MediaCard() {
  let { id } = useParams();
  const [loding, setLoding] = React.useState(true);
  const [user, setUser] = React.useState('');
  // const [albums, setAlbums] = React.useState([]);
  // const [todos, setTodos] = React.useState([]);
  // const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    getUser();
    // getAlbums();
    // getTodos();
    // getPosts();
  });
  function getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => {setLoding(false);setUser(json);});
  }
  // function getAlbums() {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
  //   .then((response) => response.json())
  //   .then((json) => {setAlbums(json);});
  // }
  // function getTodos() {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  //   .then((response) => response.json())
  //   .then((json) => {setTodos(json);});
  // }
  // function getPosts() {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  //   .then((response) => response.json())
  //   .then((json) => {setPosts(json);});
  // }
  const handleCloseUser = () => {
    window.location.href = '/';
  }
  return (
    <Card sx={{ minWidth: '50vw', maxWidth: 690, height: '100%' }}>
      
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      {loding
        ?
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <CircularProgress color="inherit" />
        </div>
        :
        <>
          <CardHeader
            // avatar={
            //   <Avatar >
            //     hi
            //   </Avatar>
            // }
            action={
              <IconButton aria-label="settings" onClick={handleCloseUser}>
                <CloseIcon />
              </IconButton>
            }
            // titleTypographyProps={{ variant:'h5'}}
            // title={user.username}
            // subheader={props.postTitle}
          />
          {/* <CardContent>
            <Avatar sx={{width: '100px', height: '100px', fontSize: '50px'}}>
                  hi
            </Avatar>
            <Typography gutterBottom variant="h5" component="div">
              Hi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body
            </Typography>
          </CardContent> */}
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <CardContent sx={{minWidth: 'calc(50vw/2)', maxWidth: 'calc(690/2)'}}>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <Avatar sx={{width: '100px', height: '100px', fontSize: '50px'}}>
                  {user.username?Array.from(user.username)[0]:null}
                </Avatar>
                <Typography variant="h5" component="div" sx={{marginBottom: '-15px'}}>
                  {user.username}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {user.name}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
                <EmailIcon />
                <a href={"mailto:"+user.email} style={{textDecoration: 'none', color: '#666666'}}>
                  {": "+user.email}
                </a>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
                <PhoneIphoneIcon />
                <a href={"tel:"+user.phone} style={{textDecoration: 'none', color: '#666666'}}>
                  {": "+user.phone}
                </a>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
                <FindInPageIcon />
                <a href={"//"+user.website} style={{textDecoration: 'none', color: '#666666'}}>
                  {": "+user.website}
                </a>
              </Typography>
              {/* <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
                <HomeIcon />
                {": " + user.address.suite + ",\n" + user.address.street + " Street, " + user.address.city + "\n" + user.address.zipcode}
              </Typography> */}
              <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
                <LocationOnIcon />
                {": " + user.address.suite + ",\n" + user.address.street + " Street, " + user.address.city + "\n" + user.address.zipcode + "\n(" + 
                  user.address.geo.lat + ",\n" + user.address.geo.lng + ")"}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'start', marginTop: '10px', marginBottom: '10px'}}>
                <WorkOutlineIcon /> 
                {":"}
                <Card sx={{ width: '100%', marginLeft: '5px', border: '1px solid gray', boxShadow: 'none' }}>
                  <CardContent>
                    <Typography sx={{ variant: 'h6' }} color="text.secondary" gutterBottom>
                      {user.company.name}
                    </Typography>
                    <Typography variant="body2">
                      {user.company.catchPhrase}
                      <br />
                      {user.company.bs}
                    </Typography>
                  </CardContent>
                </Card>
              </Typography>
              <Divider />
              <Box sx={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                  <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center', marginTop: '10px', gap: '5px'}}>
                    <PhotoCameraBackIcon />
                    Album
                  </Typography>
                  <AlbumsList userId={id} inUser={true} />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                  <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center', marginTop: '10px', gap: '5px'}}>
                    <AssignmentIcon />
                    TODO
                  </Typography>
                  <ToDoList userId={id} inUser={true} />
                </Box>
              </Box>
              <Divider />
              <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <Typography variant="body1" color="text.secondary" sx={{display: 'flex', alignItems: 'center', marginTop: '10px', gap: '5px'}}>
                  <NewspaperIcon />
                  User's Post
                </Typography>
                <PostList userId={id} inUser={true}/>
              </Box>
            </CardContent>
          </Box>
          {/* <CardActions>
            <Button size="small">
             email
            </Button>
            <Button size="small">
             call
            </Button>
          </CardActions> */}
        </>
      }
      {/* <UserHeader userId={post.userId} postTitle={null} inPost={true}/> */}
      
      {/* <Divider variant='middle'/>
      <PostComments postId={id}/> */}
    </Card>
  );
}