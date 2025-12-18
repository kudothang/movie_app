export interface Movie {
  id: number
  title: string
  original_title: string
  poster_path: string
  backdrop_path: string
  overview: string
  vote_average: number
  release_date: string

}

export interface TMDBResponse {
  results: Movie[]
  page: number
  total_pages: number
}