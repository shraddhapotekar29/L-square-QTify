import React from "react";
import Button from "@mui/material/Button";
import MediaCard from "../Card/Card";
import Grid from '@mui/material/Grid';
import Styles from "./Section.module.css";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";
import Divider from '@mui/material/Divider';
import axios from "axios";
import { useState,useEffect } from 'react';
const Section=({name,url,song})=>{
    const [albumData,setAlbumData]=useState([]);
    const [collapseBtn,setCollapseBtn]=useState(true);
    const getCardData=async()=>{
        try{
        const response=await axios.get(url);
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
    {song?<Divider sx={{backgroundColor:"#34C94B",marginTop:"3rem"}}/>:null}
    <div className={Styles.section}>
    <h3>{name}</h3>
    {!song?(collapseBtn?
    <Button sx={{color:"#34C94B", textTransform: "none",fontSize:"16px"}} onClick={()=>setCollapseBtn(false)} >Show All</Button>:
    <Button sx={{color:"#34C94B", textTransform: "none",fontSize:"16px"}} onClick={()=>{setCollapseBtn(true)}}>Collapse</Button>):null} 
    </div>

    {!song?(collapseBtn?(<Carousel albumData={albumData}/>):
    (<Box sx={{ flexGrow: 1,paddingLeft:"5rem",paddingRight:"4rem"}}>
      <Grid container spacing={2}>
        {
         albumData.map((album)=>(
         <Grid item xs={6} md={1.7} key={album.id}>
        <MediaCard album={album}/>
        </Grid>
         ))
        } 
        </Grid>
        </Box>)):null}
</div>
</>)
}
export default Section;