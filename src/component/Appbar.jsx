import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const handleExperienceRef = () => {
  const experienceContainer = document.getElementById("experience-container");
  if (experienceContainer) {
    experienceContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleHomeRef = () => {
  const homeContainer = document.getElementById("home-container");
  if (homeContainer) {
    homeContainer.scrollIntoView({ behavior: "smooth" });
  }

};

const handleContactRef = () => {
  const contactContainer = document.getElementById("contact-container");
  if (contactContainer) {
    contactContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleSkillsRef = () => {
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skillsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const navItems = [
  { label: "Home", onClick: handleHomeRef, to: "/" },
  { label: "Experience", onClick: handleExperienceRef, to: "#" },
  { label: "Skills", onClick: handleSkillsRef, to: "#" },
  { label: "Contact", onClick: handleContactRef, to: "#" },
];

export default function Appbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        HESHIMA
      </Typography>
      <Divider />
      <List
        sx={{ backgroundColor: " #282c34", color: "#fff", fontWeight: "bold" }}
      >
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
           
           
            onClick={item.onClick}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#212121",
                  transitionDelay: "0.3s",
                },
              }}
            >
  
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id="home-container" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: " #282c34" }}>
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <InstagramIcon
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
            >
              <MenuIcon />
            </InstagramIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Heshima Lunyungu Julien
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div style={{ fontWeight: "bold" }}>
                <Link
                  onClick={handleHomeRef}
                  style={{
                    color: "white",
                    marginRight: "1rem",
                    textDecoration: "none",
                  }}
                  to="/"
                  exact
                >
                  Home
                </Link>
                <Link
                  onClick={handleExperienceRef}
                  style={{
                    color: "white",
                    marginRight: "1rem",
                    textDecoration: "none",
                  }}
                  to="#"
                  exact
                >
                  Experience
                </Link>
                <Link
                  onClick={handleSkillsRef}
                  style={{
                    color: "white",
                    marginRight: "1rem",
                    textDecoration: "none",
                  }}
                  to="#"
                >
                  Skills
                </Link>
                <Link
                  onClick={handleContactRef}
                  style={{
                    color: "white",
                    marginRight: "1rem",
                    textDecoration: "none",
                  }}
                  to="#"
                >
                  Contact
                </Link>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
