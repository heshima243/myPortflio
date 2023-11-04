import React from "react";
import { Box, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";


export default function Skills() {
  return (
    

    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7ff",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      <Typography variant="body" sx={{ color: "#fff", mb: 2 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut animi
        aliquid illum obcaecati natus at reprehenderit distinctio autem enim.
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Heshima Julien - 
        </span>
        <span style={{ color: "#7889A8", fontWeight: "bold" }}>
          Software Engeneer
        </span>
      </Typography>
      <FormatQuote style={{
        position:'absolute',
        top:'-20px',
        letf:'-20px',
        color:'#00C',
        height:'50px',
        width:'50px'
      }}/>
    </Box>
  );
}
