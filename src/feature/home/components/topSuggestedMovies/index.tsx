import React, { useState } from "react";
import gravity from '../../../../assets/Gravity.jpeg'
import bingeBox from '../../../../assets/bingeBox.svg'
import { Box, Grid, Typography } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import useStyles from "./styles";

const TopSuggestedMovies = (props:any) => {
  const classes = useStyles();

  const movies = [
    {
      id: 1,
      title: "Movie 1",
      image: gravity,
    },
    {
      id: 2,
      title: "Movie 2",
      image: gravity,
    }
  ];
  
  console.log('movies',movies);
  return (
    <Box style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Box style={{ display: 'flex' }}>
        {movies.map((movie) => (
          <Box key={movie.id} style={{ flex: '0 0 auto' }}>
            <img src={movie.image} alt={movie.title} style={{minWidth: '100vh', height: '70vh', paddingLeft:20}} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopSuggestedMovies;