import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PostComments from './PostComments';
import UserHeader from "./UserHeader";
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from 'react-responsive';

export default function MediaCard() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  let { id } = useParams();
  const [loding, setLoding] = React.useState(true);
  const [post, setPost] = React.useState('');
  useEffect(() => {
    getPost();
  });
  function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {setLoding(false);setPost(json);});
  }
  return (
    <Card sx={{ maxWidth: isTablet?450:690, height: '100%' }}>
      {loding
        ?
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <CircularProgress color="inherit" />
        </div>
        : null
      }
      <UserHeader userId={post.userId} postTitle={null} inPost={true}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <Divider variant='middle'/>
      <PostComments postId={id} />
    </Card>
  );
}