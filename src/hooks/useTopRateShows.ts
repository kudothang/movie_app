import { useQuery } from '@tanstack/react-query'
import  { fetchTopRatedShows } from '../api/tmdb'
import type { Movie } from '../types'

export function useTopRatedShows() {
  return useQuery<Movie[]>({
    queryKey: ['movies', 'top_rated_shows'],
    queryFn: () => fetchTopRatedShows().then(res => res.data.results),
  })
}