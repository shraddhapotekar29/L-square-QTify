import React from "react";
import Button from "@mui/material/Button";
import MediaCard from "../Card/Card";
import Grid from '@mui/material/Grid';
import Styles from "./Section.module.css";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState,useEffect } from 'react';
const Section=()=>{
    const [albumData,setAlbumData]=useState([]);
    const getCardData=async()=>{
        try{
        const response=await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        console.log(response.data);
        setAlbumData(response.data);
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
    <h3>Top Albums</h3>
    <Button sx={{color:"#34C94B"}}>Collapse</Button>
    </div>
    <Box sx={{ flexGrow: 1,paddingLeft:"2rem",paddingRight:"2rem"}}>
      <Grid container spacing={2}>
        {
         albumData.map((album)=>(
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
export default Section;