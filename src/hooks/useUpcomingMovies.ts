import { useQuery } from '@tanstack/react-query'
import  { fetchUpcoming } from '../api/tmdb'
import type { Movie } from '../types'
export function useUpcomingMovies(page:number) {
  const pageParam = page ||1
  return useQuery<Movie[]>({
    queryKey: ['movies', 'upcoming',pageParam],
    queryFn: () => fetchUpcoming(pageParam).then(res => res.data.results),
  })
}