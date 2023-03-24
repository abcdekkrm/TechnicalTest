import React, {useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Owner from "./Owner";

function AlbumsList() {
  const [albums, setAlbums] = React.useState([]);
  useEffect(() => {
    getAlbums();
  });
  async function getAlbums() {
    await fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((json) => {setAlbums(json);});
  }
  function lookAlbum(id) {
    window.location.href = '/albums/'+id;
  }
  const handleMouseEnter = (id) => {
    document.getElementById(id+"album").style.cursor = 'pointer';
 };
 
  const handleMouseLeave = (id) => {
    document.getElementById(id+"album").style.cursor = null;
  };
  return(
    <>
      <List sx={{ width: '100%', height: 'calc((100vh - 150px)/2)', borderRadius: '5px', maxWidth: 300, bgcolor: 'background.paper', overflow: 'scroll', position: 'sticky', top: 'calc((100vh - 150px)/2.5 + 90px)' }}>
        {albums?.map((album) => (
          // if (Albums.id !== 1) {
          //   setIsFirst(false);
          // }
          <>
            {(album.id !== 1)? <Divider variant="inset" component="li" />:null}
            <ListItem
              alignItems="flex-start"
              key={album.id+"album"}
              id={album.id+"album"}
              onMouseEnter={() => handleMouseEnter(album.id)}
              onMouseLeave={() => handleMouseLeave(album.id)}
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
                    {/* {album.completed
                      ?
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        done
                      </Typography>
                      :
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="red"
                      >
                        not done
                      </Typography>
                    } */}
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

export default AlbumsList;