import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        maxWidth: "110ppx",
        backgroundColor: "black",
        borderTop: "1px solid #7889A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" sx={{ color: "#7B89AB", mb: 2 }}>
          Pages
        </Typography>
        <Link
          className="link"
          to="home"
          style={{ color: "white", margin: "0.5rem", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          className="link"
          to="experience"
          style={{ color: "white", margin: "0.5rem", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          className="link"
          to="about"
          style={{ color: "white", margin: "0.5rem", cursor: "pointer" }}
        >
          About
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" sx={{ color: "#7B89AB", mb: 2 }}>
          SOCIAL
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHub sx={{ mr:2, color: "#fff" }} />
          <Typography variant="body2" sx={{color:'white',my:1}} >
            Github
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Email sx={{ mr:2, color: "#fff" }} />
          <Typography variant="body2" sx={{color:'white',my:1}} >
            Email
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedIn sx={{ mr:2, color: "#fff" }} />
          <Typography variant="body2" sx={{color:'white',my:1}} >
            Linkdin
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
