import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Icon({ name, src }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 3,
      }}
    >
      <img src={src} alt={src} height="40px" width="40px" />
      <Typography variant="body1" sx={{ color: "#fff", mt: 1, color: "gray" }}>
        {name}
      </Typography>
    </Box>
  );
}
