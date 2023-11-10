import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ ContactRef }) {
  const handleExperienceRef = () => {
    const experienceContainer = document.getElementById("experience-container");
    if (experienceContainer) {
      experienceContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleHomeRef = () => {
    const homeContainer = document.getElementById("home-container");
    if (homeContainer) {
      homeContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsRef = () => {
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      skillsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      id="contact-container"
      ref={ContactRef}
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
      <Box sx={{ display: "flex",flexDirection: "column" }}>
        <Typography variant="body1" sx={{ color: "#7B89AB", mb: 2 }}>
          Pages
        </Typography>
        <Link
          onClick={handleHomeRef}
          className="link"
          to="/"
          style={{ color: "white",textDecoration:'none', margin: "0.5rem", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          onClick={handleExperienceRef}
          className="link"
          to="#"
          style={{ color: "white",textDecoration:'none', margin: "0.5rem", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          onClick={handleSkillsRef}
          className="link"
          to="#"
          style={{ color: "white",textDecoration:'none', margin: "0.5rem", cursor: "pointer" }}
        >
          Skills
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" sx={{ color: "#7B89AB", mb: 2 }}>
          SOCIAL
        </Typography>

        <Box component={Link} target="_blank" to='https://github.com/heshima243' sx={{ display: "flex",textDecoration:'none', alignItems: "center", cursor: "pointer" }}>
          <GitHub sx={{ mr: 2, color: "#fff" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Github
          </Typography>
        </Box>
        <Box component={Link} target="_blank" to='https://mail.google.com/mail/u/0/#inbox?compose=new' sx={{ display: "flex",textDecoration:'none', alignItems: "center", cursor: "pointer" }}>
          <Email sx={{ mr: 2, color: "#fff" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Email
          </Typography>
        </Box>
        <Box component={Link} target="_blank" to='https://www.linkedin.com/in/julien-heshimaofficial-063748285/' sx={{ display: "flex",textDecoration:'none', alignItems: "center", cursor: "pointer" }}>
          <LinkedIn sx={{ mr: 2, color: "#fff" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Linkdin
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
