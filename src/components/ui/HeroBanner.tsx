import { Play } from 'lucide-react'
import { usePopularMovies } from '../../hooks/usePopularMovies'

export default function HeroBanner() {
  const { data: movies, isLoading } = usePopularMovies(1)
  if (isLoading || !movies?.[0]) return <div className="h-96 bg-gray-800 animate-pulse" />

  const movie = movies[1]
  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  return (
    <div className="relative h-120 mb-8 overflow-hidden rounded-lg">
      <img src={backdrop} alt={movie.title} className="w-full h-full object-cover" />
      <div className="absolute top-40 left-4 text-white">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <h1 className='text-xl font-medium'>Releasing {movie.release_date}</h1>
         <div className='flex items-center mt-4 gap-4'>
         <button className="
         w-12 h-12 rounded-full 
        bg-yellow-400 flex items-center justify-center shadow-lg
        hover:bg-yellow-300 transition
      ">
        <Play size={24} className="text-white" />
      </button>
       <h1 className='text-xl font-medium'>Watch Trailer</h1>
       </div>
      </div>
    </div>
  )
}