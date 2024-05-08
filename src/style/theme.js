import { createTheme } from "@mui/material"

let theme = createTheme({
  // typography: {
  //   allVariants: {
  //     fontFamily: "serif",
  //   },
  // },
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: "white",
            lineHeight: 1.75,
            fontWeight: "500",
            borderRadius: "48px",
            background: "#3D5A80",
            "&:hover": {
              background: "#365173",
            },
          },
        },
      ],
    },
  },
})
// theme = responsiveFontSizes(theme)

export default theme
