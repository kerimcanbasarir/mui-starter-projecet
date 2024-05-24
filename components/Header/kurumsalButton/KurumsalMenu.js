"use client";

import React from "react";

import Menu from "@mui/material/Menu";
import { Box, Typography, Grid, Divider } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import TuneIcon from "@mui/icons-material/Tune";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuList from "@mui/material/MenuList";

function KurumsalMenu(props) {
  const { open, anchorEl, setAnchorEl } = props;
  const menuData = [
    { label: "Sıkça Sorulan Sorular", icon: <LiveHelpIcon /> },
    { label: "Stratejik Planlar", icon: <ListAltOutlinedIcon /> },
    { label: "Vergi Terimleri Sözlüğü", icon: <SubjectOutlinedIcon /> },
    { label: "İnfografikler", icon: <TuneIcon /> },
    { label: "Özelge Arama & Talep Formu", icon: <VerifiedIcon /> },
    { label: "Vergi Takvimi", icon: <CalendarMonthIcon /> },
  ];

  const categories = {
    ORGANİZASYON: [
      "Bakanımızın Mesajı Var",
      "Başkanın Mesajı Var",
      "Organizasyon Yapısı",
      "Tarihi Gelişim",
      "Teşkilat Şeması",
      "Kurumsal Mevzuat",
      "Misyonumuz/vizyonumuz",
      "Bilgi Güvenliği Kapsamı",
      "Stratejik Planlar",
      "Kurumsal Raporlar ve Tablolar",
      "Kariyer ve İnsan Kaynakları",
      "Eğitim Merkezi",
      "OECD Ankara Çok Taraflı Vergi Merkezi",
      "E-Belge Doğrulama",
    ],
    "MÜKELLEF HİZMETLERİ": [
      "Haberler ve Duyurular",
      "Mükellef Hakları Bildirgesi",
      "Etik Kurallar Bildirgesi",
      "Etkinlikler",
    ],
    "DESTEK HİZMETLERİ": [
      "Yararlı Bilgiler",
      "Sıkça Sorulan Sorular",
      "İstatistikler",
      "Rehberler / Broşürler / Yayınlar",
      "Vergi Terimleri Sözlüğü",
      "İnfografikler",
      "Beyanname Formları & Bildirimler",
      "Özelge Arama & Talep Formu",
      "Dilekçematik",
      "interaktif Vergi Danışmanı",
      "e-Girişimci",
      "Yatırımlarda Vergisel Teşvikler",
      "Vergi Takvimi",
    ],
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      // PaperProps={{
      //   style: {
      //     width: "calc(100vw - 100px)",
      //   },
      // }}
    >
      <MenuList sx={{ width: "calc(100vw - 100px)" }}>
        <Box
          sx={{
            padding: 3,
            height: 50,
            maxWidth: "100%",
          }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                component="h1"
                sx={{ fontWeight: 600 }}
              >
                KURUMSAL
              </Typography>
            </Grid>

            <Grid item xs={11} sm={12} md={10}>
              <FormControl
                sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
              >
                <TextField
                  sx={{
                    paddingLeft: 3,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
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
              </FormControl>
            </Grid>
            <Grid item md={1}>
              <IconButton
                onClick={handleClose}
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            padding: 4,
          }}
        >
          <Grid container spacing={1} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                {Object.entries(categories).map(([category, items], index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Typography
                      variant="body1"
                      component="h1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: 2,
                      }}
                    >
                      {category}
                    </Typography>

                    {items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} disablePadding>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: "0.8rem",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Divider orientation="vertical" />
            </Grid>

            <Grid item xs={12} md={3}>
              <List>
                {menuData.map((menuItem, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{menuItem.icon}</ListItemIcon>
                      <ListItemText
                        primary={menuItem.label}
                        primaryTypographyProps={{
                          sx: { fontSize: "0.8rem", fontWeight: 600 },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </MenuList>
    </Menu>
  );
}

export default KurumsalMenu;
