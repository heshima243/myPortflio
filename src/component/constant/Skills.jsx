import React from "react";
import { Box, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

export default function Skills() {
  return (
    <>
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
          Working with Heshima has been an absolute pleasure. Their web
          development expertise is unparalleled, and they consistently deliver
          projects that not only meet.
        </Typography>
        <Typography variant="body2">
          <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
            Joseph Lwanzo -
          </span>
          <span style={{ color: "#7889A8", fontWeight: "bold" }}>
            Software Engeneer
          </span>
        </Typography>
        <FormatQuote
          style={{
            position: "absolute",
            top: "-20px",
            letf: "-20px",
            color: "#00C",
            height: "50px",
            width: "50px",
          }}
        />
      </Box>

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
        I had the pleasure of collaborating with Heshima on a challenging web development project
        Their ability to turn complex ideas into functional and visually appealing websites is truly commendable
        </Typography>
        <Typography variant="body2">
          <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
            Serge Ndobe -
          </span>
          <span style={{ color: "#7889A8", fontWeight: "bold" }}>
            Software Engeneer
          </span>
        </Typography>
        <FormatQuote
          style={{
            position: "absolute",
            top: "-20px",
            letf: "-20px",
            color: "#00C",
            height: "50px",
            width: "50px",
          }}
        />
      </Box>


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
          I can confidently say that heshima is a web development wizard.
          Their ability to transform ideas into digital realities is nothing
          short of magic
        </Typography>
        <Typography variant="body2">
          <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
            Thomas Ndakala -
          </span>
          <span style={{ color: "#7889A8", fontWeight: "bold" }}>
            Assistant RH
          </span>
        </Typography>
        <FormatQuote
          style={{
            position: "absolute",
            top: "-20px",
            letf: "-20px",
            color: "#00C",
            height: "50px",
            width: "50px",
          }}
        />
      </Box>
    </>
  );
}
