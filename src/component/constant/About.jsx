import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Skills from "./Skills";
// import Testimonial from "./Testimonial";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15% ",
    display: "block",
    "&:hover": {
      border: "3px solid #00C7FF",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  return (
    <Box
    
      sx={{ maxWidth: "1300px", my: 0, padding: 3, mx: "auto" }}
    
    >
      <CustomTitleBox sx={{}}>
        <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
          What people say about me
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: "0",
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        <Skills />
      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          border: "0",
          borderRadius: "25px",
        }}
      ></div>

      <Typography
        variant="h4"
        sx={{ color: "#fff", mt: 12, textAlign: "center" }}
      >
        Interesting in working together
      </Typography>

      <CustomButton variant="outlined" sx={{ mx: "auto", mt: 3, mb: 8 }}>
        Get in Touch
      </CustomButton>
    </Box>
  );
};

export default About;
