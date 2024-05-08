import { useTheme } from "@emotion/react"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"

const NavBar = ({ contactRef }) => {
  const theme = useTheme()
  const desktopView = useMediaQuery(theme.breakpoints.up("lg"))
  const handleScroll = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  return (
    <Box
      py={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: desktopView ? "2rem" : "1rem" }}
    >
      <Box display="flex" alignItems="center">
        <img
          width="24px"
          height="24px"
          alt="Brand Logo"
          className="img-fluid"
          src="/images/brandLogo.png"
        />
        ;
        <Typography
          component="a"
          href="/"
          sx={{
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          PKMT
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handleScroll()}
      >
        Contact Us
      </Button>
    </Box>
  )
}
export default NavBar
