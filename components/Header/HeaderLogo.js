import React from "react";
import { Box, Typography } from "@mui/material";

import Logo from "../../assets/image/logo_light.png";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
  const CustomLink = styled(Link)(() => ({
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  }));
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomLink href={"/"}>
        <Box>
          <Image src={Logo} width={170} alt="Picture of the author" />
        </Box>
      </CustomLink>

      <Typography
        variant="body2"
        component="div"
        sx={{
          flexGrow: 50,
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          paddingX: "10px",
        }}
        color={"grey"}
      >
        #1 Job Board for tech industry in Europe
      </Typography>
    </Box>
  );
}

export default HeaderLogo;
