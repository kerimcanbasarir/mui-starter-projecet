import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Typography from "@mui/material/Typography";
import HeaderSwitch from "../HeaderSwitch";
import { Stack } from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DifferenceIcon from "@mui/icons-material/Difference";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HelpIcon from "@mui/icons-material/Help";
import TerminalIcon from "@mui/icons-material/Terminal";
import CookieIcon from "@mui/icons-material/Cookie";

function DrawerMenu(props) {
  const { handleDrawerToggle } = props;
  const navData = [
    { label: "Offers", icon: <WorkIcon /> },
    { label: "Top Companies", icon: <ApartmentIcon /> },
    { label: "Geek", icon: <InsertDriveFileIcon /> },
  ];
  const menuData = [
    { label: "Press Room", icon: <EventNoteIcon /> },
    { label: "IT Salary Report", icon: <DifferenceIcon /> },
    { label: "Career", icon: <RocketLaunchIcon /> },
    { label: "Help", icon: <HelpIcon /> },
    { label: "Terms", icon: <TerminalIcon /> },
    { label: "Cookie settings", icon: <CookieIcon /> },
  ];
  return (
    <Box sx={{ textAlign: "center" }}>
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingX: "10px",
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              "&:hover": {
                border: "2px solid",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ my: 2, paddingX: "10px" }}>
            Menu
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "start",
            display: {
              xs: "inside",
              sm: "inside",
              md: "inside",
              lg: "none",
            },
          }}
        >
          <HeaderSwitch />
        </Box>
      </Stack>

      <Divider />
      <List sx={{ paddingX: "30px" }}>
        {navData.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                display: {
                  xs: "inside",
                  sm: "inside",
                  md: "inside",
                  lg: "none",
                },
              }}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              {menuData.map((menuItem, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText primary={menuItem.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </List>
    </Box>
  );
}

export default DrawerMenu;
