import React, { useState } from "react";
import { Box } from "@material-ui/core";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import TopSuggestedMovies from "../components/topSuggestedMovies";
import useStyles from "./styles";
import TopMovie from "../components/TopMovie";

const Home = (props:any) => {

  const classes= useStyles();
  return (
    <Box className={classes.signInOuterContainer}>
      <Navbar />

      <Box style={{
        display:'flex',
        flexDirection:'row',
      }}>

        <Sidebar />
        <Box style={{display:'flex', flexDirection:'column'}}>
          <TopSuggestedMovies />
          <TopMovie />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;