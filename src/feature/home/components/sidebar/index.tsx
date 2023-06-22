import React, { useState } from "react";
import bingeBox from '../../../../assets/bingeBox.svg'
import { Box, alpha } from "@material-ui/core";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import useStyles from "./styles";

const Sidebar = (props:any) => {

  return (
    <Box style={{
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:alpha('#444',0.7),
        
    }}>
        <Box style={{
            width:90,
            height:'20vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',
            position:'relative',
            top:-60
        }}>
            <HomeOutlinedIcon style={{color:'red'}}/>
            <AddBoxOutlinedIcon style={{color:'white'}}/>
            <PermIdentityOutlinedIcon style={{color:'white'}}/>
        </Box>
    </Box>
  );
};

export default Sidebar;