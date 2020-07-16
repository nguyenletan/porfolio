import codeTheme from "@theme-ui/prism/presets/prism-funky.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#d5deeb",
    muted: "#999",
    primary: "#00bff8",
    secondary: "#c792eb",
    success: "#a6e22e",
    background: "#001627",
    surface: "#02243f",
    modes: {
      light: {
        text: "#012339",
        muted: "#174781",
        primary: "#236ebf",
        secondary: "#a44185",
        success: "#48ADA9",
        background: "#fff",
        surface: "#e0ecf1"
      }
    }
  },
  fontSizes: [
    12,
    14,
    17,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fonts: {
    body:
      '"IBM Plex Mono", monospace',
    heading:
      '"IBM Plex Mono", monosapce',
    monospace: '"IBM Plex Mono", monospace',
    size: "16px",
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    li: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};