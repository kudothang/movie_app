import { useQuery } from '@tanstack/react-query'
import  { fetchNowPlaying } from '../api/tmdb'
import type { Movie } from '../types'

export function useNowPlaying(page: number) {
  const pageParam = Number(page) || 1
  return useQuery<Movie[]>({
    queryKey: ['movies', 'now_playing'],
    queryFn: () => fetchNowPlaying(pageParam).then(res => res.data.results),
    staleTime: 1000 * 60, // 1 minute
  })
}