import React, { useState } from "react";
import gravity from '../../../../assets/Gravity.jpeg'
import bingeBox from '../../../../assets/bingeBox.svg'
import { Box, Grid, Typography } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import useStyles from "./styles";

const TopMovie = (props:any) => {
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
      image: bingeBox,
    },
    {
        id: 3,
        title: "Movie 3",
        image: gravity,
      },
      {
        id: 4,
        title: "Movie 4",
        image: gravity,
      },
      {
        id: 1,
        title: "Movie 1",
        image: gravity,
      },
      {
        id: 2,
        title: "Movie 2",
        image: gravity,
      },
      {
          id: 3,
          title: "Movie 3",
          image: gravity,
        },
        {
          id: 4,
          title: "Movie 4",
          image: gravity,
        },
  ];
  

  return (

    <Box style={{paddingLeft:15}}>

        <Typography style={{color:'white',marginBottom:40, marginTop:40, fontSize:25,}}>Top Movies For You</Typography>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'flex' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: '300px', marginRight: '20px' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <Typography variant="h6">{movie.title}</Typography>
          </div>
        ))}
      </div>
    </div>

        <Typography style={{color:'white',marginBottom:40, marginTop:40, fontSize:25,}}>Top Rated</Typography>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'flex' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: '300px', marginRight: '20px' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <Typography variant="h6">{movie.title}</Typography>
          </div>
        ))}
      </div>
    </div>
    </Box>
  );
};

export default TopMovie;