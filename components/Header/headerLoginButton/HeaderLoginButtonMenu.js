"use client";

import MenuItem from "@mui/material/MenuItem";
import { Box, Typography } from "@mui/material";

import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TvIcon from "@mui/icons-material/Tv";

import Menu from "@mui/material/Menu";

import React from "react";

function HeaderLoginButtonMenu(props) {
  const { open, anchorEl, setAnchorEl } = props;
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {" "}
        <MenuList
          sx={{
            width: 300,
            height: 120,
            maxWidth: "100%",
            p: 1,
            borderRadius: "16px",
          }}
        >
          <MenuItem
            sx={{
              height: 50,
              maxWidth: "100%",
              border: 1,
              borderRadius: "16px",
              borderColor: "grey.300",
            }}
          >
            <ListItemIcon>
              <Box
                sx={{
                  border: 1,
                  borderRadius: "10px",
                  borderColor: "grey.300",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <AccountCircleIcon />
              </Box>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                Sign in to Candidate's profile
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem
            sx={{
              height: 50,
              maxWidth: "100%",
              border: 1,
              borderRadius: "16px",
              borderColor: "grey.300",
              mt: 1,
            }}
          >
            <ListItemIcon>
              <Box
                sx={{
                  border: 1,
                  borderRadius: "10px",
                  borderColor: "grey.300",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <TvIcon />
              </Box>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                Sign in to Employer's panel
              </Typography>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default HeaderLoginButtonMenu;
