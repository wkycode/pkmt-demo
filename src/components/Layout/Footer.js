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
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "1.25rem",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              © 2024 PKMT Limited
            </Typography>
          </Box>
        </Box>
      </Paper>
    </footer>
  )
}

export default Footer
