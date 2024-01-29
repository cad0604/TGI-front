import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1380FF",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
        variant: "contained",
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "standard",
        color: "primary",
        spellCheck: false,
        inputProps: {},
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        color: "primary",
        spellCheck: false,
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
        color: "primary",
        spellCheck: false,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d32f2f",
        },
      },
    },
  },
});

export default theme;
