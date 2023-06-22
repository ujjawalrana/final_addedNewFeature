import React, { useState } from "react";
import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";
import { Box, Button, Divider, Table, Typography, alpha } from "@material-ui/core";

const SubscriptionPlansChip = (props:any) => {
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (

      <Box style={{ 
            width:'25%',
            height:'42%',
            transition: 'background-color 0.3s',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            boxShadow: isHovered ? '0px 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            borderRadius:20,
            backgroundColor:alpha('#444',0.7),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography style={{color:"#DB304B", fontSize:28, fontWeight:'bold',paddingTop:30}}>{props.planName}</Typography>
        <Box style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Typography style={{color:'white'}}>Rs</Typography>
            <Typography style={{color:'white', fontSize:40, fontWeight:'bold'}}>{props.price}</Typography>
            <Typography style={{color:'white'}}>/yr</Typography>
        </Box>
        <Typography style={{color:'white'}}>{props.decicesCount} Devices</Typography>
        <Typography style={{color:'white',marginTop:40}}>Resolution</Typography>
        <Typography style={{color:'white', fontSize:20,marginBottom:13}} >{props.resolution}</Typography>
        
        <Box className={classes.line}/>
        <Typography style={{color:'white',marginTop:13}}>Video Quality</Typography>
        <Typography style={{color:'white', marginBottom:13}}>{props.quality}</Typography>

        <Box className={classes.line}/>
        <Typography style={{color:'white',marginTop:13}}>Supported device</Typography>
        <Typography style={{color:'white'}}>{props.supportedDevices}</Typography>
      </Box>
  );
};

export default SubscriptionPlansChip;