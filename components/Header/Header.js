import * as React from "react";

import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import HeaderDrawer from "./headerDrawer/HeaderDrawer";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box minHeight={64}>
      <CssBaseline />
      <AppBar
        component="header"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: 1,
          borderColor: "grey.300",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <HeaderLogo />
          <HeaderNavbar />
          <HeaderDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
