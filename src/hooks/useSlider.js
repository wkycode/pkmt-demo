import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"

const useToggleSlide = ({
  mobileView = 1.5,
  tabletPerView = 2.25,
  desktopPerView = 3.5,
  spacing = 15,
  initialSlide = 0,
  loop = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 1,
      loop: loop,
      origin: "center",
      breakpoints: {
        "(min-width: 600px)": {
          slides: {
            origin: "center",
            spacing: spacing,
            perView: tabletPerView,
          },
        },
        "(min-width: 900px)": {
          slides: {
            origin: "center",
            spacing: spacing,
            perView: desktopPerView,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      slides: {
        origin: "center",
        perView: mobileView,
        spacing: spacing,
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        if (loop) {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 1500)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        }
      },
    ]
  )

  return {
    currentSlide,
    loaded,
    sliderRef,
    instanceRef,
  }
}

export default useToggleSlide
