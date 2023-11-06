import InfoIcon from '@mui/icons-material/Info'
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { Loader } from '../../components/Loader/Loader.jsx'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPhotos} from "../../store/slices/photoSlice.js";

const Photos = () => {
    const {photos, loading} = useSelector((state) => state.photo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos());
    }, [])

    if(loading){
        return <h2>Loading...</h2>;
    }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Photos
      </Typography>
      <Grid container spacing={2}>
          <ImageList cols={4} gap={16}>
            {photos.map((photo) => (
              <ImageListItem key={photo.id}>
                <img src={photo.url} alt={photo.title} width={280} height={280} />
                <ImageListItemBar
                  title={photo.title}
                  actionIcon={
                    <IconButton onClick={() => {}}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
      </Grid>
    </>
  )
}

export { Photos }
