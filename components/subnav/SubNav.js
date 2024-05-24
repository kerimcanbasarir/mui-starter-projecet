"use client";

import { Typography, Box, Grid, Toolbar, Button } from "@mui/material";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

import RocketIcon from "@mui/icons-material/Rocket";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { grey } from "@mui/material/colors";
import CustomButton from "@/components/CustomButton";

import IconButton from "@mui/material/IconButton";

import Link from "next/link";

export default function SubNav() {
  const CustomLink = styled(Link)(() => ({
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  }));
  const menuList = [
    {
      label: "Startup",
      icon: <RocketIcon />,
      href: "startup",
      color: "rgb(239, 83, 80)",
    },
    {
      label: "Software House",
      icon: <WysiwygIcon />,
      href: "software-house",
      color: "rgb(232, 199, 80)",
    },
    {
      label: "E-commerce",
      icon: <LocalMallIcon />,
      href: "e-commerce",
      color: "rgb(32, 231, 221)",
    },
    {
      label: "Corporation",
      icon: <CorporateFareIcon />,
      href: "corporation",
      color: "rgb(0, 171, 234)",
    },
    {
      label: "Agency",
      icon: <CampaignIcon />,
      href: "agency",
      color: "rgb(37, 117, 252)",
    },
    {
      label: "Other",
      icon: <BusinessCenterIcon />,
      href: "other",
      color: "rgb(212, 75, 213)",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar sx={{ padding: "20px 0" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <FormControl>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",

                      backgroundColor: grey[100],
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                      },
                    },
                  }}
                  placeholder="Search Company"
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Box>
                  <IconButton
                    aria-label="delete"
                    sx={{
                      display: {
                        xs: "inside",
                        sm: "inside",
                        md: "none",
                        lg: "none",
                      },
                      color: "black",
                      border: "1px solid",
                      borderColor: grey[300],
                      backgroundColor: grey[200],
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomButton
                variant="contained"
                id="demo-customized-button"
                bgcolor={"white"}
                sx={{
                  color: "black",
                  border: "1px solid",
                  borderColor: grey[300],
                }}
                startIcon={<LocationOnOutlinedIcon />}
              >
                Location
              </CustomButton>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomButton
                  variant="contained"
                  id="demo-customized-button"
                  bgcolor={"white"}
                  sx={{
                    display: {
                      xs: "inside",
                      sm: "inside",
                      md: "inside",
                      lg: "none",
                    },
                    color: "black",
                    border: "1px solid",
                    borderColor: grey[300],
                  }}
                >
                  Company Type
                </CustomButton>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                    },
                  }}
                >
                  {menuList.map((item, index) => {
                    return (
                      <CustomLink href={item.href} key={index}>
                        <CustomButton
                          variant="contained"
                          id="demo-customized-button"
                          startIcon={item.icon}
                          bgcolor={item.color}
                        >
                          {item.label}
                        </CustomButton>
                      </CustomLink>
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <CustomButton
                variant="contained"
                id="demo-customized-button"
                bgcolor={"rgb(171, 71, 188)"}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "inline",
                    lg: "inline",
                  },
                }}
              >
                Get started
              </CustomButton>
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </>
  );
}
