import {
  Box,
  Paper,
  Divider,
  InputBase,
  IconButton,
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
          fontSize: "1.1rem",
          [theme.breakpoints.up("md")]: { fontSize: "1.75rem" },
        })}
      >
        Ready to experience the future? Contact us!
      </Typography>

      <Paper
        component="form"
        sx={{
          width: 320,
          p: "2px 4px",
          display: "flex",
          maxWidth: "100%",
          alignItems: "center",
          border: "1px solid white",
          background: "rgba(0,0,0, 0.35)",
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
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}

export default ContactUs
