import axios from 'axios'
import type { TMDBResponse, Movie } from '../types'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY ?? 'f2ef397f5283ab9ae310098bd88e11f1'
const BASE_URL = 'https://api.themoviedb.org/3'

// default axios instance with api_key and a sensible default language (Vietnamese)
const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: 'en-EN' },
})

// Helper list endpoints accept an optional `page` parameter to support pagination/load-more
export const fetchPopular = (page = 1) => api.get<TMDBResponse>('/movie/popular', { params: { page } })
export const fetchNowPlaying = (page = 1) => api.get<TMDBResponse>('/movie/now_playing', { params: { page } })
export const fetchTopRated = (page = 1) => api.get<TMDBResponse>('/movie/top_rated', { params: { page } })
export const fetchTopRatedShows = (page = 1) => api.get<TMDBResponse>('/tv/top_rated', { params: { page } })
export const fetchUpcoming = (page = 1) => api.get<TMDBResponse>('/movie/upcoming', { params: { page } })

// Movie detail returns a single Movie object
export const fetchMovieDetail = (id: number) => api.get<Movie>(`/movie/${id}`)

export default api