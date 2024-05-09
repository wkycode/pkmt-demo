import "keen-slider/keen-slider.min.css"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

import useToggleSlide from "../../hooks/useSlider"
const NewsSwiper = ({ data }) => {
  const { sliderRef } = useToggleSlide({
    loop: true,
    origin: "center",
    mobileView: 1.5,
    tabletPerView: 2.5,
    desktopPerView: 3.5,
  })
  return (
    <>
      <Box ref={sliderRef} className="keen-slider">
        {data.map((ele, index) => {
          return (
            <div className="keen-slider__slide" key={index}>
              <a
                href={ele.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Card elevation={8} sx={{ height: "100%" }}>
                  <CardMedia>
                    <img
                      src={ele.thumbnail}
                      alt={index}
                      className="img-fluid"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      color="ffffff"
                      sx={{
                        lineClamp: "2",
                        overflow: "hidden",
                        WebkitLineClamp: "2",
                        display: "-webkit-box",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        marginBottom: ".5rem",
                        textDecoration: "none",
                      }}
                    >
                      {ele.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineClamp: "2",
                        overflow: "hidden",
                        WebkitLineClamp: "2",
                        display: "-webkit-box",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        textDecoration: "none",
                      }}
                    >
                      {ele.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </div>
          )
        })}
      </Box>
    </>
  )
}
export default NewsSwiper
