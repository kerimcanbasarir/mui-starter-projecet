"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import SubNav from "@/components/subnav/SubNav";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
// export const MetaData: MetaData = {
//   title: "burada.com",
//   description: "generated by create next app"
// }

export default function RootLayout({ children }) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: pink[400],
      },
    },
    shadows: ["none"],

    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderColor: "grey.300",
            overflow: "hidden",
          },
        },
      },
    },
  });

  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <SubNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
