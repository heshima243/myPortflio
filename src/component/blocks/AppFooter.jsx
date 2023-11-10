import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton, Typography, Paper } from "@mui/material";

const footerStyle = {
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#282c34",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Utilisez un media query dans les styles en dehors de l'objet d'origine
const mediaQuery = `@media (max-width: 600px) {
  min-height: 25vh;
}`;

const socialIconsStyle = {
  marginTop: "8px",
  "& .MuiIconButton-root": {
    marginRight: "8px",
  },
};

function AppFooter() {
  return (
    <Paper
      elevation={3}
      style={{ ...footerStyle, [mediaQuery]: { minHeight: "15vh" } }}
    >
       <Typography variant="h7" sx={{ color: "#26a69a" }}>
        heshimajulien.official@gmail.com
      </Typography>
      <Typography variant="h7" sx={{ color: "#fff" }}>
        &copy; 2023 All Right reserved | Heshima
      </Typography>
     
    </Paper>
  );
}

export default AppFooter;
