import { useTheme } from "@emotion/react"
import { Box, Paper, Typography, useMediaQuery } from "@mui/material"

const Footer = () => {
  const theme = useTheme()
  const desktopView = useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <footer>
      <Paper
        elevation={2}
        sx={{
          borderTop: "3px solid #ffffff",
          backgroundColor: "rgba(17, 19, 26, 1)",
          padding: desktopView ? "2rem" : "1rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Typography color="white">PKT</Typography>
        </Box>
      </Paper>
    </footer>
  )
}

export default Footer
