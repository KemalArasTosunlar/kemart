import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Carousel = React.forwardRef(({ className, children, ...props }, ref) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const totalSlides = React.Children.count(children)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative overflow-hidden" ref={ref} {...props}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white/90 text-gray-800"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white/90 text-gray-800"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-3 h-3 rounded-full p-0 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
})
Carousel.displayName = "Carousel"

const CarouselItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className="min-w-full relative"
    {...props}
  >
    {children}
  </div>
))
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselItem }
