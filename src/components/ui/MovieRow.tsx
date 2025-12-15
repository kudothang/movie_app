import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MovieCard from '../ui/MovieCard'
import type { Movie } from '../../types'

interface Props {
  title: string
  movies: Movie[]
  isLoading?: boolean
}

export default function MovieRow({ title, movies, isLoading }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4
 
  if (isLoading) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex gap-3">
          {[...Array(itemsPerPage)].map((_, i) => (
            <div
              key={i}
              className="flex-1 w-32 h-48 bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </section>
    )
  }

  const visibleMovies = movies.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )
  const canPrev = currentIndex > 0
  const canNext = currentIndex + 1 < movies.length

  const handlePrev = () => {
    if (canPrev) setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (canNext) setCurrentIndex(currentIndex + 1)
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex gap-3 overflow-hidden">
          {visibleMovies.map(movie => (
            <div key={movie.id} className="flex-1 w-32">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        {canPrev && (
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer  left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full hover:scale-120 transition"
          >
            <ChevronLeft size={60} color='#007AFF'/>
          </button>
        )}
        {canNext && (
          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full hover:scale-120 transition"
          >
            <ChevronRight size={60} color='#007AFF'/>
          </button>
        )}
      </div>
    </section>
  )
}