"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import KurumsalMenu from "./KurumsalMenu";
export default function KurumsalButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button
        variant="contained"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          height: "40px",
          borderRadius: "100px",
          textTransform: "none",
        }}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        Kurumsal
      </Button>

      <KurumsalMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
}
