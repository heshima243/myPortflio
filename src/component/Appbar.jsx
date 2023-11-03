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
const navItems = ["Home", "Experience", "Contact"];

export default function Appbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    
  };

  const handleExperienceRef = () => {
    const experienceContainer = document.getElementById("experience-container");
    if (experienceContainer) {
      experienceContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2,fontWeight:'bold'}}>
        HESHIMA
      </Typography>
      <Divider />
      <List sx={{backgroundColor: " #282c34",color:'#fff',fontWeight:'bold'}}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center",'&:hover':{backgroundColor:'#212121',transitionDelay:'0.3s'} }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: ' #282c34' }}>
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
              <div style={{fontWeight:'bold'}}>
                <Link   className="hover-link" style={{ color: "white", marginRight: "1rem",textDecoration:'none'}} to="#">
                  Home
                </Link>
                <Link onClick={handleExperienceRef} style={{ color: "white", marginRight: "1rem",textDecoration:'none' }} to="#">
                  Experience
                </Link>
                <Link style={{ color: "white", marginRight: "1rem",textDecoration:'none' }} to="#">
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