import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { createTheme } from "@mui/material/styles";

const Intro = () => {
  const theme = createTheme();
  const text =
    "Explore a space where expression comes to life. You're welcome to international language center";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const animateText = () => {
    if (charIndex < text.length) {
      setDisplayedText(text.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    } else {
      setCharIndex(0);
      setDisplayedText("");
    }
  };

  useEffect(() => {
    const interval = setInterval(animateText, 100); // Change the interval as needed
    return () => clearInterval(interval);
  }, [charIndex]);

  const Intro = styled(Typography)(({ theme }) => ({
    color: "#fff",

    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));

  return (
    <Box marginTop="5rem">
      <Container>
        {/* <Typography variant="h5" align="center" color="inherit" sx={{alignItems:'justify',alignContent:'justify'}}>
          {displayedText}
        </Typography> */}
        <Typography
          variant="h6"
          sx={{ color: "#fff", textAlign: "center" }}
          gutterBottom
        >
          hello, I'm Heshima
        </Typography>
        <Intro variant="h4">
          I'm <span style={{ color: "rgba(0,199,255,255)" }}> delighted </span>{" "}
          to have you visit my profile. Here's a little bit{" "}
          <span style={{ color: "rgba(0,199,255,255)" }}>about me </span>and
          what I'm up to
        </Intro>
      </Container>
    </Box>
  );
};

export default Intro;
