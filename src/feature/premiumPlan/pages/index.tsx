import React, { useState } from "react";
import bingeBox from "../../../assets/bingeBox.svg";
import { Box, Table, Typography, alpha } from "@material-ui/core";
import useStyles from "./styles";
import { Button } from "@mui/material";

const PremiumPlan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.signInOuterContainer}>
      <Box
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <img src={bingeBox} style={{ height: 50, marginBottom: "30px" }} />
        <Box
          style={{
            padding: "4% 5%",
            backgroundColor: alpha("#444", 0.5),
            borderRadius: "15px",
            height: "22rem",
          }}
        >
          <Box>
            <Typography
              style={{ fontSize: "30px", fontWeight: "900", color: "#DB304B" }}
            >
              Premium Plan
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Hi{" "}
              <Typography
                style={{ fontWeight: 600, display: "inline", fontSize: "14px" }}
              >
                Govind
              </Typography>
              , here is your subscription plan details
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Validity:{" "}
              <Typography
                style={{ fontWeight: 600, display: "inline", fontSize: "14px" }}
              >
                1 July, 2019
              </Typography>
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              Price
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              Resolution
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              Video Quality
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              Suported Files
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: alpha("#000", 0.6),
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              Rs{" "}
              <Typography
                style={{
                  fontWeight: 600,
                  display: "inline",
                  fontSize: "30px",
                }}
              >
                1499
              </Typography>
              /yr
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              4k (Ultra HD) + HDR
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              Best
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "serif",
                fontWeight: 400,
                marginBottom: "20px",
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              TV, Computer, Mobile
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "25px",
              padding: "10px",
              borderRadius: "50px",
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                width: "19%",
                borderRadius: "7px",
                color: "crimson",
                fontWeight: "900",
              }}
            >
              Back
            </Button>
            <Button
              style={{
                backgroundColor: "crimson",
                width: "19%",
                borderRadius: "7px",
                marginLeft: "13px",
                color: "white",
                fontWeight: "900",
              }}
            >
              Proceed to Payment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PremiumPlan;