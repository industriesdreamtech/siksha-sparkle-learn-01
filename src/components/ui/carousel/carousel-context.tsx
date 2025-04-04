
import * as React from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"

type CarouselApi = UseEmblaCarouselType[1]
type AlignmentType = "start" | "center" | "end"

interface CarouselContextProps {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation?: "horizontal" | "vertical"
  opts?: any
  onScrollProgress?: (api: CarouselApi) => void
  autoplay?: boolean
  autoplayInterval?: number
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

export {
  type CarouselApi,
  type AlignmentType,
  CarouselContext
}
