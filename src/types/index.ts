export interface Movie {
  id: number
  title: string
  original_title: string
  poster_path: string
  backdrop_path: string
  overview: string
  vote_average: number
  release_date: string
  movie_cast: Array<{
    name: string
    character: string
    profile_path: string
  }>
}

export interface TMDBResponse {
  results: Movie[]
  page: number
  total_pages: number
}