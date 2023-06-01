import {
  Box,
  Toolbar,
  Typography,
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "../../App.css";

const tabs = [
  {
    name: "About the Artist",
    link: "#About the Artist",
  },
  {
    name: "Gallery",
    link: "#Gallery",
  },
  {
    name: "Work",
    link: "#Work",
  },
  {
    name: "Canvas Options",
    link: "#Canvas",
  },
  {
    name: "Contact",
    link: "#Contact",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#202020" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: "white"}} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {tabs.map((tab) => (
            <MenuItem>
              <Button
                key={tab.name}
                href={tab.link}
              >
                <Typography color={"black"} fontSize={15} fontFamily={"serif"}>
                  {tab.name}
                </Typography>
              </Button>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AppBar position="static" color="transparent" sx={{ p: 3 }}>
        <Toolbar>
          <Box
            className="navbar-container"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                href={tab.link}
                sx={{
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    bgcolor: "#202020",
                    borderRadius: 3,
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Typography color={"white"} fontSize={15} fontFamily={"serif"}>
                  {tab.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
