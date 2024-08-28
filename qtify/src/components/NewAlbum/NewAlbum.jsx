import React from "react";
import Button from "@mui/material/Button";
import MediaCard from "../Card/Card";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import axios from "axios";
import Styles from "./NewAlbum.module.css";
import { useState,useEffect } from 'react';
const NewAlbum=()=>{
    const [newAlbumData,setNewAlbumData]=useState([]);
    const getCardData=async()=>{
        try{
        const response=await axios.get("https://qtify-backend-labs.crio.do/albums/new");
        console.log(response.data);
        setNewAlbumData(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        getCardData();
    },[]);
return(<>
<div className={Styles.mainSection}>
    <div className={Styles.section}>
    <h3>New Albums</h3>
    <Button sx={{color:"#34C94B"}}>Collapse</Button>
    </div>
    <Box sx={{ flexGrow: 1,paddingLeft:"2rem",paddingRight:"2rem"}}>
      <Grid container spacing={2}>
        {
         newAlbumData.map((album)=>(
         <Grid item xs={12} md={1.7} key={album.id}>
        <MediaCard album={album}/>
        </Grid>
         ))
        }
        </Grid>
        </Box>
</div>
</>)
}
export default NewAlbum;