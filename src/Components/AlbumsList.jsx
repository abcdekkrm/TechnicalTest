import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Owner from "./Owner";
import PropTypes from 'prop-types';

function AlbumsList(props) {
  const [albums, setAlbums] = React.useState([]);
  useEffect(() => {
    if (props.inUser) {
      getUserAlbums();
    } else {
      getAlbums();
    }
  });
  async function getAlbums() {
    await fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((json) => {setAlbums(json);});
  }
  async function getUserAlbums() {
    await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}/albums`)
    .then((response) => response.json())
    .then((json) => {setAlbums(json);});
  }
  function lookAlbum(id) {
    window.location.href = '/albums/'+id;
  }
  return(
    <>
      {props.inUser
        ?
        <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: 1000, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: 'calc((100vh - 150px)/2.5 + 90px)' }}>
          {albums?.map((album) => (
            <>
              {(album.id !== 1)? <Divider variant="inset" component="li" />:null}
              <ListItem
                alignItems="flex-start"
                key={album.id+"album"}
                id={album.id+"album"}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  }
                }}
                onClick={() => lookAlbum(album.id)}
              >
                <ListItemAvatar>
                  {/* <Avatar sx ={{backgroundColor: red[500]}}>{Array.from(Albums.Albumsname)[0]}</Avatar> */}
                  <Avatar aria-label="recipe">
                    {/* {Array.from(Albums.Albumsname)[0]} */}
                    <PhotoCameraBackIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={album.title}
                />
              </ListItem>
            </>
          ))}
        </List>
        :
        <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2)', borderRadius: '5px', maxWidth: 300, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: 'calc((100vh - 150px)/2.5 + 90px)' }}>
          {albums?.map((album) => (
            <>
              {(album.id !== 1)? <Divider variant="inset" component="li" />:null}
              <ListItem
                alignItems="flex-start"
                key={album.id+"album"}
                id={album.id+"album"}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  }
                }}
                onClick={() => lookAlbum(album.id)}
              >
                <ListItemAvatar>
                  {/* <Avatar sx ={{backgroundColor: red[500]}}>{Array.from(Albums.Albumsname)[0]}</Avatar> */}
                  <Avatar aria-label="recipe">
                    {/* {Array.from(Albums.Albumsname)[0]} */}
                    <PhotoCameraBackIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={album.title}
                  secondary={
                    <React.Fragment>
                      <Owner userId={album.userId}/>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </>
          ))}
        </List>
      }
    </>
  );
}

AlbumsList.propTypes = {
  userId: PropTypes.number,
  inUser: PropTypes.bool,
}

export default AlbumsList;