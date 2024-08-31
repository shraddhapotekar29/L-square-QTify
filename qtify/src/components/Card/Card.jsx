import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";
import { Typography } from '@mui/material';



const MediaCard=({album,song})=> {
  return (
    <div className={styles.cardWrapper}>
    <Card className={styles.mediaCard}>
      <CardMedia
        sx={{ height: 170 }}
        image={album.image}
        title={album.title}
      />
     <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
          {song?<Chip label={`${album.likes} likes`} sx={{ backgroundColor: '#121212', color: '#FFFFFF',height:'23px',position:'absolute',marginRight:'3rem' }}  />:
      <Chip label={`${album.follows} follows`} sx={{ backgroundColor: '#121212', color: '#FFFFFF',height:'23px',position:'absolute',marginRight:'3rem' }}  />}
      </CardContent>
    </Card>
    <div><Typography>{album.title}</Typography></div>
 </div>
  );
 
}
export default MediaCard;