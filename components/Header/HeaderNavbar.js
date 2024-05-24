import React from "react";
import Button from "@mui/material/Button";
import { Stack, Box } from "@mui/material";
import HeaderSwitch from "./HeaderSwitch";
import HeaderLoginButton from "./headerLoginButton/HeaderLoginButton";
import KurumsalButton from "./kurumsalButton/KurumsalButton";
import { grey } from "@mui/material/colors";
function HeaderNavbar() {
  const navItems = ["Job offers", "Top Companies", "Geek"];

  return (
    <Stack
      direction="row-reverse"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        marginLeft: "auto",
      }}
    >
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
      >
        <HeaderSwitch />
      </Box>
      <HeaderLoginButton />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
      >
        <KurumsalButton />
        {navItems.map((item) => (
          <Button
            variant="text"
            key={item}
            sx={{
              color: "grey",
              textTransform: "none",
            }}
          >
            {item}
          </Button>
        ))}

        <Button
          sx={{
            color: "black",
            border: "1px solid",
            borderColor: grey[300],
            height: "40px",
            borderRadius: "100px",
            padding: "8px 16px",
            textTransform: "none",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
          variant="outlined"
          color="inherit"
        >
          Post a Job
        </Button>
      </Stack>
    </Stack>
  );
}

export default HeaderNavbar;
