'use client'

import * as React from 'react'
import { cn } from '@/utilities/ui'
import { Carousel, CarouselContent, type CarouselApi } from '@/components/ui/carousel'

type Props = { children: React.ReactNode; className?: string }

export function CarouselWithDots({ children, className }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  return (
    <div className="relative">
      <Carousel setApi={setApi} className={className}>
        <CarouselContent>{children}</CarouselContent>
      </Carousel>

      {count > 1 && (
        <div className="flex gap-2 mt-2 absolute bottom-10 items-center justify-center w-full">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'size-3 rounded-full transition-colors',
                current === index ? 'bg-white' : 'border-2',
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? 'true' : 'false'}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
