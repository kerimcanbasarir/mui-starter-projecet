import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, Chip } from "@mui/material";
import Logo from "@/assets/image/card.png";
import CardLogo from "@/assets/image/cardLogo.png";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
export default function CustomCard() {
  return (
    <Card
      sx={{
        maxWidth: { xs: "95%", sm: "100%", md: "100%", lg: 240 }, //240 normal
        // maxWidth: 240,
        borderRadius: "7px",
        marginBottom: 1,
        cursor: "pointer",
      }}
      variant="outlined"
    >
      <CardMedia
        sx={{ maxWidth: { xs: "95%", sm: "100%", md: "100%", lg: 240 } }}
      >
        <Image src={Logo} height={150} alt="Picture of the author" />
      </CardMedia>

      <CardContent>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              height: 88,
              width: 88,
              position: "absolute",
              top: "-70px",
              left: "120px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 1,
              borderColor: grey[300],
            }}
          >
            <Image
              src={CardLogo}
              height={"auto"}
              width={"77"}
              alt="Picture of the author"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </Box>
      </CardContent>
      <Divider sx={{ marginY: 1 }} />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Chip label="primary" color="primary" />
        <Chip
          sx={{ borderColor: grey[300] }}
          label="Chip Outlined"
          variant="outlined"
          icon={<BusinessCenterOutlinedIcon />}
        />
      </CardActions>
    </Card>
  );
}
