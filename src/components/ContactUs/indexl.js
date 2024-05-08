import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material"
import DirectionsIcon from "@mui/icons-material/Directions"
const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={(theme) => ({
          marginBottom: "1.25rem",
          maxWidth: 920,
          color: "#ffffff",
          fontSize: "1.25rem",
          [theme.breakpoints.up("lg")]: { fontSize: "1.75rem" },
        })}
      >
        Ready to experience the future? Contact us!
      </Typography>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          background: "rgba(0,0,0, 0.35)",
          border: "1px solid white",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your email"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider
          color="#ffffff"
          sx={{ height: 28, m: 0.5, color: "#ffffff" }}
          orientation="vertical"
        />
        <IconButton sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}

export default ContactUs
