"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import DrawerMenu from "./HeaderDrawerMenu";
import HeaderIcon from "./HeaderDrawerIcon";
import HeaderLoginButtonMenu from "../headerLoginButton/HeaderLoginButtonMenu";

const HeaderDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ paddingLeft: "30px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 350,
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
        >
          <DrawerMenu handleDrawerToggle={handleDrawerToggle} />
          <HeaderLoginButtonMenu />
          <HeaderIcon />
        </Drawer>
      </Box>
    </>
  );
};

export default HeaderDrawer;
