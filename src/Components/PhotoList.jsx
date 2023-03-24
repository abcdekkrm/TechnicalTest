import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { Box } from "@material-ui/core";
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import Popover from '@mui/material/Popover';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function PhotoList() {
  let { id } = useParams();
  const height = window.document.body.offsetHeight;
  const [images, setImages] = React.useState([]);
  const [viewImg, setViewImg] = React.useState('');
  const [view, setView] = React.useState(false);
  useEffect(() => {
    getImages();
  });
  function getImages() {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then((response) => response.json())
    .then((json) => {setImages(json);});
  }
  const handleMouseEnter = (id) => {
    document.getElementById(id+"img").style.cursor = 'pointer';
 };
 
  const handleMouseLeave = (id) => {
    document.getElementById(id+"img").style.cursor = null;
  };
  const handleViewImg = (url) => {
    // console.log(window.document.body.offsetHeight);
    setView(true);
    setViewImg(url);
  }
  const closePhoto = () => {
    setView(false);
    setViewImg('');
  }
  return(
    <>
        {view
        ?
        // <Box sx={{ width: '1000px', height: '1000px', position: 'fixed', zIndex: '1000', backgroundColor: 'black'}}>
        //   <Typography>Hi</Typography>
        // </Box>
        <>
          <div 
            onClick={closePhoto}
            style={{width: '100vw', height: height, backgroundColor: 'black', opacity: '0.5', position: 'absolute', zIndex: 900, top: '0' }} >
          </div>
          <Box sx={{ width: '100vw', height: height, position: 'absolute', zIndex: 1000 }}>
            <img
                src={viewImg}
                loading="lazy"
                style={{ position: 'absolute', zIndex: 1000 }}
            />
          </Box>
        </>
        : null
      }
      {/* <div style={{width: '100vw', height: '100vh', backgroundColor: 'blue'}}></div> */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant="h5">Album {id}</Typography>
        <ImageList sx={{ width: 690, height: '100vh' }} cols={3} rowHeight={230}>
          {images.map((image) => {
            return(
              <>
                <ImageListItem key={image.id+"img"} id={image.id+"img"} 
                  sx={{'&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },}}>
                  <img
                    src={image.thumbnailUrl}
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={image.title}
                    loading="lazy"
                    onMouseEnter={() => handleMouseEnter(image.id)}
                    onMouseLeave={() => handleMouseLeave(image.id)}
                    onClick={() => handleViewImg(image.url)}
                  />
                  <ImageListItemBar
                    title={image.title}
                    // subtitle={item.author}
                    // actionIcon={
                    //   <IconButton
                    //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    //     aria-label={`info about ${item.title}`}
                    //   >
                    //     <InfoIcon />
                    //   </IconButton>
                    // }
                  />
                </ImageListItem>
              </>
            );
          })}
        </ImageList>
      </Box>
      {/* {view
        ?
        // <Box sx={{ width: '1000px', height: '1000px', position: 'fixed', zIndex: '1000', backgroundColor: 'black'}}>
        //   <Typography>Hi</Typography>
        // </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            zIndex: '1000',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        : null
      } */}
    </>
  );
}

export default PhotoList;