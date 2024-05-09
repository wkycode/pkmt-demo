import "./App.css"
import theme from "./style/theme"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/hero"
import { Box, Container, ThemeProvider } from "@mui/material"
import FeaturesSection from "./sections/features"
import { useEffect, useRef, useState } from "react"
import AboutSection from "./sections/about"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Layout/Footer"
import NewsSection from "./sections/News"

function App() {
  const contactRef = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          overflowX: "clip",
          position: "relative",
        }}
      >
        <Box>
          <img
            className="hero_background"
            src="/images/heroBackground.png"
            alt="Hero Background"
          />
        </Box>
        {/* TOP DONUT */}
        <Box
          sx={{
            position: "absolute",
            width: "270px",
            height: "270px",
            top: "-67px",
            left: "67%",
            visibility: "visible",
            willChange: "transform",
            transform: `rotate(${0 + scrollTop / 6}deg)`,
          }}
        >
          <img src="/images/donut.png" className="img-fluid" alt="donut" />
        </Box>
        {/* LEFT DONUT */}
        <Box
          sx={{
            position: "absolute",
            width: "610px",
            height: "610px",
            top: "90px",
            left: "-210px",
            visibility: "visible",
            willChange: "transform",
            transform: `rotate(${0 + scrollTop / 4}deg)`,
          }}
        >
          <img src="/images/donut.png" className="img-fluid" alt="donut" />
        </Box>
        {/* RIGHT DONUT */}
        <Box
          sx={{
            position: "absolute",
            width: "396px",
            height: "396px",
            top: "780px",
            right: "-145px",
            visibility: "visible",
            willChange: "transform",
            transform: `rotate(${0 + scrollTop / 6}deg)`,
          }}
        >
          <img src="/images/donut.png" className="img-fluid" alt="donut" />
        </Box>
        <Box
          className="App"
          sx={{
            // height: "500vh",
            background: "rgba(17, 19, 26, 1)",
          }}
        >
          <NavBar contactRef={contactRef} />
          <Container maxWidth="xl">
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <NewsSection />
            <Box
              ref={contactRef}
              sx={(theme) => ({
                paddingBottom: "3.125rem",
                [theme.breakpoints.up("md")]: { paddingBottom: "7.5rem" },
              })}
            >
              <ContactUs />
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
