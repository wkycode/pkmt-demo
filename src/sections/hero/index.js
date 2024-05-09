import { Box, Typography } from "@mui/material"
import ContactUs from "../../components/ContactUs"

const HeroSection = () => {
  return (
    <Box
      sx={(theme) => ({
        zIndex: 1,
        display: "flex",
        position: "relative",
        alignItems: "center",
        marginTop: "3.125rem",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.up("md")]: { marginTop: "7.5rem" },
      })}
    >
      <Typography
        variant="h1"
        align="center"
        fontWeight="bold"
        sx={(theme) => ({
          color: "#ffffff",
          fontSize: "2.5rem",
          [theme.breakpoints.up("md")]: { fontSize: "3.125rem" },
        })}
      >
        DRIVING WEB3 ADOPTION
      </Typography>
      <Typography
        variant="h2"
        align="center"
        sx={(theme) => ({
          marginTop: "1.25rem",
          maxWidth: 920,
          color: "#CBD1EA",
          fontSize: "1.25rem",
          [theme.breakpoints.up("md")]: { fontSize: "2.25rem" },
        })}
      >
        Simplifying the transition to Web3 for businesses and users
      </Typography>
      <Box sx={{ marginTop: "2.25rem" }}>
        <ContactUs />
      </Box>
    </Box>
  )
}

export default HeroSection
