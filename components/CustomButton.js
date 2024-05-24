import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomButton = styled(({ children, ...props }) => (
  <Button {...props}>{children}</Button>
))(({ bgcolor }) => ({
  background: `linear-gradient(90deg, ${bgcolor} 50%, ${bgcolor} 90%)`,
  height: "40px",
  borderRadius: "100px",
  textTransform: "none",
  textDecoration: "none",
  padding: "8px 12px",
  transition: "filter 0.3s ease",
  marginLeft: 10,
  "&:hover": {
    filter: "brightness(70%)",
  },
}));

export default CustomButton;
