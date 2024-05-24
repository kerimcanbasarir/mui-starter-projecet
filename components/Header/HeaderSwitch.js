"use client";

import Switch from "@mui/material/Switch";
import * as React from "react";

import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import { useState } from "react";

const HeaderSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <FormControl component="fieldset">
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </FormControl>
    </Box>
  );
};

export default HeaderSwitch;
