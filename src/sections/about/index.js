import { Box, Grid, Paper, Typography } from "@mui/material"

const aboutContents = [
  {
    title: "Why Choose Us",
    content: [
      "No more managing private keys",
      "MVP in 2-3 months",
      "Same UX as Web2 apps",
      "Customisable tx fees",
      "Quantum safe security",
      "On-chain business collaborations",
    ],
  },
  {
    title: "Custom DApp",
    content: [
      "Customised Web3 DApps for businesses to better monetize their userbase",
    ],
  },
  {
    title: "Web3 Token Issuance",
    content: ["Issuing your own Web3 tokens that can be traded on blockchain"],
  },
  {
    title: "Custom DApp",
    content: [
      "We develop any form of financial contracts using our accrual accounting blockchain",
    ],
  },
]

const AboutSection = () => {
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
        [theme.breakpoints.up("lg")]: { marginTop: "7.5rem" },
      })}
    >
      <Paper
        elevation={10}
        sx={{
          borderRadius: "2rem",
          background: "transparent",
          border: "2px solid rgba(255,255,255,0.5)",
        }}
      >
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "sticky",
                // position: "-webkit-sticky;",
                top: 0,
                padding: "4rem",
              }}
            >
              <Typography
                variant="h2"
                align="left"
                sx={(theme) => ({
                  fontWeight: "700",
                  marginTop: "1.25rem",
                  color: "#ffffff",
                  fontSize: "1.75rem",
                  [theme.breakpoints.up("lg")]: { fontSize: "2.25rem" },
                })}
              >
                Private Key Management Technology
              </Typography>
              <Typography
                variant="h2"
                align="left"
                sx={(theme) => ({
                  fontWeight: "700",
                  marginTop: "1.25rem",
                  color: "#CBD1EA",
                  fontSize: "1rem",
                  [theme.breakpoints.up("lg")]: {
                    maxWidth: "500px",
                    fontSize: "1.25rem",
                  },
                })}
              >
                Private Key Management Technology ("PKMT") is a software dev
                house specializing in blockchain technology. Our UK and Hong
                Kong team has developed a unique permission blockchain solution
                that reimagines accrual accounting, enabling seamless transition
                of traditional financial contracts into Web3. This user-friendly
                approach makes Web3 accessible, empowering businesses to unlock
                its potential and better monetize their user base.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderLeft: "1px solid rgba(255,255,255,0.55)",
                padding: "2rem 0 ",
              }}
            >
              {aboutContents.map((block, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ position: "relative", padding: "1.5rem 3.5rem" }}
                  >
                    <Box
                      sx={{
                        left: "0",
                        width: ".75rem",
                        height: ".75rem",
                        position: "absolute",
                        borderRadius: "10000px",
                        backgroundColor: "#ffffff",
                        transform: "translateX(-50%) translateY(0.75rem)",
                      }}
                    ></Box>

                    <Typography
                      align="left"
                      sx={(theme) => ({
                        fontWeight: "700",
                        color: "#ffffff",
                        fontSize: "1.5rem",
                        // [theme.breakpoints.up("lg")]: {
                        //   maxWidth: "500px",
                        //   fontSize: "1.25rem",
                        // },
                      })}
                    >
                      {block.title}
                    </Typography>
                    {block.content.map((p) => (
                      <Typography
                        align="left"
                        sx={(theme) => ({
                          color: "#CBD1EA",
                          fontSize: "1.1rem",
                        })}
                      >
                        &#10003; {p}
                      </Typography>
                    ))}
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default AboutSection
