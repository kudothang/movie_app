import { useQuery } from '@tanstack/react-query'
import  { fetchPopular} from '../api/tmdb'
import type { Movie } from '../types'

export function usePopularMovies(page: number) {
  const pageParam = page ||1;
  return useQuery<Movie[]>({
    queryKey: ['movies', 'popular'],
    queryFn: () => fetchPopular(pageParam).then(res => res.data.results),
  })
}



