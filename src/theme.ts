import { ThemeOptions } from "@mui/material"

const getThemeOptions = (): ThemeOptions => {

const themeOptions: ThemeOptions = {
    // Set default spacing unit to match GOV.UK
    spacing: 10,
    typography: {
      fontFamily: "'Inter', Arial, sans-serif",
      h1: {
        fontSize: "3rem",
        letterSpacing: SPACING_TIGHT,
        fontWeight: FONT_WEIGHT_BOLD,
      },
      h2: {
        fontSize: "2.25rem",
        letterSpacing: SPACING_TIGHT,
        fontWeight: FONT_WEIGHT_BOLD,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: FONT_WEIGHT_BOLD,
      },
      h4: {
        fontSize: "1.188rem",
        fontWeight: FONT_WEIGHT_SEMI_BOLD,
      },
      h5: {
        fontSize: "1rem",
        fontWeight: FONT_WEIGHT_SEMI_BOLD,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: FONT_WEIGHT_SEMI_BOLD,
      },
      subtitle1: {
        fontSize: "1.375rem",
        lineHeight: LINE_HEIGHT_BASE,
        color: palette.text.secondary,
      },
      subtitle2: {
        fontSize: "1.188rem",
        lineHeight: LINE_HEIGHT_BASE,
        color: palette.text.secondary,
      },
      body1: {
        fontSize: "1.188rem",
        lineHeight: LINE_HEIGHT_BASE,
      },
      body2: {
        fontSize: "1rem",
      },
      body3: {
        fontSize: "0.913rem",
      },
      data: {
        fontFamily: '"Source Code Pro", monospace',
      },
    },

}
return themeOptions}