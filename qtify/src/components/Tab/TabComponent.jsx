import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import styles from "./TabComponent.module.css";

const TabComponent=()=>{
    const[value,setValue]=useState(0);
    const[genres,setGenres]=useState([]);
    const[songs,setSongs]=useState([]);
    const[filteredSongs,SetFilteredSongs]=useState([]);

      const genreData=async()=>{
        try{
          const response=await axios.get("https://qtify-backend-labs.crio.do/genres");
          console.log("genre",response.data);
          setGenres(response.data.data);
        }
        catch(err)
        {
            return err;
        }
      }

      const songsData=async()=>{
        try{
        const response=await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs(response.data);
        console.log("songsData",response.data);
        }
        catch(err)
        {
            return err;
        }
      }

     
      useEffect(()=>{
        genreData();
        songsData();
      },[]);

      const handleChange=(e,val)=>{
        setValue(val);
        console.log(val);
        if(val===1)
        {
          const filteredData=songs.filter((song)=>song.genre.label==='Jazz');
          console.log("fiteredData",filteredData);
          SetFilteredSongs(filteredData);
        }
        if(val===2)
          {
            const filteredData=songs.filter((song)=>song.genre.label==='Rock');
            console.log("fiteredData",filteredData);
            SetFilteredSongs(filteredData); 
          }
          if(val===3)
            {
              const filteredData=songs.filter((song)=>song.genre.label==='Pop');
              console.log("fiteredData",filteredData);
              SetFilteredSongs(filteredData);  
            }
            if(val===4)
              {
                const filteredData=songs.filter((song)=>song.genre.label==='Blues');
                console.log("fiteredData",filteredData);
                SetFilteredSongs(filteredData);
              }
        }
    
return(<> 
<Box sx={{ width: '100%' }}>
    <Box sx={{marginLeft:"5rem" }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab label="All"  sx={{ textTransform: 'none',fontSize:'16',fontWeight:'600' }} />
        {genres?.map((genre) => (
       <Tab key={genre.key} label={genre.label} sx={{ textTransform: 'none',fontSize:'16',fontWeight:'600' }}/>
         ))}
      </Tabs>
    </Box>
    
    <TabPanel value={value} index={0} ><Carousel albumData={songs} song={true}/></TabPanel>
     <TabPanel value={value} index={1}><Carousel albumData={filteredSongs} song={true}/></TabPanel>
     <TabPanel value={value} index={2}><Carousel albumData={filteredSongs} song={true}/></TabPanel>
     <TabPanel value={value} index={3}><Carousel albumData={filteredSongs} song={true}/></TabPanel>
     <TabPanel value={value} index={4}><Carousel albumData={filteredSongs} song={true}/></TabPanel>
   
  </Box></>)
}
const TabPanel=(props)=>{
    const {children,value,index}=props;
    return(<div className={styles.tabPanelDiv}>
        {
            value===index && (<div style={{paddingTop:"2rem"}}>{children}</div>)
        }
        </div>)
}
export default TabComponent;