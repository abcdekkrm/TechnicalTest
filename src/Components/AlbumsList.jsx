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
    if (props.userAlbums) {
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
      <List sx={{ width: '100%', height: props.albums?'100%':'calc((100vh - 150px)/2.5)', borderRadius: '5px', maxWidth: props.notHome?1000:300, bgcolor: 'background.paper', overflow: props.notHome?null:'scroll', position: props.notHome?null:'sticky', top: props.notHome?null:'calc((100vh - 150px)/2.5 + 90px)' }}>
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
                <Avatar aria-label="recipe">
                  <PhotoCameraBackIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={album.title}
                secondary={
                  props.userAlbums?null
                  :
                  <React.Fragment>
                    <Owner userId={album.userId}/>
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}

AlbumsList.propTypes = {
  userId: PropTypes.number,
  notHome: PropTypes.bool,
  albums: PropTypes.bool,
  userAlbums: PropTypes.bool,
}

export default AlbumsList;