import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import * as React from "react";
import CustomButton from "@/components/CustomButton";
import { Box } from "@mui/material";

import HeaderLoginButtonMenu from "./HeaderLoginButtonMenu";

export default function HeaderLoginButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <CustomButton
        id="demo-customized-button"
        // aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        variant="contained"
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        Sign in
      </CustomButton>

      <HeaderLoginButtonMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </Box>
  );
}
