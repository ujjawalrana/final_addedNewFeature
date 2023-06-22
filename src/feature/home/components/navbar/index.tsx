import React, { useState } from "react";
import bingeBox from '../../../../assets/bingeBox.svg'
import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import useStyles from "./styles";

const Navbar = (props:any) => {
  const classes = useStyles();
  
  return (
    <Box style={{
      paddingLeft:40,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      paddingTop:5,
      marginBottom:5,
      backgroundColor:'black',
      position:'absolute',
      // opacity:'0.8',
    }}>

        <img src={bingeBox} style={{height:40,display:'flex',justifyContent:'flex-start',marginRight:40}}/>

        <Box style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center',
          width:'35%',
        }}>
          <Typography style={{color:'white'}}>Home</Typography>
          <Typography style={{color:'white'}}>Movies</Typography>
          <Typography style={{color:'white'}}>Series</Typography>
          <Typography style={{color:'white'}}>TV series</Typography>
          <Typography style={{color:'white'}}>Anime</Typography>
          <Typography style={{color:'white'}}>Categories</Typography>
        </Box>

        <TextField
          variant="standard"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          className={classes.searchBar}
        />


      <Box>
        <NotificationsNoneIcon style={{color:'white'}} />
        <AccountCircleRoundedIcon style={{marginLeft:'15',marginRight:'45',fontSize: '30px',alignItems:'center',color:'white'}}/>
      </Box>
    </Box>
  );
};

export default Navbar;