import { useQuery } from '@tanstack/react-query'
import  { fetchTopRated } from '../api/tmdb'
import type { Movie } from '../types'

export function useTopRatedMovies(page:number) {
   const pageParam = page ||1
  return useQuery<Movie[]>({
   
    queryKey: ['movies', 'top_rated',pageParam],
    queryFn: () => fetchTopRated(pageParam).then(res => res.data.results),
  })
}