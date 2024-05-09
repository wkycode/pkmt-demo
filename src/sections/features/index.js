import { Box, Grid } from "@mui/material"
import FeatureCard from "../../components/FeatureCard"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import MultipleStopIcon from "@mui/icons-material/MultipleStop"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import KeyIcon from "@mui/icons-material/Key"
const featureContents = [
  {
    logo: <ExitToAppIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />,
    title: "Web2 Login",
    content: "Managing digital assets with email and password",
  },
  {
    logo: <MultipleStopIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />,
    title: "Multi-chain L2",
    content:
      "Instant settlement with no transaction fees across multiple chains, including BTC and ETH.",
  },
  {
    logo: <Diversity3Icon sx={{ color: "#ffffff", fontSize: "2rem" }} />,
    title: "Programmable Access",
    content: "Manage digital assets as a group with customised controls",
  },
  {
    logo: <KeyIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />,
    title: "Key Recovery",
    content:
      "No headaches of managing private keys with customised on-chain key recovery mechanism",
  },
]
const FeaturesSection = () => {
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
      <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
        {featureContents.map((feature, index) => (
          <Grid key={index} item xs={12} sm={6} lg={3} width={"100%"}>
            <FeatureCard
              logo={feature.logo}
              title={feature.title}
              content={feature.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturesSection
