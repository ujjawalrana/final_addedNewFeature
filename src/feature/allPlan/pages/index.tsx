import React, { useState } from "react";
import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";
import { Box, Button, Table, Typography } from "@material-ui/core";
import SubscriptionPlansChip from "../components/subscriptionCard";

const AllPlan = () => {
  const classes = useStyles();

  return (
    <Box className={classes.signInOuterContainer}>

      <Box style={{width:'37%',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src={bingeBox} style={{height:50,display:'flex',flexDirection:'column',alignSelf:'start',marginLeft:132}}/>
        <Typography style={{fontSize:60,color:'#DB304B',fontWeight:'bold',marginTop:50}}>"Unleash Your</Typography>
        <Typography style={{fontSize:60,color:'#DB304B',fontWeight:'bold',position: 'relative',top:-10}}>Movie Magic"</Typography>
        <Typography style={{fontSize:28,color:'white',marginTop:20}}>Subscription Plans for Endless</Typography>
        <Typography style={{fontSize:28,color:'white'}}>Streaming Delight!"</Typography>
      </Box>

        <Box style={{width:'63%',display:'flex',flexDirection:'row',justifyContent:'space-around',position:'relative',left:'-30px'}}>
            <SubscriptionPlansChip 
                planName="Premium"
                price="1499"
                decicesCount="4"
                resolution="4k (Ultra HD) + HDR"
                quality="Best"
                supportedDevices="Tv, computer, mobile, tablet"
            />

            <SubscriptionPlansChip 
                planName="Super"
                price="899"
                decicesCount="4"
                resolution="1080p"
                quality="Better"
                supportedDevices="Tv, computer, mobile, tablet"
            />

            <SubscriptionPlansChip 
                planName="Mobile"
                price="499"
                decicesCount="4"
                resolution="480p"
                quality="Good"
                supportedDevices="Mobile, tablet"
            />
        </Box>
    </Box>
  );
};

export default AllPlan