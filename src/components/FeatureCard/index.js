import { Avatar, Box, Card, Typography, CardContent } from "@mui/material"

const FeatureCard = ({ logo, title, content }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        backdropFilter: "brightness",
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)",
      }}
      elevation={8}
    >
      <CardContent
        sx={(theme) => ({
          display: "flex",
          height: "100%",
          padding: "3rem 1.5rem",
          flexDirection: "column",
          boxSizing: "border-box",
          [theme.breakpoints.up("md")]: {
            padding: "3rem 1.5rem 1.5rem 1.5rem",
          },
        })}
      >
        <Box display="flex" justifyContent="center" sx={{ mb: 3 }}>
          <Avatar
            sx={{
              width: "4rem",
              height: "4rem",
              background:
                "linear-gradient(135deg, rgba(41,50,65,1) 50%, rgba(203,209,234,1) 100%)",
            }}
          >
            {logo}
          </Avatar>
        </Box>
        <Box>
          <Typography
            align="center"
            sx={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "1.25rem",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ padding: ".5rem" }}>
          <Typography
            align="center"
            sx={{
              fontSize: "1rem",
              color: "#ffffff",
            }}
          >
            {content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
export default FeatureCard
