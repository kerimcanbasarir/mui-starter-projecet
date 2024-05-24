"use client";

import { Typography, Box, Grid, Paper } from "@mui/material";

import { grey } from "@mui/material/colors";

import CustomCard from "@/components/CustomCard";

import List from "@mui/material/List";
import { useRef, useState } from "react";

import "@/assets/index.css";

import { Map } from "@/components/map/Map";

import CustomButton from "@/components/CustomButton";

function Home() {
  return (
    <>
      {/* <Grid container spacing={0} style={{ height: "80vh" }}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{
            overflowY: "auto",
            height: "100%",
            order: { xs: 2, sm: 2, md: 1 },
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <List
            sx={{
              background: grey[100],
            }}
          >
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </Box>
          </List>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{
            position: "sticky",
            background: "light",
            order: { xs: 1, sm: 1, md: 2 },
            height: { xs: "10%", sm: "10%", md: "100%", lg: "100%" },
          }}
        >
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=f8TbPIEQZVwbfT6TXDxk"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid> */}

      <Box
        sx={{
          display: "flex",

          width: "100vw",
          height: "79vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50vw" },
            height: "100%",
            overflowY: "auto",
            order: { xs: 2, sm: 2, md: 1 },
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <List
            sx={{
              background: grey[100],
            }}
          >
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Paper
                sx={{
                  display: {
                    xs: "inline",
                    sm: "inline",
                    md: "none",
                    lg: "none",
                  },
                  maxWidth: { xs: "95%", sm: "95%", md: "100%", lg: "240" },

                  borderRadius: "7px",
                  marginBottom: 1,
                  cursor: "pointer",
                }}
                variant="outlined"
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
                >
                  Maps Button
                </CustomButton>
              </Paper>

              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />

              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </Box>
          </List>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "inline",
              lg: "inline",
            },
            width: { xs: "100%", sm: "100%", md: "50vw" },
            order: { xs: 1, sm: 1, md: 2 },
            height: { xs: "50vh", sm: "50vh", md: "100%" },
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Map />
        </Box>
      </Box>
    </>
  );
}

export default Home;
