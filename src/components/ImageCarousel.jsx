import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// 在這裡替換成你自己的照片路徑（最多 5 張）
const photos = [
  'images/01.jpg',
  'images/02.JPG',
  'images/03.JPG',
  'images/04.jpg',
  'images/05.JPG',
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const goTo = (index) => {
    setCurrent((index + photos.length) % photos.length)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="h-80 w-80 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg shadow-stone-200/60 sm:h-96 sm:w-96 md:h-[450px] md:w-[450px] flex items-center justify-center">
          <img
            src={photos[current]}
            alt={`個人照片 ${current + 1}`}
            className="h-full w-full object-contain transition-opacity duration-300"
          />
        </div>

        <button
          type="button"
          aria-label="上一張照片"
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-200 bg-white/90 p-2 text-stone-600 shadow-md transition-all duration-300 hover:scale-110 hover:border-stone-300 hover:text-stone-900"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          aria-label="下一張照片"
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-200 bg-white/90 p-2 text-stone-600 shadow-md transition-all duration-300 hover:scale-110 hover:border-stone-300 hover:text-stone-900"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`切換至第 ${index + 1} 張照片`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-6 bg-teal-600'
                : 'w-2.5 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
