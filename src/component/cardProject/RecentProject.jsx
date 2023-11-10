import { Box, Typography } from "@mui/material";
import React from "react";
import CardProject from "./CardProject";

export default function RecentProject({ ExperienceRef }) {
  return (
    <Box
      sx={{ maxWidth: "1300px", mx: "auto", my: "12" }}
      id="experience-container"
      ref={ExperienceRef}
    >
      <Typography
        variant="h4"
        sx={{ color: "#fff", textAlign: "center", mb: 2 }}
      >
        Let's review
        <span style={{ color: "rgba(0,199,255,255)" }}>
          {" "}
          what I've constructed{" "}
        </span>
        so far
      </Typography>
      <CardProject />
    </Box>
  );
}
