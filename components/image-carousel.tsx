'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react'

interface GalleryImage {
  src: string
  caption: string
}

interface ImageCarouselProps {
  images: GalleryImage[]
}

function isPdf(src: string) {
  return src.toLowerCase().endsWith('.pdf')
}

function isVideo(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src)
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 340
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  if (images.length === 0) return null

  return (
    <>
      <div className="group/carousel relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 group-hover/carousel:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 group-hover/carousel:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex w-75 shrink-0 cursor-pointer flex-col"
              onClick={() =>
                isPdf(image.src)
                  ? window.open(image.src, '_blank')
                  : setSelectedIndex(index)
              }
            >
              <div className="relative flex h-50 w-75 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-card">
                {isPdf(image.src) ? (
                  <iframe
                    src={`${image.src}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="pointer-events-none h-full w-full scale-100"
                    title={image.caption}
                  />
                ) : isVideo(image.src) ? (
                  <video
                    src={image.src}
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}
                  />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(
                selectedIndex > 0 ? selectedIndex - 1 : images.length - 1
              )
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {isPdf(images[selectedIndex].src) ? (
              <iframe
                src={images[selectedIndex].src}
                className="h-[75vh] w-[80vw] rounded-lg"
                title={images[selectedIndex].caption}
              />
            ) : isVideo(images[selectedIndex].src) ? (
              <video
                src={images[selectedIndex].src}
                controls
                autoPlay
                muted
                playsInline
                className="max-h-[75vh] w-auto rounded-lg"
              />
            ) : (
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                width={1200}
                height={800}
                className="max-h-[75vh] w-auto rounded-lg object-contain"
              />
            )}
            <p className="mt-3 text-center text-sm text-white/80">
              {images[selectedIndex].caption}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(
                selectedIndex < images.length - 1 ? selectedIndex + 1 : 0
              )
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white transition-colors hover:bg-black/70"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
