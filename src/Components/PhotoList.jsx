import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { Box } from "@material-ui/core";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from 'react-responsive';

function PhotoList() {
  let { id } = useParams();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const height = window.document.body.offsetHeight;
  const [loding, setLoding] = React.useState(true);
  const [images, setImages] = React.useState([]);
  const [viewImg, setViewImg] = React.useState('');
  const [view, setView] = React.useState(false);
  useEffect(() => {
    getImages();
  });
  function getImages() {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then((response) => response.json())
    .then((json) => {setLoding(false);setImages(json);});
  }
  const handleMouseEnter = (id) => {
    document.getElementById(id+"img").style.cursor = 'pointer';
 };
 
  const handleMouseLeave = (id) => {
    document.getElementById(id+"img").style.cursor = null;
  };
  const handleViewImg = (url) => {
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
        <>
          <div 
            onClick={closePhoto}
            style={{width: '100vw', height: height, backgroundColor: 'black', opacity: '0.5', position: 'absolute', zIndex: 900, top: '0' }} >
          </div>
          <Box sx={{ width: '100vw', height: height, position: 'absolute', zIndex: 1000 }}>
            <div style={{width: '100vw', overflow: 'scroll'}}>
            <img
                src={viewImg}
                alt="thumbnail"
                loading="lazy"
                style={{ position: 'absolute', zIndex: 1000, width: '100vw', overflow: 'scroll' }}
            />
            </div>
          </Box>
        </>
        : null
      }
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant="h5">Album {id}</Typography>
        <ImageList sx={{ width: isTablet?isMobile?300:450:690, height: '100vh' }} cols={isMobile?2:3} rowHeight={isTablet?150:230}>
          {loding
            ?
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <CircularProgress color="inherit" />
            </div>
            : null
          }
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
                    alt={image.title}
                    loading="lazy"
                    onMouseEnter={() => handleMouseEnter(image.id)}
                    onMouseLeave={() => handleMouseLeave(image.id)}
                    onClick={() => handleViewImg(image.url)}
                  />
                  <ImageListItemBar
                    title={image.title}
                  />
                </ImageListItem>
              </>
            );
          })}
        </ImageList>
      </Box>
    </>
  );
}

export default PhotoList;