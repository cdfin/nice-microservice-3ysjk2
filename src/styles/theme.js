import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0075FF",
    },
    background: {
      default: "#0C1E35",
      paper: "#111C44",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A0AEC0",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0C1E35",
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
