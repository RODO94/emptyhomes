import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// Define custom breakpoints
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

// Define your color palette
const palette = {
  primary: {
    main: "#242424",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#10403C",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#ffffff",
    background: "#BFE3E0",
  },
  accent: {
    main: "#20BBAE",
    secondary: "#E3BFDB",
  },
};

// Define your typography
const typography: TypographyOptions = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  h1: {
    fontSize: "6rem",
    fontWeight: 700,
    color: palette.primary.main,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 400,
    color: palette.primary.main,
  },
  h3: {
    fontSize: "2.5rem",
    fontWeight: 600,
    color: palette.primary.main,
  },
  h4: {
    fontSize: "1.9rem",
    fontWeight: 200,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
  },
  body2: {
    fontSize: "1.25rem",
    fontWeight: 400,
    color: palette.primary.main,
  },
  button: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: palette.primary.main,
    textTransform: "uppercase",
  },
};

let theme = createTheme({
  breakpoints: {
    values: {
      sm: 375,
      md: 768,
      lg: 1280,
    },
  },
  palette,
  typography,
});

// Make typography responsive
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 2,
});

export default theme;
